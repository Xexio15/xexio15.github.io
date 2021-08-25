---
title: My first failed journey in the OSCP 
date: 2021-08-25 16:00:00 +0100
categories: [Cybersecurity, OSCP]
tags: [cybersecurity, learning, oscp, courses, pentesting]     # TAG names should always be lowercase
---

Hi! Welcome to my first post in this blog. I hope you don't get brutally bored reading my horribly written posts, but I'll improve.

So, let's inaugurate this blog with a very typical write which involves OSCP.

At the start of this year 2021 I decided to take the OSCP since the opportunity came to me. But this needs some context since you don't know me and my previous experience.

So, let's start by talking a bit about my past... (If you don't care, which is completely understandable you can just jump to the OSCP thing)

## WHOAMI
I studied Computer Science in Barcelona from 2015 to 2019, but I wasn't into cybersecurity until 2019 were I really started to think to go that way, so as you can suppose, in 2019 I knew near to nothing about cybersecurity. I knew the existence of some basic attacks like SQL Injections or Cross-Site Scripting, but didn't even know how they worked, I could suppose that due to my knowledge about Web Programming, Databases, and general knowledge from the career, but that’s it.

That year I decided to do my final degree project about SIEMs, specifically about ELK, as a way to start with cybersecurity and keeping in mind my knowledge at this time. 
To be honest it wasn't the best decision since my learning was a bit poor, and now I can see why. I was so lost researching about SIEMs without a good base, the idea of a SIEM is simple but if you don't know how real-world threats work, it's difficult to have a good understanding. So, I was a bit overloaded with information and that discouraged me a lot.   
But in the end it wasn't that bad, at least I learned how ELK works, and after a year of learning a lot, I can tell that no matter if something doesn't go completely well, if you learned something in that time, it is worth it. This ELK knowledge opened me the doors a little bit and I started working as a Junior Security Consultant in September.

After a year of working, I was a bit disappointed with my learning while working, I learned a lot on how big companies work but almost nothing about cybersecurity, just some extra concepts, since I wasn't totally enjoying my work and had almost no time in the week, I hadn't the mood to learn by my own.

Then I started to think in making a change, and finally in 2020 (a year that nobody will forget) an offer to work as Application Security Analyst came to me, that job was totally new for me, I didn't even know that code analysis (SAST) was made, and since programming always has been an interesting field for me, I thought that this was the perfect offer. So, in the middle of COVID-19 (or that’s what we thought back then) and after a global quarantine (even now feels weird to think about this) I accepted that offer, and 8 months later I can tell that was a tier S+ decision in my life.

Since day 1 I learned a lot, first were the bases of the different attacks, which help a lot to learn them in SAST since you can see why every attack is possible looking at the code. With some months of work, I learned a lot of things (with a great team) and here is when I consider my cybersecurity base started (and continues because I'm still a total newbie). After some months I felt something strange, I wanted to learn more besides what I was learning from work, I was motivated!!

Then the opportunity of taking the OSCP came out. Even having zero knowledge of pentesting and a thin base of knowledge about different attacks I accepted it.


## The OSCP Journey
### First days
As I said I accepted the opportunity of taking the OSCP, it was in March 2021, but the labs will start on 18th April. The first thoughts that I had were that I wouldn't be capable, but I started doing some research until the start of the lab (keep in mind that I didn't even know how to start a pentest). 

First started to learn about enumeration using nmap for ports, dirb for web... Then I learned something that I thought would be more advanced, which are reverse shells (for those who are in the same situation as I was, a reverse shell consists essentially in having in your terminal a shell of the victim machine).

After some theory, which to be honest, it's a bit boring to read but necessary, I started to look at Hack The Box and found out there is a list with [machines like OSCP](https://docs.google.com/spreadsheets/d/1dwSMIAPIam0PuRBkCiDI88pU3yzrqqHkDtBngUHNCw8/edit#gid=1839402159). But before paying for HTB I watched some videos from [ippsec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) trying not to spoiler some machines of that list, for those who don't know about ippsec he has a known YouTube channel where he uploads HackTheBox walkthroughs.

Then I started to do some HTB machines by myself, or at least I tried. I did like 5 or 6 machines while waiting for lab time. But none of them were straight done by myself, in every machine at some point I needed to read some writeup, which I don't think it's a bad thing now but then it was a bit frustrating. From my opinion, you need to read writeups, but always after spending a lot of time searching for a solution for your problem. 
After that month, at least I had a better base to start the labs. Then the 18th of April arrived.

### Into the labs
Here started my three months personal hell.

I started the labs the first day, starting with the path recommended by Offensive Security which are 5 easy machines. For my surprise I was very comfortable doing those machines, which gave me a lot of motivation, I was really into it. I had a 3 months lab, and the first 2 months I was doing machines every day, I wanted to use all the time I could. From Monday to Friday, I only worked until 17:00 did some exercise to clear up my mind and did OSCP until 21:00/23:00 depending on every day, and like 8 hours on Saturday and Sunday. I felt super motivated, until my brain started noticing the fatigue, I was learning a lot, yes, but I almost never did anything else than work, OSCP and some breaks. 

That 2 months fatigue collided with, in my opinion, are the worst part of OSCP, which are machines with dependencies, and subnets.
My way to go was to root a machine, do a quick enumeration for users:passwords and jump to another machine. At this point I almost did every machine that I was capable that didn't have a strong dependency on other machines or whose users or passwords weren't to hide. 
So, I started doing machines from subnets, here starts a problem I wasn't aware of, which is that you need a proxy machine to connect to the subnets. After some theory reading, I managed to connect to subnets, but there is no warning that these connections can be much different than a direct connection, so I spent a lot of time trying just to enumerate or connect correctly to some machines, added to the fatigue I was talking about a lot of frustration came to me. So, after 2 months of constant OSCP, I started taking a lot more breaks, first it was a day or a weekend, but there were some weeks where I barely can't even concentrate. 

My brain needed to stop but at the same time it made me feel like I was losing the time. During these struggling days I managed to understand how subnets worked, and get into it, but I couldn't follow that every day-work again. So, I continued but in a lighter way. Apart from that, I learned a lot during these months I felt quite capable of passing the exam, so I scheduled it to 8th August 9:00 AM.

Probably you are thinking why I scheduled it just because my lab was ending and why not extend that lab or wait a bit. Simple answer, I was burned out, I just wanted to try it no matter what and "take that weight off my shoulders" (I don't know if this expression works in English, but I hope you understand what I mean). When it comes to exams, I always had this problem of not being capable of disconnecting until it's gone.

So finally, the end of the lab arrived on 17th July, I hit the 50 machines mark at the end of that day. To be honest, I didn't know if I was ready or not for the exam, I didn't know how it would be. That weeks prior to the exam I took some vacations and some days before the exam I did some HTB and remembering of Buffer Overflow exercises.

### The Exam
Finally, the exam day came, I slept a lot and woke up at 7:30 AM. I read a lot about starting with Buffer Overflow, it went pretty well I recommend following that advice. After one hour and a half I had the exploit for the Buffer Overflow done and I was pretty happy and motivated "Nice, it's 10:30 AM I still have all day". Then 14 hours of hitting a wall, that's probably the most frustrating time I ever had. 

After the Buffer Overflow I started with the 10 points machine, but couldn't figure it out. So calmly I decided to eat my breakfast and go for a 20 pointer. Same thing happened, I fully focused on those two 20 points machines, but that was a wall I couldn't pass. So, frustration came in, a lot of frustration. After 12 hours I couldn't be able of simply getting a shell, how could it be possible? That didn't go much better, at the end of the day I was exhausted, so I decided to at least take the 10 pointer to maintain a bit of pride. After some hours I got it, but it was 2:00AM already and I couldn't think anymore. So, I ended my exam after 16 hours and my journey finished.

### After the exam
The day after I was pure frustration, but after two days I started looking for good things. I learned a lot in this journey, and only in three months, three months before I didn't even know how to use nmap, and now I'm capable of hacking some machines and gained a lot of understanding on how every little thing you have misconfigured could lead to a disaster. Combined with my work all this knowledge helps me read a lot of articles that I couldn’t understand before, so in the end it was a pretty good journey. Yes, it's a pity to not get the OSCP Badge, but whatever, knowledge it's more important and I have plenty of opportunities to take another exam.

### Conclusions
After some weeks my decision has been to change a bit my way of learning. Now I have a pretty good base, and there is no exam in the skyline, so I can take my time, I'll still studying to learn more and more, but like it was a hobby, just enjoying it and taking my time to understand everything, which is something that I didn't do.

Also, if you are thinking to take the OSCP, do it, but I recommend also to do a lot of [HackTheBox](https://www.hackthebox.eu/), [VulnHub](https://www.vulnhub.com/), or the official [Offensive Security Proving Grounds](https://www.offensive-security.com/labs/individual/) which I didn’t tried yet. From my experience, HackTheBox machines were more like the exam ones than the lab (those are more obsolete). And OffSec Proving Grounds are exam retired machines if I'm not wrong.

I hope I didn't bored you a lot being my first write, here I let you some conclusions after that journey
- Try not to burn out with the labs, if you need more time take it.
- Even if you fail at the end, just look at what you learned, sounds a bit cliché, but at the end, is the only thing that matters
- There is plenty of platforms like HackTheBox, use them!
