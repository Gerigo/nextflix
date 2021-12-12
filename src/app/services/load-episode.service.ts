import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadEpisodeService {


  private _episodes = [
    {
      title: 'Trailer',
      resume: 'From the domestication of fire about 400 000 years ago to the extraction of fossil fuels: humankind evolution has led us to the development of capacities to adapt to our environment in order to face the constraints of nature. The Industrial Revolution gave rise to numerous inventions that allowed the acceleration of all human activities, leading to a demographic explosion in industrialized countries, which extends to the whole planet in the second half of the 20th century. But this emancipation of mankind from the laws of physics governing the living world is not exempt from side effects. In fact, according to Crutzen, P. J. (2006) the consequences of the multiple activities of humans on the natural cycles of the Earth have made us reach the status of a geological force, bringing the world into a new era: the Anthropocene. <br/>According to Crutzen and Steffen (2003), international tourism is one of the numerous activities that marked the transition from the Holocene to the Anthropocene. It is therefore not surprising to see that nowadays, \“<i>one of the most important factors affecting the natural environment in the world is international tourism transportations (Holden, 2016; Lenzen et al., 2018; Zaman et al., 2017) </i>\“ (Koçak, R. Ulucak, Z. Ş. Ulucak, 2020, p. 7). If tourism is intimately linked to the Anthropocene, then it is also concerned about the issues surrounding this notion, like climate change. In fact, the action of humans on nature is felt in many natural cycles, whether it is the level of biodiversity, the levels of concentration of certain gases in the atmosphere or the management of resources such as water or fish stocks. So, creating more ethical and sustainable tourism has become necessary, almost vital, given the increasingly negative impact humans are having on the planet through this field. </br>Besides, I would like to further investigate the impact of tourism on the level of biodiversity and more precisely, on animals. Animals have often been a fundamental element of our day-to-day lives. Always seen as pets, just meat, attractions or even athletes, we mostly fail to register their presence. But when we do notice them, we frequently do not categorize them as real living creatures. Given the ubiquity of animals in our daily lives, it is not surprising that they occupy an important place in tourism. No matter their species, their living areas and their usefulness, animals meet with tourists and tourism in a multitude of different approaches: \“<i>as attractions in their own right – alive or dead, wild or captive; as forms of transportation; symbolically as destination icons; as travel companions; and as components of regional cuisine</i>\” (Markwell, 2015, p. 1). <br/>Because I think we should pay more attention to non-human animals, I would like, while relying on posthuman theory, to reflect around the subject of charismatic species of the Anthropocene experiencing sustainability solutions in tourism. Firstly, I will focus on the impacts of tourism on the environmental system. Secondly, I will talk about what sustainable tourism does and how it affects nature and its inhabitants. Then, I will explain what posthuman theory and charismatic species are, so we can see how we could reinterpret current anthropocentric sustainable solutions in tourism so they could also suit animals, and to finish, I will examine how charismatic species are experiencing sustainable solutions.',
      time: 34,
      visible: true,
      index: '',
      progression: 3,
      img: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      name: 'Introduction'
    },
    {
      title: 'Episode 1',
      resume: 'Lots of places in the world depend on tourism as a key source of income and employment. Besides, according to The World Tourism Organization (UNWTO), about 1.4 billion international tourists make trips every year: that is around 44 tourists arriving every second. A high influx of visitors can gradually degrade the beauty, uniqueness, character, environment, resources, and social coherence of a tourist destination over time. Such a large number of travelers can easily be a huge challenge for many destinations. Transporting, providing accommodations, feeding, entertaining, policing and cleaning up after all these people is not a simple task. Also, tourism depends on many factors like economic, social, geographic, psychology, history, literary studies and to which the environmental factor has been added in recent years. But like every industry, tourism have impacts on the factors that support it. I will approach one of the domains that are the most impacted by tourism today: the environment. <br/> According to Buckley (2021) \“<i>there are broad distinctions between transport, accommodation, and activity components; between wilderness, rural, and urban levels of land development; and between different climates, terrain types, and ecosystems</i>\” (p. 401). Because it exists so many types of tourism, with various components, in so many different environments, stakeholders must apply different management methods. As these methods are varied, their impact on the environment will necessarily be different. For example, for city tourism, \“<i>development planning and environmental regulation are largely integrated into local government law</i>\” (p. 401), which means that the strength of their impacts will differ greatly depending on the country. Among the damages that may be made of the natural environment, we can find pressures created by noise and vibrations through increasing traffic on the roads; changes in composition of flora and fauna species, destruction of green areas, parks, clearing natural vegetation for development of tourist facilities; water pollution by domestic waste, air pollution by motor vehicle exhaust, pollution of soil by compaction, noise pollution; erosion with soil compaction that leads to increased storm runoff and surface erosion, damage to river banks; degradation of natural resources like water resources decreased by over demand, increased risks for natural fires; negative visual impact with the construction of large hotels, huge recreational and commercial areas, littering of waste resulted from tourist traffic (Troanca, 2012). On top of that, mass tourism also has a very high environmental impact on nonurban areas, like \“<i>vegetation clearance and loss of wildlife habitat; air and water pollution; noise, light, and visual disturbance to native fauna; roadkill and crush animals and their burrows</i>\” (Buckley, 2021, p. 401). But, again, if we cannot compare the rate of the impact of tourism on the environment from one city to another, then we cannot compare its impact on the environment of an urbanized area to a non-urbanized area. <br/> Nevertheless, there is one aspect of tourism that regardless of its location, is an issue for the environment: it is traveling. Travel is one of the most important elements of tourism, but also one of \“<i>its principal sources of environmental impacts</i>\” (Buckley, 2021, p. 402). Moving from one place to another can have both, local and global impacts. On one hand, there are the local impacts that are air and water pollution but also noise and visual disturbances to animals, and physical disturbances to plants and soil. On the other hand, global impacts are from fuel consumption and different gas emissions, like greenhouse ones. In fact, according to Buckley (2021), \“<i>the principal contribution (~80%) is from air transport of tourists and service items</i>\” (p. 402). All these forms of impacts contribute to climate change, making the tourism industries one of the most important actors of all the consequences that is facing the planet nowadays. <br/> We could think that because of the rise of awareness around climate change, people would change their behavior and use less air transport or even start to prioritize domestic tourism instead of international tourism, but currently, it appeared that \“<i>public knowledge of climate impacts is not influencing holiday travel, even to destinations highly susceptible to climate change</i>\” (Buckley, 2021, p. 403). On top of that, for the minority that is willing to adapt their behavior and take the direction of a more sustainable way of tourism have trouble in differentiate nature tourism to ecotourism or even, sustainable tourism. Nature tourism consists in the discovery of the fauna and flora of a natural area, without any other form of commitment. The big difference between nature tourism and the two others is the commitment to sustainable development, a key concept for ecotourism and sustainable tourism that is completely absent from the first concept. <br/> As stated by Buckley (2021), \“<i>outdoor tourism activities (like nature tourism and ecotourism) are smaller in scale than tourist towns and global air travel but are concentrated in areas where there are immediate risks to threatened species and ecosystems</i>\” (p. 404). But if tourists do not hesitate to go and search for authentic wildlife in the depths of nature, it is necessary that the latter be accessible. Unfortunately, the construction and use of these roads and tracks leads to habitat fragmentation which reduces populations of multiple wildlife species. Moreover, tourists can transport invasive pathogens, plants, and animals, that, once released in nature, can become invasive and destroy the environment: \“<i>if nonnative plant or animal species […] are introduced by tourists into areas where they thrive, the very small initial impact associated with the introduction of a single plant seed, pathogen propagule, or gravid female insect can then expand to into a major threat to native ecosystems without any further direct disturbance</i>\” (Buckley, 2021, p. 405). At last, animals can also be affected by \“<i>noise, visual and olfactory disturbances that disrupt communications and affect courtship, territorial and predation behavior</i>\” (Buckley, 2021, p. 404). <br/> To conclude we can say that the direct impacts of humans on the environment through tourism are monstrous. Unfortunately, my research is quite limited because environmental aspects are quite neglected in well-ranked tourism journals. Also, I have only talked about direct impacts of tourism as we do not have enough documentation on the indirect ones. Buckley (2021) explained that it \“<i>requires sophisticated equipment and experimental design for reliable detection</i>\” (p. 404). Due to this lack of information, we may be underestimating the impacts of tourism on the environment. Anyway, one question remains: how can we preserve the environment from tourism negative impacts? This is the moment when sustainable development takes the stage. So, while we are going to discover what sustainable tourism does, I will stay focus on the environment aspect to discover how tourism could have fewer impacts on nature and its inhabitants.',
      time: 26,
      visible: false,
      index: 1,
      progression: 18,
      img: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'The Impact of Tourism on the Environment'
    },
    {
      title: 'Episode 2',
      resume: 'First, as we just discovered, tourism increasing impacts have \“<i>led to a range of evident and potential problems and of environmental, social, cultural, economic, and political issues in destinations and systems, creating a need for alternative and more environment -and host- friendly practices in development, planning, and policies</i>\” (Saarinen, 2006, p. 1121). The solution to counteract its negative effects was to introduce sustainable development to the domain, thus creating sustainable tourism. But what really is sustainable tourism? According to Saarinen (2006), \“<i>the basic ideas and principles of sustainable development have been applied to tourism, but perhaps as a result of conceptual problems, disagreements, and the multidimensionality of both concepts (Butler 1991; Le´le´ 1991; Sharpley 2000), many commentators have stated that no exact definitions of sustainable tourism exist</i>\” (p. 1124). Even if we do not have an exact definition of this concept, we can still understand its principal aim: to create a suitable balance between the environmental, economic, and socio-cultural aspects. To achieve its goal, as we saw in class, sustainable tourism has many missions: \“<i>a positive contribution to biodiversity conservation and to poverty reduction; economic incentives for habitat protection; minimize its impact on the environment and local culture, contributing to generate income, employment, and the conservation of local ecosystems; revenues go back into nature conservation or capacity building for local communities to manage protected areas; a key vehicle in raising awareness and fostering positive behavior change for biodiversity conservation among traveling people</i>\” (sustainable development and sustainable tourism PowerPoint, slide 11).<br/> This has resulted in new forms of tourism, such as nature tourism, ecotourism or even adventure tourism. Unfortunately, \“<i>it is almost impossible to have a form of tourism development that does not have impacts upon the location in which it occurs. The naive assumption that tourism which is nature-focused will automatically be sustainable may be not only incorrect but also harmful</i>\” (Butler, 1999, p. 12). In fact, they will just have fewer and less severe impacts on the environment than large-scale developments, like mass tourism. Therefore, they could be considered but never fully as sustainable form of tourism. Besides, these activities are sometimes located in vulnerable environments which often do not have the necessary infrastructure to deal with development. By the way, Budowski (1976) explained that it exists three different ways of interactions between Human and Nature. The first one would be the ‘conflict,’ because tourism can be detrimental to Nature. The second would be the ‘coexistence’: it appears when tourism industries and stakeholders who promote the conservation of Nature, do not interact. Finally, the last interaction would be the ‘state of symbiosis,’ where tourism and conservationists are organized enough so both can benefit from their relationship. So, one last question remains: what has been put in place to make tourism more sustainable these past years and how could we improve our interaction with nature to make our two worlds be in a state of symbiosis? <br/> In 2016, governments adopted the 17 Sustainable Development Goals (SDGs) of the 2030 Agenda for Sustainable Development. Until 2030, the agenda lays out a global framework for ending extreme poverty, combating inequality and injustice, and reducing carbon emissions. According to the UNWTO, tourism can contribute directly or indirectly to all of the goals. So, by being positioned in the 2030 Agenda and by becoming sustainable by following all these goals tourism should be able to reduce its impact. I will now look at all the goals that are linked to the environment and its inhabitant. The first one is the goal 13, for Climate Action. As we saw, tourism contributes to climate change. So, one of the solutions to reduce its impact would be to lower the energy consumption and shift to renewable energy sources, especially in the transport and accommodation sector. <br/>Then, we have the goal 14 , for life below water. Coastal and maritime tourism is one of the biggest segments of tourism. To continue to be this way, marine ecosystems need to stay healthy. So, tourism development must be able to help conserve and preserve fragile marine ecosystems and help to promote a Blue Economy (BE). The Blue Economy being a strategy that would preserve the world’s oceans and water resources. The World Bank defines it as \“<i>a comprehensive concept embracing multi-aspects of oceanic sustainability ranging from sustainable fisheries to ecosystem health and preventing pollution</i>\” (Lee, Noh, S. Khim, 2020, p. 1).<br/>The last goal that is linked to the environment and its inhabitant is the 15th: life on land. Tourists are always attracted by destinations with a majestic landscape with a rich biodiversity. The conservation and preservation of biodiversity, as well as the respect for terrestrial ecosystems, can all be aided by sustainable tourism. Tourism must make more efforts to reduce waste and consumption in order to reach this goal. <br/> I really think that tourism industries, because of their importance in the world, could really show the path towards a more sustainable way and thus make other big industries to follow. <br/>Also, this research appealed me a bit. Even if sustainable development is meant to help stakeholders to change their behavior towards a better utilization of our environment, I noticed that this \“<i>shift from instrumentalism to conversation, however, remains rooted in an anthropocentric context</i>\” (Holden, 2003, p. 104). It means that even if the tourism industries want to improve towards a more sustainable tourism, it is only in the idea to continue to make money out of nature and its inhabitants. But I think, for sustainable tourism to be efficient, we need to change our relationship with the environment and stop taking what nature has to offer without giving anything back and start to think more about what it needs. So, to see beyond nature only as resources that can be legitimately used for human benefit, we need \“<i>a new environmental ethic that would have to be positioned within a non-anthropocentric context. That is an ethic which would act as a prescriber of human conduct with nature would have to view the rights of nature as equal to those of humans</i>\” (Holden, 2003, p. 105). This is an ethic that could be associated with the concept of posthumanism. <br/> In the end, even if sustainable development is supposed to establishes a suitable balance between the environmental, economic, and socio-cultural aspects of tourism development, I have noticed that economic and socio-cultural aspects will always come first as it benefits more humankind and then, the environment will have our attention, but only to make it more profitable for us. In fact, it exists only three goals out of the seventeens that really concern nature and biodiversity. In my opinion, the SDGs should be reinterpreted to take non-human leaving beings (plants, animals and smaller organisms) in direct consideration.',
      time: 41,
      visible: false,
      index: 2,
      progression: 60,
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1613&q=80',
      name: 'Sustainable Tourism'
    },
    {
      title: 'Episode 3',
      resume: 'The climatic changes caused by human activities, of which tourism is a part, are intimately linked to the water cycle. The increase in temperature accelerates the melting of ice and increases evaporation, which in turn affects the amount of precipitation (rain, snow). These disturbances perturb the seasons, accentuate extreme climatic phenomena, and threaten the stability of ecosystems. In response to this, as we saw below, we have created the United Nations Agenda 2013 for Sustainable Development that contains 17 sustainable development goals. Seventeen SDGs that must be achieved for the sake of humans and that \“<i>are not taking the interests of non-human animals into direct consideration</i>\” (Torpman, Röcklinsberg, 2021, p. 1). I think that this political construction of a division of human-animal, based on the notion of humanism, probably helps the human exploitations of animals. Humanism being a notion which emphasizes the idea that \“<i>humans are importantly distinct from non-humans and supports this distinctiveness claim with a philosophical anthropology: an account of the central features of human existence and their relations to similarly general aspects of nonhuman existence</i>\” (Roden, 2014, pp. 10-11). Yet, there is another concept that is the opposite of humanism: posthumanism. This concept is based on a \“<i>flat ontology, which denies any privileged humanist transcendental viewpoint and abolishes the categorical boundaries between humans, animals, plants and stones</i>\” (Cohen, 2019, p. 10). While relying on this theory, we could be able to reinterpret the SDGs so they could also improve the way of living of animals. According to Torpman and Röcklinsberg (2021) studies, SDGs can be divided into two categories. The first one being about human-centered SDGs only, which are the following: SDG 1: No poverty; SDG 4: Quality education; SDG 5: Gender equality; SDG 7: Affordable and clean energy; SDG 8: Decent work and economic growth; SDG 9: Industry, innovation, and infrastructure; SDG 17: Partnerships for the goal. The second category is about SDGs that could also be animal-centered (in addition to their initial human-centered aspect): SDG 2: Zero hunger; SDG 3: Good health and wellbeing; SDG 6: Clean water and sanitation; SDG 10: Reduced inequalities; SDG 11: Sustainable cities and communities; SDG 12: Responsible consumption and production; SDG 13: Climate action; SDG 14: Life below water; SDG 15: Life on land; SDG 16: Peace, justice and strong institutions. By stopping considering humans as creatures above all the others and by starting to see it as what he is: an animal, \“<i>this division may be illustrated by a Venn diagram as follows (Figure 1), where the set of human-centered SDGs constitutes a subset of the animal-centered SDGs</i>\” (Torpman, Röcklinsberg, 2021, p. 8): <br/><br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src=\"https://zupimages.net/up/21/49/y6ux.png\" class="img1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<b>Figure 1.</b>\“<i>Human-centered SDGs constitutes a subset of the animal centered SDGs</i>\” (Torpman, Röcklinsberg, 2021, p. 9) <br/><br/>If I rely on this diagram, my first thought is that reinterpreting the SDGs that are animal and human-centered could be possible. Of course, it would mean that efforts intended to attain these SDGs must take into account the effects on non-human animals, not only humans. Also, including animals in the SDGs would have a huge impact on how we are sharing the world with animals and thus, would undermine the economy. And as we know, anything that will negatively impact the economy and risk diminishing it, is never achieved, or the changes that are implemented take far too long to be realized. But, if we focus on the tourism domain, reinterpreting the SDGs might just have implication for wildlife management and conservation. To approach this idea, I have decided to take an interest in charismatic species of the Anthropocene, to try to understand how they are currently experiencing sustainable solutions in tourism and how reinterpreting the SDGs could improve the quality of their lives.',
      time: 36,
      visible: false,
      index: 3,
      progression: 74,
      img: 'https://images.unsplash.com/photo-1623743424601-12be3807f99b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
      name: 'Reinterpreting Sustainability Solutions'
    },
    {
      title: 'Episode 4',
      resume: 'Nowadays, because of climate change, scientists and wildlife professionals place conservation interventions at the heart on a not-so-inevitable decline (Black, 2019). As we saw, one of the missions of sustainable tourism is to reinject its \“<i>revenues into nature conservation or capacity building for local communities to manage protected areas</i>\” (sustainable development and sustainable tourism PowerPoint, slide 11). Also, we know that most of conservation programs for endangered species have better results when they are supported by populations in terms of fundraising, policymaking, or participatory programs. But to reach their target public, they have to make efficient communications campaigns. Only, many endangered species or ecosystems have limited appeal to the general public. Nevertheless, others, notably certain wild animals, are the object of great sympathy among them. According to this, conservationists had to classify the endangered species in four categories to try to find animals they could use in their communications campaigns. First, there are keystone species like bees or beavers \“<i>play important ecological roles in the integrity of the ecosystem structure and functioning</i>/” (Alber, Luque and Courchamp, 2018, p. 1). Then, we have the indicator species, like worms, frogs, or freshwater shrimps. They are natural organisms whose presence, absence or abundance indicates a certain environmental situation. These species can signify a change in the biological status of a particular ecosystem, and so can be used as a proxy to diagnose the health of an ecosystem. The third category is the one of umbrella species, like salmons, specific butterflies, or spotted owls. They are, in ecology, species whose large territory or ecological habitat allows the protection of many other species if it is protected. To finish with, the last category is for flagship species which are pandas, tigers, blue whales, or lions. The concept of flagship species is used in conservation biology. It consists in highlighting a particular species to increase support for biodiversity conservation in a particular context. In other words, flagship species are also known as charismatic species (even if we can find some charismatic species in the other categories) and it is these animals that are always represented in public communications. Charisma is often employed to characterize people and according to the Oxford Dictionary, it means \“<i>the powerful personal quality that some people have to attract and impress other people. </i>\” In my opinion, if some animals are designed as charismatic, it is only because they have anthropocentric characteristics, like being a terrestrial mammal, having a large body size, a nose, big round eyes, hairs. Besides, Alber, Luque and Courchamp (2018) did interesting research to discover which species were the most charismatic and which traits were associated with this charisma. Their surveys, based on six traits: rare, endangered, beautiful, cute, dangerous, and impressive were given to people from western societies because they are a major source of conservation funding. To me, choosing these six traits based on human feelings to characterize animals that are just living their lives proves that for us to care about them, we need to be able to relate to them or they need to make us feel emotions like fear in order for us to consider them. Through the study of Alber, Luque and Courchamp (2018), 20 species could be recognized as charismatic: \“<i>the majority of species are large-sized mammals (four big cats, three bears, one canid, two primates, two cetaceans and five large ungulates, while the remaining three are a smaller mammal (koala), a large reptile (crocodile), and a great white shark. All are long-lived species, seventeen are terrestrial species and three, marine species</i>\” (p. 6). In my opinion, only highlighting these charismatic animals to reach an audience that either admires or fears them is probably not the best idea. I think it may have made societies forget that other animals, sometimes much more important (which are either keystone, indicator or umbrella species) are endangered species and that, by their disappearance, they might change their whole ecosystems and kill other species. <br/>I also want to point out that even if charismatic species are often easily anthropomorphized, it does not mean that they are accordingly put on the same scale as humans, especially in the domain of tourism, for which they are an important source of incomes. In fact, it is probably because they are so beneficial to humans that SDGs do not really take them into consideration. <br/>Before answering the questions of \“<i>how are charismatic species experiencing current sustainable solutions in tourism and how reinterpreting them could improve their life’s? </i>\” I would like to say that I have not found any articles about this subject and thus, I will only make suppositions (probably naive ones) that would need further research. I really think that studying this question could improve the relation between humans and animals and even with the non-humans in general. <br/>First, I know that every species is different and from diverse habitats, but as I did not find any literature about either one specific specie or about charismatic species in general, I will just make overall assumptions for all charismatic species. To do so, I will make a table (figure 2) that will compare how charismatic species might be experiencing the current anthropocentric SDGs (by projecting myself and try to understand how the impacts of humans in reaching these goals would then impact charismatic species) and how they could experience them if they were reinterpreted as animal-centered SDGs. I just want to remind you here that by meaning ‘animal-centered,’ I also include humans. <br/><br/> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src="https://zupimages.net/up/21/49/fumv.png"><br/><b>Figure 2.</b> Table comparing how charismatic species might be experiencing current anthropocentric SDGs and how they could experience them if they were reinterpreted as animal-centered SDGs.<br/><br/>In the end, it appears that only 6 out of the current 17th SDGs could have an impact on charismatic species where 7 or 9 reinterpreting SDGs (depending on how the SDGs 10 and 16 are viewed) could impact, for the best, these animals. Nowadays, by humans having better ecological behaviors and sustainable development actions, \“<i>reversals in decline have been successfully achieved in reforestation efforts, […] species recovery efforts have seen remarkable turn-around in ecosystems in Australasia, continental USA, mainland Europe, South and Southeast Asia, island of the Indian Ocean, the Pacific, Caribbean, and Mediterranean; the list is vast</i>\” (Black, 2019, p. 384). Which is very good news, but it is still not enough as we are acting in the only purpose of taking more and more from the environment and its inhabitants. The worst being that we abuse nature more than we manage to heal it and this is why reinterpreting SDGs could probably improve our relationship with nature.',
      time: 38,
      visible: false,
      index: 4,
      progression: 13,
      img: 'https://images.unsplash.com/photo-1606576974184-17d3ca6a9fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      name: 'Charismatic Species and Sustainable Solutions in Tourism'
    },
    {
      title: 'Episode 5',
      resume: 'All in all, I cannot really answer my problematic since I am missing essential information. I have just realized, more than ever, that everything is done for the sake of humans. Even if we know that our impacts on the environment through tourism are massive, the only solutions that we came up to do not have other intentions than save non-human so we can continue to benefit from them. And I am pretty sure this is why sustainable solutions; notably the SDGs are not meant to improve the way of life of animals. Also, I have focused on a list of specific charismatic animals that were designated by Western populations. It could have been different if the research had been done on another continent. In addition, the study was conducted based on six traits that, had they been different, might have varied the results. Moreover, I have relayed on the posthumanism theory that \“<i>involves new philosophical conundrums which make posthumanism philosophically incomplete and its practical application, in tourism as in other fields, problematic</i>\” (Cohen, 2019, p. 10). So, even if I think that posthumanism philosophy could be very interesting if it was used in tourism because it could probably reduce animal abuse by raising more empathy on the side of humans, it is still a concept that would be hard to put in place. Exactly like reinterpreting the SDGs so they become animal-centered. To finish with, I think it would be necessary to encourage research on sustainable solutions (whether in tourism or not) that would be as much adapted to humans as to animals in general (and not only charismatic species) as well as to all non-humans (plants and stones).',
      time: 40,
      visible: false,
      index: 5,
      progression: 29,
      img: 'https://images.unsplash.com/photo-1549942514-bf87b7b8cd99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80',
      name: 'Climax / Conclusion'
    },
    {
      title: 'Episode 6',
      resume: 'All in all, I cannot really answer my problematic since I am missing essential information. I have just realized, more than ever, that everything is done for the sake of humans. Even if we know that our impacts on the environment through tourism are massive, the only solutions that we came up to do not have other intentions than save non-human so we can continue to benefit from them. And I am pretty sure this is why sustainable solutions; notably the SDGs are not meant to improve the way of life of animals. Also, I have focused on a list of specific charismatic animals that were designated by Western populations. It could have been different if the research had been done on another continent. In addition, the study was conducted based on six traits that, had they been different, might have varied the results. Moreover, I have relayed on the posthumanism theory that \“<i>involves new philosophical conundrums which make posthumanism philosophically incomplete and its practical application, in tourism as in other fields, problematic</i>\” (Cohen, 2019, p. 10). So, even if I think that posthumanism philosophy could be very interesting if it was used in tourism because it could probably reduce animal abuse by raising more empathy on the side of humans, it is still a concept that would be hard to put in place. Exactly like reinterpreting the SDGs so they become animal-centered. To finish with, I think it would be necessary to encourage research on sustainable solutions (whether in tourism or not) that would be as much adapted to humans as to animals in general (and not only charismatic species) as well as to all non-humans (plants and stones).',
      time: 38,
      visible: false,
      index: 6,
      progression: 61,
      img: 'https://images.unsplash.com/photo-1582481960493-26179ea458e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Credits & References'
    },
  ]
  constructor() { }

  get episodes(): any[] {
    return this._episodes;
  }
}
