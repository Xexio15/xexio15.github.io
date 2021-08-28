---
title: My Bookmarks
icon: fas fa-bookmark
order: 1
layout: post
toc: true
---
I like to save everything that has been interesting for me about cybersecurity so I will share it here

## Knowledge

### Web Sessions

#### JWT

>[Why JWTs Suck as Session Tokens](https://developer.okta.com/blog/2017/08/17/why-jwts-suck-as-session-tokens)  
> An article about how JWT Tokens work, it's cons and when you probably shouldn't use them

>[Secure Access Token Storage with Single-Page Applications: Part 1 - by Ben Botto - Medium](https://medium.com/@benjamin.botto/secure-access-token-storage-with-single-page-applications-part-1-9536b0021321)  
> An article about which are the secure ways to store JWT Tokens in SPAs

>[Secure Access Token Storage with Single-Page Applications: Part 2 - by Ben Botto - Medium](https://medium.com/@benjamin.botto/secure-access-token-storage-with-single-page-applications-part-2-921fce24e1b5)  
> Second part of the previous article

>[Stop using JWT for sessions, part 2: Why your solution doesn't work - joepie91's Ramblings](http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/)  
> Even it's the second part of an article here I found a well done diagram with JWT usage cases and it's cons

#### OAuth 2

>[The most common OAuth 2.0 Hacks / Habr](https://habr.com/en/post/449182/)  
>A simple explained article about how OAuth2.0 works and it's various vulnerabilities depending on it's implementation

### Frameworks & More

>[Vue.js - Security](https://vuejs.org/v2/guide/security.html)  
>Vue official security guide

>[Vue.js - Lifecycle](https://es.vuejs.org/v2/guide/instance.html)  
>Vue lifecycle diagram

>[NuxtJS - Create a Blog with Nuxt Content](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/)  
>NuxtJS example

>[NuxtJS - Nuxt Lifecycle](https://nuxtjs.org/docs/2.x/concepts/nuxt-lifecycle)  
>Nuxt lifecycle diagram

### GraphQL

>[Some ways to find more IDOR. Hello friend! - by Thái Vũ - Jun, 2021 - Medium](https://16521092.medium.com/some-ways-to-find-more-idor-da16c93954e5)  
>An article about how to find IDORs in GraphQL

### CSV Injection

>[CSV Injection Software Attack - OWASP Foundation](https://owasp.org/www-community/attacks/CSV_Injection)  
>OWASP explanation of CSV injection and it's correct remmediation

>[What is CSV Injection? CSV Injection attacks explained](https://www.comparitech.com/blog/information-security/csv-injection-attacks/)  
>An useful article about different CSV injection payloads and mitigations

### PDF Injection

>[Portable Data exFiltration: XSS for PDFs - PortSwigger Research](https://portswigger.net/research/portable-data-exfiltration)  
>A really deep article of PoerSwigger about how PDFs work an how they can be exploited

>[Export Injection. This article will talk about a new… - by Inon Shkedy - Medium](https://inonst.medium.com/export-injection-2eebc4f17117)  
>A more concise article about PDF Injection attacks

>[cornerpirate/JS2PDFInjector: Inject a JS file into a PDF file.](https://github.com/cornerpirate/JS2PDFInjector)  
>A Java application to inject JavaScript code into PDFs

### HTTP Smuggling

>[The Powerful HTTP Request Smuggling 💪 - by Ricardo Iramar dos Santos - Medium](https://ricardoiramar.medium.com/the-powerful-http-request-smuggling-af208fafa142)  
>A bounty article about HTTP Smuggling, with a really good explanation about how it works

### YAML Injection Java

>[SnakeYaml Deserilization exploited - by Swapneil Kumar Dash - Medium](https://swapneildash.medium.com/snakeyaml-deserilization-exploited-b4a2c5ac0858)  
>An article about a SnakeYaml found vulnerabilty where explains a bit how YAML exploits work

>[artsploit/yaml-payload: A tiny project for generating SnakeYAML deserialization payloads](https://github.com/artsploit/yaml-payload)  
>The tool to generate payloads for the above vulnerabilty

### RegEx Bypass

>[Python RE Bypass Technique](https://www.secjuice.com/python-re-match-bypass-technique/)  
>An article about bypassing Regular Expresions in Python

### Mobile

>[OWASP Introduction - Mobile Security Testing Guide](https://mobile-security.gitbook.io/mobile-security-testing-guide/)  
>A really deep but pretty well written guide for Mobile Security by the OWASP

### CSP

>[Introduction - Content Security Policy](https://csp.withgoogle.com/docs/index.html)  
>Introduction to what CSP is

>[Content-Security-Policy Header Reference](https://content-security-policy.com/)  
>CSP headers reference

>[CSP Evaluator](https://csp-evaluator.withgoogle.com/)  
>Online tool to check CSP status

>[CSP Scanner - Content Security Policy Check - Analyze Bypasses](https://cspscanner.com/)  
>Another online tool to check CSP status

>[HackTricks - CSP Bypass](https://book.hacktricks.xyz/pentesting-web/content-security-policy-csp-bypass)  
>Ways to bypass CSP depending on it's configuration

>[JSONP List](https://github.com/zigoo0/JSONBee/blob/master/jsonp.txt)  
>List of sites which use JSONP used to bypass CSP

>[CSPLite - CSPGenerator](https://csplite.com/csp/svc/)  
>Simple CSP Generator tool, if you have any doubt about CSP this is probably the site which has more knowledge about it

## CyberUtils

>[APK IA Deofuscate - DeGuard - Statistical Deobfuscation for Android](http://apk-deguard.com/)  
>Online Tool to defouscate APKs using an Artificial Intelligence

>[IA JS Deofuscate - JS NICE: Statistical renaming, Type inference and Deobfuscation](http://jsnice.org/)  
>Online Tool to defouscate JavaScript using an Artificial Intelligence

>[JSFuck - Write any JavaScript with 6 Characters: []()!+](http://www.jsfuck.com/)  
>Online tool to ofuscate Javascript only using this characters: \[\]\(\)!+

### Web Security

>[testssl.sh - Testing TLS/SSL encryption anywhere on any port](https://github.com/drwetter/testssl.sh)  
>Useful tool to test TLS/SSL encryption

>[Vulnerable node.js App - GitHub](https://github.com/cr0hn/vulnerable-node)  
>A vulnerable node.js App for testing or practice

#### WAFs

>[wafw00f - GitHub](https://github.com/EnableSecurity/wafw00f)  
>Useful tool to find out if a WebApp is using a WAF, and which one

>[WAF Bypasses - Github - 0xInfection/Awesome-WAF](https://github.com/0xInfection/Awesome-WAF#known-bypasses)  
>Some WAFs bypasses that sometimes work if they are not patched

>[JWT_Tool](https://github.com/ticarpi/jwt_tool)  
>Useful tool for testing and cracking JWT Tokens

>[shcheck - A basic tool to check security headers of a website](https://github.com/santoru/shcheck)  
>A simple and useful tool to check which security headers are being used by a WebApp

>[securityheaders - Check any website (or set of websites) for insecure security headers.](https://github.com/koenbuyens/securityheaders)  
>A deeper tool to check security headers

#### Checklists

>[WebApp Pentest Checklist - GitHub](https://github.com/KathanP19/HowToHunt/blob/master/CheckList/Web-Application-Pentesting-checklist.md)  
>Web Application Pentesting Checklist

>[OWASP Pentest Checklist - GitHub](https://github.com/0xRadi/OWASP-Web-Checklist)  
>OWASP Web Application Pentesting Checklist

### Payloads

>[PayloadAllThings - GitHub](https://github.com/swisskyrepo/PayloadsAllTheThings)  
>Here you can find payloads for almost everything

>[Pentesting Payloads - GitHub](https://github.com/absolomb/Pentesting/blob/master/guides/Exploitation.md)  
>Some extra payloads for reverse shells, privilege escalation and enumeration

### Other Tools

>[HTTPX](https://github.com/projectdiscovery/httpx)  
>A GoLang tool which consist of a HTTP toolkit

>[httpbin.org](https://httpbin.org/)  
>A simple HTTP Request & Response Service

>[Screenshot Guru - Online Screen Capture for Websites](https://screenshot.guru/)  
>Useful online tool to do a screenshot of a webpage without the need of access to it yourself

>[evil-winrm - GitHub](https://github.com/Hackplayers/evil-winrm)  
>A tool to spawn a reverse shell via WinRM (Windows Remote Management)

### Pentesting WebLabs

>[Proving Grounds Play and Practice - Offensive Security](https://www.offensive-security.com/labs/individual/)  
>OSCP Official Labs (apart of the courses)

>[Hack The Box: Hacking Training For The Best - Individuals & Companies](https://www.hackthebox.eu/)  
>One of the most used hacking platforms with a lot of machines to hack

>[TryHackMe - Cyber Security Training](https://tryhackme.com/)  
>Another well-known hacking platform I didn't tried

>[Vulnerable By Design ~ VulnHub](https://www.vulnhub.com/)  
>A FREE hacking platform where you have to host the vulnerable machines by downloading it's VM file

### General

>[MalwareSourceCode - Github](https://github.com/vxunderground/MalwareSourceCode)  
>Source code of existing Malware

>[/home/six2dez/.pentest-book - Pentest Book](https://pentestbook.six2dez.com/)  
>A knowledge base for pentesting

>[Awsome-Linux-Software - GitHub](https://github.com/luong-komorebi/Awesome-Linux-Software)  
>Interesting Linux Software

>[Linux Static Binaries - GitHub](https://github.com/andrew-d/static-binaries/tree/master/binaries/linux/x86_64)  
>Static binaries for linux

### Proxies

>[mitmproxy - an interactive HTTPS proxy](https://mitmproxy.org/)  
>A powerful CLI HTTP Proxy

>[Burp Suite - Application Security Testing Software - PortSwigger](https://portswigger.net/burp)  
>Probably the most known HTTP Proxy out there

### Leaks

>[RaidForums \ Leaks](https://raidforums.com/index.php)  
>A forum where leaks are announced and selled. Just take a look don't take part

## GitHubLOLs (Weird&Funny Projects)

>[liaoxiong3x/DeepCreamPy](https://github.com/liaoxiong3x/DeepCreamPy)  
>A special way to train a Neural Network

>[laynH/Anime-Girls-Holding-Programming-Books: Anime Girls Holding Programming Books](https://github.com/laynH/Anime-Girls-Holding-Programming-Books)  
>Everything it's OK here

>[DIGITALCRIMINAL/OnlyFans: Scrape all the media from an OnlyFans account - Updated regularly](https://github.com/DIGITALCRIMINAL/OnlyFans)  
>Needs

## Interesting Readings

>[/r/netsec - Information Security News & Discussion](https://www.reddit.com/r/netsec/)  
>The netsec subreddit, the best way to find the latest news and a buch of interesting articles

>[Trending repositories on GitHub today · GitHub](https://github.com/trending)  
>If you are a code freak here you will have your best time

>[Blog - Red Timmy Security](https://www.redtimmy.com/blog/)  
>A blog with a bunch of articles

>[List of bug bounty writeups · Pentester Land](https://pentester.land/list-of-bug-bounty-writeups.html)  
>A list with bug bounties articles

>[Forgot password? Taking over user accounts Kaminsky style](https://sec-consult.com/blog/detail/forgot-password-taking-over-user-accounts-kaminsky-style/)  
>An interesting way to exploit the Forgot Password feature

>[The-Login/DNS-Reset-Checker: Tools to assess the DNS security of web applications](https://github.com/The-Login/DNS-Reset-Checker)  
>Tool created for the above article

>[You ain’t got no problem, Jules. I’m on the Multifactor. - by Curtis Brazzell - Jul, 2021 - Medium](https://curtbraz.medium.com/you-aint-got-no-problem-jules-i-m-on-the-multifactor-e05d5e2a6ade)  
>An article about how Multifactor can be exploited

>[Counter-Strike Global Offsets: reliable remote code execution - secret club](https://secret.club/2021/05/13/source-engine-rce-join.html)  
>An article about how they got RCE in CS:GO

>[How to analyze mobile malware: a Cabassous/FluBot Case study – NVISO Labs](https://blog.nviso.eu/2021/04/19/how-to-analyze-mobile-malware-a-cabassous-flubot-case-study/)  
>Example on how to analyze mobile malware with FluBot (Known for a massive banking apps attack in Spain)

>[How I Stole Your Siacoin · mtlynch.io](https://mtlynch.io/stole-siacoins/)  
>How somebody lost it's wallet passphrase and a hero recovered it

>[Let’s Enhance! How we found @rogerkver’s $1,000 wallet obfuscated private key](https://www.freecodecamp.org/news/lets-enhance-how-we-found-rogerkver-s-1000-wallet-obfuscated-private-key-8514e74a5433/)  
>Defouscating a blurred QR with 1000$ reward

>[Can you ever (safely) include credentials in a URL? – Neil Madden](https://neilmadden.blog/2019/01/16/can-you-ever-safely-include-credentials-in-a-url/)  
>An article about URL safety

>[Anti-Debug JS/WASM by Hand - REMY HAX](https://remyhax.xyz/posts/javascript-wasm-anti-debug/)  
>The most horrorific way to obfuscate JavaScript (Really well written and hard to understand even that)

>[martinvigo/email2phonenumber: A OSINT tool to obtain a target's phone number just by having his email address](https://github.com/martinvigo/email2phonenumber)  
>How to exploit Forgot Password to get a mobile phone number

>[From email to phone number, a new OSINT approach - Martin Vigo](https://www.martinvigo.com/email2phonenumber/)  
>Tool from the above article
