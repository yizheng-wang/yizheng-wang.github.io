---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, my name is Yizheng Wang. I will be a Ph.D. student in Department of Engineering Mechanics, Tsinghua University (2024), supervised by [Prof. Yinghua Liu](https://www.hy.tsinghua.edu.cn/info/1152/1778.htm) and [Prof. Rabczuk](https://scholar.google.ca/citations?user=3CBuGosAAAAJ&hl=en). I am majored in engineering mechanics, mainly doing computational solid mechanics and received my master’s degree supervised by [Prof. Yinghua Liu](https://www.hy.tsinghua.edu.cn/info/1152/1778.htm) (2019-2022) from the Institute of Solid Mechanics (ISM), Department of Engineering Mechanics, Tsinghua University, and Bachelor's degree from Civil Aviation University of China in Tianjing. I also worked as a research assistant at [Microsoft Research AI4Science](https://www.microsoft.com/en-us/research/lab/microsoft-research-ai4science/) (2022-2023). I will come to Bauhaus University as a guest researcher in Weimar supervised by [Prof. Rabczuk](https://scholar.google.ca/citations?user=3CBuGosAAAAJ&hl=en) for AI for mechanics (2023-2024).

I am majoring in solid mechanics and has rich experience in physical theory, computation, and experiment.  His research is about computational solid mechanics. I mainly focus on solving Partial Differential Equations of solid mechanics based on the physics-informed neural networks(PINNs), operator learning and deep energy method. My research interest is AI4Science, specifically AI for mechanics.


# 🔥 News
- *2023.09*: &nbsp;🎉🎉 Past PH.D program in Tsinghua University! I will come to be a first-year Ph.D in Stepember, 2024.
- *2023.08*: &nbsp;🎉🎉 Complete my second paper ["A deep complementary energy method for solid mechanics using minimum complementary energy principle"](https://arxiv.org/abs/2302.01538) and submit to CMAME!
- *2023.08*: &nbsp;🎉🎉 I have an oral presentation at [CCCM2023](http://www.cccm2023.org/) conference!
- *2023.07*: &nbsp;🎉🎉 I coorperate with my friend [Dr. Liu](https://scholar.google.com/citations?user=vRhyKQoAAAAJ&hl=en) for [the combination between RVE and PINNs](https://arxiv.org/abs/2307.16785).
- *2023.07*: &nbsp;🎉🎉 I participate in ([DACOMA-23](http://dacoma.org.cn/)) conference and meet with Prof. Rabczuk!
- *2023.05*: &nbsp;🎉🎉 I participate in [DDCM2023](https://www.d-dcm.cn/) and have an oral presentation!
- *2023.03*: &nbsp;🎉🎉 [BINN](https://www.sciencedirect.com/science/article/pii/S0045782523001366) is accepted by CMAME!
- *2022.11*: &nbsp;🎉🎉 I join Microsoft Research as a Research Assistant for [AI4Science](https://www.microsoft.com/en-us/research/lab/microsoft-research-ai4science/)!
- *2022.09*: &nbsp;🎉🎉 I participate in ([DACOMA-22](http://dacoma.org.cn/)) and win the best paper award!
- *2022.08*: &nbsp;🎉🎉 [CENN](https://www.sciencedirect.com/science/article/pii/S0045782522005096) is accepted by CMAME!
- *2022.06*: &nbsp;🎉🎉 I receive my master degree from Tsinghua University!
# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMAME</div><img src='images/CENN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CENN: Conservative energy method based on neural networks with subdomains for solving variational problems involving heterogeneous and complex geometries](https://arxiv.org/pdf/2110.01359.pdf)

**Yizheng Wang**, Jia Sun, Wei Li, Zaiyuan Lu, Yinghua Liu

[**Project**](https://www.sciencedirect.com/science/article/pii/S0045782522005096) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A deep energy method with subdomains, suitable to solve non-uniform problem with complex boundary. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMAME</div><img src='images/BINN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[BINN: A deep learning approach for computational mechanics problems based on boundary integral equations](https://arxiv.org/pdf/2301.04480.pdf)

Jia Sun, Yinghua Liu, **Yizheng Wang**, Zhenhan Yao, and Xiaoping Zheng

[**Project**](https://www.sciencedirect.com/science/article/pii/S0045782523001366) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Combine boundary element method with PINNs firstly. 
</div>
</div>
# 📝 Under Review
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMAME</div><img src='images/DCEM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A deep complementary energy method for solid mechanics using minimum complementary energy principle](https://arxiv.org/pdf/2302.01538.pdf)

**Yizheng Wang**, Jia Sun, Timon Rabczuk, and Yinghua Liu

[**Project**](https://arxiv.org/abs/2302.01538) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  We propose the deep complementary energy method (DCEM) based on the principle of minimum complementary energy firstly.  DCEM outperforms DEM in terms of stress accuracy and efficiency and has an advantage in dealing with complex displacement boundary conditions. A deep complementary energy operator method (DCEM-O) by combining operator learning with physical equations is proposed.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Renewable Energy</div><img src='images/RVEPINNs.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multi-scale modeling in thermal conductivity of Polyurethane incorporated with Phase Change Materials using Physics-Informed Neural Networks](https://arxiv.org/pdf/2307.16785.pdf)

Bokai Liu, **Yizheng Wang**, Timon Rabczuk, Thomas Olofsson, Weizhuo Lu

[**Project**](https://arxiv.org/abs/2307.16785) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We propose a hierarchical multi-scale model RVE utilizing Physics-Informed Neural Networks (PINNs).
</div>
</div>
# 🎖 Honors and Awards
- *2022.09* I participate in ([DACOMA-22](http://dacoma.org.cn/)) and win the best paper award!
- *2022.01* The team ranked 18th out of 3537 in the Public Board of 2021 Kaggle Competition!
- *2020.06* Won the 12th place in the 2020 Baidu Star Developer Competition (out of 2,312 teams)!
- *2019.09 - 2022.06* Participated in the John Ma Cup of Tsinghua University 6 times, 5 times in the top 8 of the school!
# 📖 Educations
- *2024.08 - future*, Ph.D in Department of Engineering Mechanics, Tsinghua University
- *2019.08 - 2022.06*, Master in Department of Engineering Mechanics, Tsinghua University
- *2012.08 - 2016.06*, Bachelor from College of Air Traffic Management, Civil Aviation University of China in Tianjing
# 💬 Conference
- *2023.08*, [CCCM2023](http://www.cccm2023.org/), Dalian, China: Yizheng Wang, and Yinghua Liu. “Deep energy method based on the principle of possible work” Oral Presentation at “Artificial Intelligence and Its Applications in Computational Mechanics”.

- *2023.07*, [DACOMA-23](http://dacoma.org.cn/), Beijing, China: only participate

- *2023.05*, [DDCM2023](https://www.d-dcm.cn/), Dalian, China: Yizheng Wang, and Yinghua Liu. “A deep complementary energy method for solid mechanics using minimum complementary energy principle.” Oral Presentation at “Data-driven numerical simulation of complex mechanical behavior.”

- *2022.09*, [DACOMA-22](http://dacoma.org.cn/), Beijing, China: Yizheng Wang. “Solving Partial Differential Equations of Solid Mechanics Based on PINN.”  Won “Best Paper Awards” (Master’s Thesis Supervised by Prof. Yinghua Liu)

- *2022.07*, [WCCM2022](https://www.wccm2022.org/), Yokohama, Japan: Yizheng Wang, and Yinghua Liu. “A Physics-informed Complementary Energy Form in Solid Mechanics.” Presented at Minisymposium MS1716 “Data-driven Approaches in Computational Solid Mechanics.”
# 💻 PROFESSIONAL EXPERIENCE
- *2022.11 - 2023.07*, Research Assistant at [Microsoft Research AI4Science](https://www.microsoft.com/en-us/research/lab/microsoft-research-ai4science/), Beijing, China.
- *2020.06 - 2020.08*, Research Assistant at [Shanxi Intelligence Institute of Big Data Technology and Innovation (SIBD)](https://www.sibd.org.cn/) , Taiyuan, China.
- *2016.09 - 2018.05*, Flight Dispatcher at [Zhejiang Loong Airlines Co., Ltd.](https://en.wikipedia.org/wiki/Loong_Air), Xiaoshan, China.