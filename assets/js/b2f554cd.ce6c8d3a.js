"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"datastore-release","metadata":{"permalink":"/blog/datastore-release","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-05-19-datastore-release.md","source":"@site/blog/2022-05-19-datastore-release.md","title":"Datastore released (version 3.1.0)","description":"I have been swamped by quite few things right now. So, this is going to be only a very short post to mark another big milestone in NOMAD development.","date":"2022-05-19T00:00:00.000Z","formattedDate":"May 19, 2022","tags":[{"label":"NOMAD","permalink":"/blog/tags/nomad"},{"label":"datastore","permalink":"/blog/tags/datastore"},{"label":"NMRium","permalink":"/blog/tags/nm-rium"}],"readingTime":0.755,"truncated":false,"authors":[{"name":"Tomas Lebl","title":"Creator of NOMAD","url":"https://github.com/tomlebl","imageURL":"https://github.com/tomlebl.png","key":"tomlebl"}],"frontMatter":{"slug":"datastore-release","title":"Datastore released (version 3.1.0)","authors":["tomlebl"],"tags":["NOMAD","datastore","NMRium"]},"nextItem":{"title":"NMR data - from inception to visualization","permalink":"/blog/visualization"}},"content":"I have been swamped by quite few things right now. So, this is going to be only a very short post to mark another big milestone in NOMAD development.\\n\\nWe have been using NOMAD with datastore function on production server for over 2 weeks and successfully archived over 3000 experiments without any glitch. Datastore function now includes essential data search engine and data can be directly opened in **[NMRium](https://www.nmrium.org/)**. Furthermore, results of NMR data analysis can be stored back in datastore in **[NMRium](https://www.nmrium.org/)** format. All code currently running on our production server has been released on GitHub as version 3.1.0 and the documentation for **[server](/website/docs/getting-started/server-installation)** and **[spectrometer client](/website/docs/getting-started/client-installation)** installation has been updated.\\n\\nObviously, there is still a lot of work to build a system that would seamlessly take NMR data from inception to publication. However, the current state of development makes me think that this is just a question of time."},{"id":"visualization","metadata":{"permalink":"/blog/visualization","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-04-07-visualization.md","source":"@site/blog/2022-04-07-visualization.md","title":"NMR data - from inception to visualization","description":"March was somewhat tough in many ways. So, it has been a while since I made a blog post. However, I have kept busy building NOMAD and made a decent progress with datastore function and NMRium integration.","date":"2022-04-07T00:00:00.000Z","formattedDate":"April 7, 2022","tags":[{"label":"NOMAD","permalink":"/blog/tags/nomad"},{"label":"datastore","permalink":"/blog/tags/datastore"},{"label":"NMRium","permalink":"/blog/tags/nm-rium"}],"readingTime":1.665,"truncated":true,"authors":[{"name":"Tomas Lebl","title":"Creator of NOMAD","url":"https://github.com/tomlebl","imageURL":"https://github.com/tomlebl.png","key":"tomlebl"}],"frontMatter":{"slug":"visualization","title":"NMR data - from inception to visualization","authors":["tomlebl"],"tags":["NOMAD","datastore","NMRium"]},"prevItem":{"title":"Datastore released (version 3.1.0)","permalink":"/blog/datastore-release"},"nextItem":{"title":"On the way to datastore","permalink":"/blog/datastore"}},"content":"March was somewhat tough in many ways. So, it has been a while since I made a blog post. However, I have kept busy building NOMAD and made a decent progress with datastore function and **[NMRium](https://www.nmrium.org/)** integration.\\n\\n\x3c!--truncate--\x3e\\n\\nIt seems that I have got the core of datastore function finished. Obviously, there were couple of hurdles that slowed me down little bit but at the end the result looks good and the prototype has worked very well on few test samples that I have run myself. The last bug was actually quite interesting to see. All have worked fine while I was using the spectrometer client in my test environment but run on an instrument was failing. Eventually, I have noticed that the problem stems from incomplete NMR data set being archived. It turned out that parsing status file, sending it to the server, analysing it and sending archiving command back to the client is faster than processing 1D 1H spectrum. In my opinion, that clears any doubts about capability of web application built on MERN stack to handle NMR lab data traffic. Now it\'s the time to get it under load of beta testing on the test server with one instrument and handful of beta testers.\\n\\nAnother important milestone is **[NMRium](https://www.nmrium.org/)** integration. One of the ultimate goals of NOMAD to create a platform that would take NMR data from inception to publication. I have always struggled to explain this idea and how it facilitates NMR data preservation. I have got some new ideas about it that hopefully shade some more light on overall NOMAD pursuit. You can check that in the **[introduction section](../docs/intro#how-could-nomad-help-with-nmr-data-preservation)**.\\nAs I mentioned last time, **[NMRium](https://www.nmrium.org/)** is a huge game changer and helps NOMAD to make massive leap to a stage that I would call **_\\"from inception to visualisation\\"_** witch could be a milestone about half way through. In order to demonstrate what I have got so far I recorded another **[video tutorial](../docs/video-tutorials)** showing current workflow from users perspective."},{"id":"datastore","metadata":{"permalink":"/blog/datastore","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-02-04-datastore/index.md","source":"@site/blog/2022-02-04-datastore/index.md","title":"On the way to datastore","description":"I made quite decent progress in January and have some good news to share. So, here is another blog post. Let\'s see if I can keep up the pace and make one post every month. Although, at the moment it seems that February might play the other way round.","date":"2022-02-04T00:00:00.000Z","formattedDate":"February 4, 2022","tags":[{"label":"NOMAD","permalink":"/blog/tags/nomad"},{"label":"datastore","permalink":"/blog/tags/datastore"},{"label":"video tutorials","permalink":"/blog/tags/video-tutorials"},{"label":"NMRium","permalink":"/blog/tags/nm-rium"}],"readingTime":3.53,"truncated":true,"authors":[{"name":"Tomas Lebl","title":"Creator of NOMAD","url":"https://github.com/tomlebl","imageURL":"https://github.com/tomlebl.png","key":"tomlebl"}],"frontMatter":{"slug":"datastore","title":"On the way to datastore","authors":["tomlebl"],"tags":["NOMAD","datastore","video tutorials","NMRium"]},"prevItem":{"title":"NMR data - from inception to visualization","permalink":"/blog/visualization"},"nextItem":{"title":"NOMAD 3 - Third time lucky?","permalink":"/blog/welcome"}},"content":"I made quite decent progress in January and have some good news to share. So, here is another blog post. Let\'s see if I can keep up the pace and make one post every month. Although, at the moment it seems that February might play the other way round.\\n\\n\x3c!--truncate--\x3e\\n\\n## Datastore sneak preview\\n\\nI have put together backend code for uploading data from instrument to the server and tested on one instrument and its quite nice to see that what I have planed actually works quite smoothly. So, here are some key features.\\n\\n- Upload is carried over HTTP/HTTPS using an additional data upload endpoint in the existing REST-API. Thus, there won\'t be any additional complexity of the system networking except a very small tweak of NginX configuration which will be covered in documentation once the feature is released.\\n\\n- Individual experiments are uploaded and stored as single files in compressed .zip format which should make download of data a bit faster. Further advantage could be faster indexing which make any potential transfer of the whole datatore into a new volume significantly less time consuming.\\n\\n- The times for uploading single experiment that I have seen so far were all shorter than 300 ms. Thus, the data should appear in datastore as soon as the acquisition is finished and data is stored locally on the spectrometer without any significant delays that you can experience if you synchronize network drives as we have used to do with the older prototypes.\\n\\n- Since the data upload is handled by the NOMAD spectrometer client, that will take data directly from your primary IconNMR data folder, there should be no interference with your existing NMR data storage. In another words, you should be able to run NOMAD in parallel with your existing data archiving solution if you will want to.\\n\\n## Video tutorials\\n\\nHowever, I hope that seeing NOMAD in action can help some people to understand better how the whole system actually works. Therefore, I started to record short video tutorials that demonstrate certain functions of NOMAD system. The first one shows how to connect spectrometer client to the newly installed NOMAD and monitoring a run of few experiments while feeding meta data into the database using AUTO-FEED function. You can watch it **[here](../docs/video-tutorials)**\\n\\n## NMRium integration\\n\\nUltimate goal for NOMAD is to create a seamless workflow that would take NMR data from inception to publication. In order to achieve this goal, there is a need for a tool that would allow to view, analyse and process NMR data in the web browser. It does not need to offer full spectrum of functions that typical desktop NMR processing does nowadays but it should fulfil let\'s say 90% of needs of everyday liquid NMR user/chemist. In another words, the tool should provide enough utility that NOMAD users don\'t need to download the data to their desktop computer but do all the processing and analysis on the platform where all the work can be easily stored, shared and archived.\\n\\nWe have done some work on such tool and partially implemented in version 2 prototype. While working on the datastore I started to think about NMR processing and viewing tool as the one that we already developed would be cumbersome to integrate with the new React frontend. Developing a new tool with all these requirements would be a gargantuan task but I was ready to tackle it slowly even though it would probably take years to get something that would tick all the boxes. Luckily, to my huge surprise I stumbled upon a project called **[NMRium](https://www.nmrium.org/)** which seems to be absolutely perfect fit for NOMAD needs. Moreover, the project is open source on **[GitHub](https://github.com/cheminfo/nmrium)** under MIT license and also available as React component on **[NPM](https://www.npmjs.com/package/nmrium)**. All that makes integration with NOMAD very feasible and if successful it could help NOMAD to make massive leap on its road map.\\n\\n![NMRium Screenshot](./NMRium.PNG)\\n\\nTo conclude, I would say that I can look at NMRium from perspective of NMR spectroscopist and Javascript developer as well and either way I am truly impressed. Im my opinion NMRium, could easily be a game changer not only for NOMAD but also for quite few niches of NMR spectroscopy."},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-01-06-welcome.md","source":"@site/blog/2022-01-06-welcome.md","title":"NOMAD 3 - Third time lucky?","description":"I plan to use this blog to announce new features, releases or just to post about my ideas for future development. Since this is my first post here I will try to explain little bit of the background of this project and outline where I would like to take it in near and also distant future.","date":"2022-01-06T00:00:00.000Z","formattedDate":"January 6, 2022","tags":[{"label":"NOMAD","permalink":"/blog/tags/nomad"},{"label":"background","permalink":"/blog/tags/background"},{"label":"future","permalink":"/blog/tags/future"}],"readingTime":5.205,"truncated":true,"authors":[{"name":"Tomas Lebl","title":"Creator of NOMAD","url":"https://github.com/tomlebl","imageURL":"https://github.com/tomlebl.png","key":"tomlebl"}],"frontMatter":{"slug":"welcome","title":"NOMAD 3 - Third time lucky?","authors":["tomlebl"],"tags":["NOMAD","background","future"]},"prevItem":{"title":"On the way to datastore","permalink":"/blog/datastore"}},"content":"I plan to use this blog to announce new features, releases or just to post about my ideas for future development. Since this is my first post here I will try to explain little bit of the background of this project and outline where I would like to take it in near and also distant future.\\n\\n\x3c!--truncate--\x3e\\n\\n## Background\\n\\nI have be playing with ideas about NOMAD since 2012 and over the years a team of students from the **[School of Computer Science](https://www.st-andrews.ac.uk/computer-science/)** built two prototypes of the system that have been utilised in the liquid state **[NMR facility](https://nmr.wp.st-andrews.ac.uk/)** at the University of St Andrews. The development of those prototypes was initiated and supported by funding provided by **[EPSRC](https://epsrc.ukri.org/)** (Strategic Partners Project, Impact Accelaration Account). Although the project has sparked quite considerable interest in the NMR community we have never managed to get it off the ground and install NOMAD in another NMR lab. About 3 years ago we run out of funding and students who built the prototypes have left St Andrews and I struggled to find new developers who would carry on the project with me. I assumed that the only way forward would be to find some substantial funding that would allow me to hire a developer who would be able to take over. I also thought that the project would be more sustainable if I would cross the the border and get better understanding of how web applications work and are built. Therefore, in January 2019 I started my self-taught developer journey. As soon as I started it became quite apparent that the best would be to start building NOMAD again from scratch using completely new stack. Eventually, I decided to focus on learning technologies that form so called **[MERN stack](https://www.educative.io/edpresso/what-is-mern-stack)**. In last three years, I put together plethora of small Javascript applications. At some point I got enough knowledge and confidence and started to work on a project that end up being my first take on a new NOMAD frond-end which is actually still quite close to what NOMAD v3 currently looks like and you can check it **[here](https://nmr-control.netlify.app/dashboard)**. After that I continued the journey by learning the back-end technologies and my effort culminated in May last year when the front-end was connected to a brand new back-end which allowed me to shut down the first prototype of NOMAD that has been still in production as submission portal running on nearly 10 years old server that was on a verge of collapse. Then I carried on over the summer and added batch submission function that allows users in remote labs to submit samples in batches/racks which was essential for using NOMAD in our teaching labs. The end of last year was about bug fixing, adding some minor features and building this documentation website.\\n\\n:::tip Current _Status Quo_ Summary\\n\\n- The third prototype of NOMAD system is built using completely different tech stack and the overall concept and idea is the only thing that it has in common with its predecessors.\\n\\n- NOMAD v3 has been successfully working for about 6 months connected to 6 Bruker NMR instruments of various generations ranging from AV to AV-III-HD. Thus, it seems that the prototype is ready to use MVP but currently fulfils only small subset of functions (lab monitoring and submission portal).\\n\\n- Last but not least, NOMAD v3 source code is publicly available on **[GitHub](https://github.com/nomad-nmr)** under **[AGPL-3.0 license](https://www.gnu.org/licenses/agpl-3.0.en.html)**.\\n\\n:::\\n\\n## Future Outlook\\n\\nThe next major milestone on the road map is the data storage function and experimental time accounting for monitoring dashboard. This will complement the trio of core NOMAD features and will allow to decommission ageing and stale v2 prototype. I challenge myself to reach this goal by summer this year although making any plans like that it\'s quite hard in the current environment. However, for couple of reasons the development of v3 is significantly faster than it was ever before and thus I try to keep the optimistic outlook. Another improvement that I plan for this year is implementing **[Docker](https://www.docker.com/)** technology which should significantly improve server infrastructure and streamline installation process. I also plan to carry on and add some more content on this documentation website. So far, I have tried to describe the current installation procedure as detailed as possible which could allow other NMR lab managers to possibly trial the system in their labs. Next, I want to add more information in **[features section](../docs/features/intro)** that it becomes more clear how the system operates and what benefits it brings.\\n\\n**NMR Lab Notebook** and **Decentralised Data Repository** can be seen as advanced features and it will very likely take a while until we get there. The former should facilitate collaborative interpretation of NMR data and preserving work that has been done for future use and publication. We have done a bit of work on that in v2 prototype but it is very far from ideal, quite cumbersome to use and thus usually neglected by users. However, I believe that a bit of human-computer interaction research could cut it through to success. The latter should ultimately allow to do the same on global level but there is no point to talk about this in details yet as without any adoption of NOMAD system in multiple NMR labs this feature only remains in the realm of my dreams.\\n\\n## Conclusion\\n\\nNOMAD has been developed using direct feedback from everyday users in the NMR lab and the most important thing for further development is getting such feedback from wider NMR community. If you are NMR lab manager and have a feeling that you could benefit from using NOMAD in your lab check the **[installation instructions](../docs/getting-started/system-overview)**. If that looks too daunting for you there might be somebody in IT-services who could understand and give you hand. Likely, you will need help from IT services anyway to spin up a VM for the server. Although you can run NOMAD from Linux box sitting under your office desk, using properly maintained web hosting VM will improve resilience of your system. Last but not least, get back to me with any questions that you might possibly have. I will always appreciate any kind of feedback from active or potential users of the system."}]}')}}]);