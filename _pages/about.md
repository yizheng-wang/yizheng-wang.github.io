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

Hi, my name is Yizheng Wang. I am a second year Ph.D. student in Department of Engineering Mechanics, Tsinghua University (2024-now), supervised by [Prof. Yinghua Liu](https://www.hy.tsinghua.edu.cn/info/1152/1778.htm) and [Prof. Rabczuk](https://scholar.google.ca/citations?user=3CBuGosAAAAJ&hl=en). I major in engineering mechanics, mainly doing computational solid mechanics and received my master’s degree supervised by [Prof. Yinghua Liu](https://www.hy.tsinghua.edu.cn/info/1152/1778.htm) (2019-2022) from the Institute of Solid Mechanics (ISM), Department of Engineering Mechanics, Tsinghua University, and Bachelor's degree from Civil Aviation University of China in Tianjin. I also worked as a research assistant at [Microsoft Research AI4Science](https://www.microsoft.com/en-us/research/lab/microsoft-research-ai4science/) (2022-2023). I have came to Bauhaus University as a guest researcher in Weimar supervised by [Prof. Rabczuk](https://scholar.google.ca/citations?user=3CBuGosAAAAJ&hl=en) for AI for mechanics (2023-2024).

I am majoring in solid mechanics and have rich experience in physical theory, computation, and experiment. I mainly focus on solving Partial Differential Equations of solid mechanics based on the physics-informed neural networks(PINNs), operator learning and deep energy method. My research interest is AI4Science, specifically AI for mechanics.

My representative works are: [KINN](https://www.sciencedirect.com/science/article/pii/S0045782524007722), [DCEM](https://onlinelibrary.wiley.com/doi/full/10.1002/nme.7585), [CENN](https://www.sciencedirect.com/science/article/pii/S0045782522005096), [PFEM](https://arxiv.org/abs/2601.03086) and [review of AI4PDEs](https://asmedigitalcollection.asme.org/appliedmechanicsreviews/article/doi/10.1115/1.4071710/1232570/Artificial-Intelligence-For-Partial-Differential?searchresult=1).

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Applied Mechanics Reviews</div><img src='images/EAAI_AI4PDEs.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Artificial intelligence for partial differential equations in computational mechanics: A review](https://asmedigitalcollection.asme.org/appliedmechanicsreviews/article/doi/10.1115/1.4071710/1232570/Artificial-Intelligence-For-Partial-Differential?searchresult=1)

**Yizheng Wang**, Jinshuai Bai, Zhongya Lin, Qimin Wang, Cosmin Anitescu, Jia Sun, Mohammad Sadegh Eshaghi, Yuantong Gu, Xi-Qiao Feng, Xiaoying Zhuang, Timon Rabczuk, and Yinghua Liu
[**PDF**](https://asmedigitalcollection.asme.org/appliedmechanicsreviews/article/doi/10.1115/1.4071710/1232570/Artificial-Intelligence-For-Partial-Differential?searchresult=1) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  We review AI for PDEs in computational mechanics, including solid mechanics, fluid mechanics, and biomechanics.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">JMPS</div><img src='images/PFEM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Pretrain Finite Element Method: A Pretraining and Warm-start Framework for PDEs via Physics-Informed Neural Operators](https://arxiv.org/abs/2601.03086)

**Yizheng Wang**, Zhongkai Hao, Mohammad Sadegh Eshaghi, Cosmin Anitescu, Xiaoying Zhuang, Timon Rabczuk, Yinghua Liu

[**PDF**](https://arxiv.org/abs/2601.03086) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-   We propose a Pretrained Finite Element Method (PFEM),a physics driven framework that bridges the efficiency of neural operator learning with the accuracy and robustness of classical finite element methods (FEM).
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJMS</div><img src='images/HomoGenius.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A pretraining-finetuning computational framework for material homogenization](https://doi.org/10.1016/j.ijmecsci.2026.111388)

**Yizheng Wang**, Xiang Li, Ziming Yan, Jinshuai Bai, Bokai Liu, Timon Rabczuk, and Yinghua Liu

[**PDF**](https://assets.researchsquare.com/files/rs-3994416/v1_covered_c15acafe-78e2-4668-ab9b-f19e7a76f99c.pdf?c=1711204018) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-   We propose a numerical homogenization model based on operator learning: HomoGenius.  The proposed model can quickly provide homogenization results for arbitrary geometries, materials, and resolutions, increasing the efficiency by a factor of 1000 compared to traditional numerical homogenization methods.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMAME</div><img src='images/KINN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Kolmogorov Arnold Informed neural network: A physics-informed deep learning framework for solving PDEs based on Kolmogorov Arnold Networks](https://www.sciencedirect.com/science/article/pii/S0045782524007722)

**Yizheng Wang**, Jia Sun, Jinshuai Bai, Cosmin Anitescu, Mohammad Sadegh Eshaghi, Xiaoying Zhuang, Timon Rabczuk, and Yinghua Liu

[**PDF**](https://arxiv.org/pdf/2406.11045) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  We propose different PDE forms based on KAN instead of MLP, termed Kolmogorov-Arnold-Informed Neural Network (KINN). We systematically compare MLP and KAN in various numerical examples of PDEs, including multi-scale, singularity, stress concentration, nonlinear hyperelasticity, heterogeneous, and complex geometry problems. Our results demonstrate that KINN significantly outperforms MLP in terms of accuracy and convergence speed for numerous PDEs in computational solid mechanics, except for the complex geometry problem. This highlights KINN's potential for more efficient and accurate PDE solutions in AI for PDEs.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJNME</div><img src='images/DCEM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DCEM： A deep complementary energy method for solid mechanics using minimum complementary energy principle](https://onlinelibrary.wiley.com/doi/full/10.1002/nme.7585)

**Yizheng Wang**, Jia Sun, Timon Rabczuk, and Yinghua Liu

[**PDF**](https://arxiv.org/pdf/2302.01538.pdf) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  We propose the deep complementary energy method (DCEM) based on the principle of minimum complementary energy for the first time.   DCEM outperforms DEM in terms of stress accuracy and efficiency and has an advantage in dealing with complex displacement boundary conditions. A deep complementary energy operator method (DCEM-O) by combining operator learning with physical equations is proposed.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Advances in Mechanics</div><img src='images/AI4PDEs_solid_meh.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AI for PDEs in solid mechanics: A review](https://lxjz.cstam.org.cn/cn/article/id/aa8f9d5c-5e44-46d0-843a-95a2495caed9)

**Yizheng Wang**, Xiaoying Zhuang, Timon Rabczuk, Yinghua Liu

[**PDF**](https://lxjz.cstam.org.cn/cn/article/id/aa8f9d5c-5e44-46d0-843a-95a2495caed9) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We review AI for PDEs in solid mechanics.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMAME</div><img src='images/CENN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CENN: Conservative energy method based on neural networks with subdomains for solving variational problems involving heterogeneous and complex geometries](https://www.sciencedirect.com/science/article/pii/S0045782522005096)

**Yizheng Wang**, Jia Sun, Wei Li, Zaiyuan Lu, Yinghua Liu

[**PDF**](https://arxiv.org/pdf/2110.01359.pdf) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A deep energy method with subdomains, suitable to solve non-uniform problems with complex boundaries. 
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJMSD</div><img src='images/transfer_learning.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Transfer Learning in Physics-Informed Neural Networks: Full Fine-Tuning, Lightweight FineTuning, and Low-Rank Adaptation](https://onlinelibrary.wiley.com/doi/10.1002/msd2.70030)

**Yizheng Wang**, Jinshuai Bai, Mohammad Sadegh Eshaghi, Cosmin Anitescu, Xiaoying Zhuang, Timon Rabczuk, and Yinghua Liu
[**PDF**](https://onlinelibrary.wiley.com/doi/epdf/10.1002/msd2.70030) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  We explore the generalization capability of transfer learning in the strong and energy form of PINNs across different boundary conditions, materials, and geometries. The transfer learning methods we employ include full finetuning, lightweight finetuning, and Low-Rank Adaptation (LoRA).
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AMS</div><img src='images/AI4PDEs_review_AMS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards the future of physics- and data-guided AI frameworks in computational mechanics](https://link.springer.com/article/10.1007/s10409-025-25340-x)

Jinshuai Bai, **Yizheng Wang**, Hyogu Jeong, Shiyuan Chu, Qingxia Wang, Laith Alzubaidi, Xiaoying Zhuang, Timon Rabczuk, Yi Min Xie, Xi-Qiao Feng, and Yuantong Gu
[**PDF**](https://onlinelibrary.wiley.com/doi/epdf/10.1002/msd2.70030) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  Discuss the future of foundational frameworks that combine the strengths of physics and data.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMAME</div><img src='images/BINN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[BINN: A deep learning approach for computational mechanics problems based on boundary integral equations](https://www.sciencedirect.com/science/article/pii/S0045782523001366)

Jia Sun, Yinghua Liu, **Yizheng Wang**, Zhenhan Yao, and Xiaoping Zheng

[**PDF**](https://arxiv.org/pdf/2301.04480.pdf) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Combine boundary element method with PINNs for the first time. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMAME</div><img src='images/RPIM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A robust radial point interpolation method empowered with neural network solvers (RPIM-NNS) for nonlinear solid mechanics](https://www.sciencedirect.com/science/article/pii/S0045782524004158?via%3Dihub)

Jinshuai Bai, Gui-Rong Liu, Timon Rabczuk, **Yizheng Wang**, Xi-Qiao Feng, YuanTong Gu

[**PDF**](https://pdf.sciencedirectassets.com/271868/1-s2.0-S0045782524X00109/1-s2.0-S0045782524004158/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLWVhc3QtMSJIMEYCIQDjd9C7dit4VQbVEPsJ2EAy9I6Kothmp4T4cMD%2FeBWs8wIhAPz0Xb5yYE%2BgwW0iX4H4yOPhhQ5M3GJXSdrYbPnFo%2Fd4KrsFCO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQBRoMMDU5MDAzNTQ2ODY1IgwPArtI%2B37iC1%2FKYysqjwVWhcvxqEXHppuVXxpqXzUJRbr40TEAtKSRpPoCAf2tCbNvciKla%2BHmZGd3WYLvUrSSjv%2BEF2q0rhW3dG2yEBz2gWWgtxggEYRrgfFoE1QWog0ay%2BXTdZ%2Bo83r9SM84UA8CdpsXnW1B%2FuOx%2F7RArE7JcgVRPfLx%2FDoxryjhnNdTeCMoERpaIeBvrxF27wrPpCByMUnjYqeby%2FyRdFgKth7b%2F8RyeHmxk7lY9RqdIHUedHiX4yKi%2BujHmMMNXmBkidO%2BUygWDDwL47bYxHcoClzM%2BQV%2FD6Nk0X0AoWVhQ5X8GyvqUJElriIQXXNBvSyLCw%2BtL0Nt4gGsEE%2FjhBhzHTwSdOV4RDwlWb5AKqjZ3gi%2F5xESNqlatU8CGzWpEMe1spkESsQFlChnNBByZfKOjuwkQjnRZzSXm%2BaqvOPKWsz%2ByovV%2BBSEMw6HSsKuWzAA7ZaK%2F5zuib%2BiiRuPXJeZ08N9edAMbXik0j34kT83Jjw%2B8A8BTAtc7yqGKvRF6SX9kauGLrBZSIcX7%2BNhvvguWtKI5GaPcDr7WSLxVuHHvTmoLnvRv61RlSQJwexP0e8XBvi0XSvNjKggSaC0YocNJGyfvBEDcDPqbxF5tcH1FMrSd%2FntRmrX2Pzc7dJ2SH0jz2OHIKtFO5GOIGMvEFyYev9JdqXIAI%2Fq%2F09AJv02dwrD6WO1bw3hEQ0O9hWo%2BsRR10K48qMLR5t2qXYtI1XiKcD0MZPN3FnJOmSkFX7LT0DcXlqqE%2BdW2FDwLXCf0ExIGYcJoAsiPnp1pUR08aDIDQ6%2FKQdzxo0tUINC2oLajMDHQBO%2FRWIR2f4898Ra9RdKM2uj70BA9Ldw58OrdcGKFc2Hr0bdmzQYWfGciAiZU2SRMPPh9bMGOrABOQLSXdE135nbYGkFVjfrgWoI9FwwPja9l14beh3I5079Uun6MD14LpBs%2B9ixvYKTFxZMCgZUJ%2BQaBIgRgkIabFuTSKhU1GRqB5un3rLSpCulnLR1AqcEmYyNB7AZ5XM64LhZtVOkDt9XiZ%2FkzTJb%2BbQzQMTLQsxQUIyykFuE3V7ydCqd1O%2BFvVx15mbdTUrrOVwkn38lpkw1J4M25H69uu7eNiBx6ZlhKOwtHOXm6ig%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240627T151753Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY5GYNWCGS%2F20240627%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3c64b0e8c0115bf88b28fd057285aa452f691ea0ee529251f7a23de2e203f3c1&hash=c777003c92a315d05d9ba99e2b65785a2fcfeca0c5705c7bc1f310cb63ad3760&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S0045782524004158&tid=spdf-1f846dc2-c8c1-4453-9d34-ab9a2cfc541f&sid=4fb4a6a34ad9b745ec591d56e0efbb573fa7gxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=00025e58035159575e&rr=89a6680e99fe9f38&cc=de) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We proposed a robust radial point interpolation method empowered with neural network solvers (RPIM-NNS) for solving highly nonlinear solid mechanics problems.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMAME</div><img src='images/DEM_contact.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Energy-based physics-informed neural network for frictionless contact problems under large deformation](https://www.sciencedirect.com/science/article/pii/S0045782525000593)

Jinshuai Bai, Zhongya Lin, **Yizheng Wang**, Jiancong Wen, Yinghua Liu, Timon Rabczuk, Yuantong Gu, and Xi-Qiao Feng

[**PDF**](https://arxiv.org/pdf/2411.03671) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-   we propose an energy-based physics-informed neural network (PINN) framework for solving frictionless contact problems under large deformation
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CMAME</div><img src='images/VINO.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Variational Physics-informed Neural Operator (VINO) for Solving Partial Differential Equations](https://www.sciencedirect.com/science/article/pii/S004578252500057X)

Mohammad Sadegh Eshaghi, Cosmin Anitescu, Manish Thombre, **Yizheng Wang**, Xiaoying Zhuang, Timon Rabczuk

[**PDF**](https://arxiv.org/pdf/2411.06587) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  We combine PDEs and data using variational principles for solving partial differential equations, and the advantage of the proposed framework is that it can also work without data.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Renewable Energy</div><img src='images/RVEPINNs.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multi-scale modeling in thermal conductivity of Polyurethane incorporated with Phase Change Materials using Physics-Informed Neural Networks](https://www.sciencedirect.com/science/article/pii/S0960148123014805)

Bokai Liu, **Yizheng Wang**, Timon Rabczuk, Thomas Olofsson, Weizhuo Lu

[**PDF**](https://pdf.sciencedirectassets.com/271431/1-s2.0-S0960148123X00196/1-s2.0-S0960148123014805/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCGPiPExsafCYck0hwV4UYUnRvrhcPYHf8fUX6uNlz9%2BQIgRX%2BJJuQ7OHfxR7NNqlsppgPIqmea9szwR0ej5k2KoegqswUIPBAFGgwwNTkwMDM1NDY4NjUiDItSIooCZ2TK6LIdNyqQBa4oxASchKo2sMsxACAikWGAy9UqwSkCa%2Fh%2FtaWM%2BHQBu0GDpC1daRfX%2Bc4v8GmUjryWl2nil6cI5Oq3ZiYVmOl27JpXIkjAQHeR93gkcobFJwhhTfztqxb3byFoxRiKS542xE%2BcZFKez7qbdKy62sDdusa607RLcGLuFzqfahr0%2BZOJ6aI%2Fw6WGSnRSWgOlXREhl03ljozCKeDyYvTLg6WkAXlEyUg5ryuh6x5qdF2mNlOk%2F9Zf5PYoki2FiBRLXxdcnxCePz75V%2B%2BoEfVNcLwFpRF17OpBo%2BKTXlJYvAy9ch1ijZXM8b2KtwP8h52zkwRKWeXKXo9USR57hVgE%2BfZsLb5zmiFMSP972S1gP7z0KZ5pwqs0UYMFA%2BVY%2FXboqof0xhW2Zzd8IXFlr2ZB7VDusIb2M%2FdUWz93vZCsTNUykG%2BXdyZs%2Fc54r3WzX7pfQsfKW1zLUPX6moKG4eVKQV2aiMTguWKzp7X07qQQkf8Fss5CiQI%2BrH2i9esS146QljLsSBLVgm8%2BrVBG59Hn3G7LjJho44YIvyY%2B21pdXXnJVPs8pTSSY2CnI0EyCw%2FiAM5wD3HtHCVhDxFRXx1rRFLTDGD5Mbf4D5IsKKMXL2PPmQsKHYrwQLrJXChgmhU8ON2lTffJAhZqmI51C675yfcPGMlV8DLrVnDxgMH7q%2Fu73renpuZ2Xp9jPNn6u0zoUXyQKGPga57lTMiG8FJk8zy7W62sTOLji5ogLBZDaJ3srpknPxiG%2B0ciZDabEmMK3eNUGti8LqXF8ZO6PekH1L7y2xbcmpk%2B0r78KJcw3VnYuJXKCxKB4m%2F05s%2FVxpRfK7eur5YoL8mLyMtBZmbbrtxA9DDLv6Xry8BhRE7PekOeMNSE%2B6oGOrEBqFPDEUfllcxnKTSejLkpOplnMcOTZ%2Fb7s01ZKOn4XhjzgqALyk3sHQaOvaIElj5m7i1030MDc2cKtxsrgzowAtgl%2BdMBK5H%2FfxfwE4hgNy9Dc3K4d%2B%2Fiz%2FKtZ0lcw%2FdZslyDoQmAPRXlel00xUoXX6GWRwkQp2YcLN3k%2B%2FTS3%2FJV5SRn2hyrt5v%2FiWalPATcNbxlV6xfCabaecTlWklUTWPKoNrmjZYQMbNIclLpbwod&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231123T040029Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY5XU4IVEI%2F20231123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b9ff16e24c6c9739240dc98f82bb5fbd55b71f11216056a63be4cbaafb6487b1&hash=d2ba3638d0d62160908de45b8e0b8ad3bc53ab07b13aaa7e6c0837a20fb6c8ed&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S0960148123014805&tid=spdf-680021b1-d695-413f-a615-e6396882c9b6&sid=cb9109d15d8c834d564bfab280d72f9ed36fgxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0f155e550f595a50555903&rr=82a68168b887ad51&cc=us) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- We propose a hierarchical multi-scale model RVE utilizing Physics-Informed Neural Networks (PINNs).
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Composite Structure</div><img src='images/multi_ML.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Explainable machine learning for multiscale thermal conductivity modeling in polymer nanocomposites with uncertainty quantification](https://www.sciencedirect.com/science/article/pii/S026382232500457X)

Bokai Liu, Pengju Liu, **Yizheng Wang**, Zhenkun Li, Hongqing Lv, Weizhuo Lu, Thomas Olofsson, and Timon Rabczuk

[**PDF**](https://www.sciencedirect.com/science/article/pii/S026382232500457X) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  We
propose an innovative approach integrating interpretable stochastic machine learning with multiscale analysis to predict the macroscopic thermal conductivity of graphene-based polymer nanocomposites.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJMS</div><img src='images/Multi_head_FNO.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multi-Head Neural Operator for Modelling Interfacial Dynamics](https://doi.org/10.1016/j.ijmecsci.2026.111363)

Mohammad Sadegh Eshaghi, Cosmin Anitescu, Navid Valizadeh, **Yizheng Wang**, Xiaoying Zhuang, Timon Rabczuk

[**PDF**](https://arxiv.org/pdf/2507.17763) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-   We introduce the Multi-Head Neural Operator (MHNO), a novel neural operator architecture built to handle long temporal dynamics. MHNO uses time-step-specific projections and message-passing-inspired connections to model full time evolution in a single forward pass.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Computer & Structures</div><img src='images/Extra_loss_DEM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Energy-based methods for solving forward and inverse linear elasticity problems in 2D structures](https://www.sciencedirect.com/science/article/abs/pii/S0045794925002573)

Manish Thombre, Cosmin Anitescu, BVSS Bharadwaja, **Yizheng Wang**, Timon Rabczuk, Alankar Alankar

[**PDF**](https://www.sciencedirect.com/science/article/abs/pii/S0045794925002573) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  An additional strong-form loss is enforced on the interface to improve accuracy, incurring only negligible computational overhead in the Deep Energy Method.
</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Neurocomputing</div><img src='images/DeepBeam.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Applications of scientific machine learning for the analysis of functionally graded porous beams](https://www.sciencedirect.com/science/article/pii/S0925231224018903)

Mohammad Sadegh Eshaghi, Mostafa Bamdad, Cosmin Anitescu, **Yizheng Wang**, Xiaoying Zhuang, Timon Rabczuk

[**PDF**](https://arxiv.org/pdf/2408.02698) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-  We propose a deep learning framework using PINNs, DEM, and Operator learning (FNO: Fourier Nueral Operator) for the analysis of functionally graded (FG) porous beams.
</div>
</div>


# 📝 Under Review

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/Continual_NOs.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Replay-Based Continual Learning for Physics-Informed Neural Operators](https://arxiv.org/abs/2605.04832)

**Yizheng Wang**, Mohammad Sadegh Eshaghi, Xiaoying Zhuang, Timon Rabczuk, Yinghua Liu

[**PDF**](https://arxiv.org/abs/2605.04832) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-   Neural operators generally demonstrate strong predictive performance on in-distribution (ID) problems. However, a critical limitation of existing methods is their significant performance degradation when encountering out-of-distribution (OOD) data. To address this issue, this work introduces continual learning into physics-informed neural operators, with particular emphasis on neural operators built upon the Transolver architecture, and proposes a simple yet effective replay-based continual learning strategy. 
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/XDEM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Towards Unified AI-Driven Fracture Mechanics: TheExtended Deep Energy Method (XDEM)](https://arxiv.org/abs/2511.05888)

**Yizheng Wang**, Yuzhou Lin, Somdatta Goswami, Luyang Zhao, Huadong Zhang, Jinshuai Bai, Cosmin Anitescu, Mohammad Sadegh Eshaghi, Xiaoying Zhuang, Timon Rabczuk, Yinghua Liu

[**PDF**](https://arxiv.org/abs/2511.05888) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-   We propose Extended Deep Energy Method (XDEM), a unified deep learning framework that incorporates both displacement discontinuities and crack-tip asymptotics in the discrete setting, while flexibly coupling displacement and phase fields in the continuous setting.
</div>
</div>






<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/LMDEM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Energy Method with Large Language Model assistance: an open-source Streamlit-based platform for solving variational PDEs](https://arxiv.org/abs/2602.07838)

**Yizheng Wang**, Cosmin Anitescu, Mohammad Sadegh Eshaghi,  Xiaoying Zhuang, Timon Rabczuk, Yinghua Liu

[**PDF**](https://arxiv.org/abs/2602.07838) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-   We present LM-DEM(Large-Model-assisted Deep Energy Method), an open-source, Streamlit-based platform for solving variationalpartial differential equations (PDEs) in computational mechanics.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge"></div><img src='images/NOWS.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[NOWS: Neural Operator Warm Starts for Accelerating Iterative Solvers](https://arxiv.org/abs/2511.02481)

Mohammad Sadegh Eshaghi, Cosmin Anitescu, Navid Valizadeh, **Yizheng Wang**, Xiaoying Zhuang, Timon Rabczuk

[**PDF**](https://arxiv.org/abs/2511.02481) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-   We propose Neural Operator Warm Starts (NOWS), a hybrid strategy that harnesses learned solution operators to accelerate classicaliterative solvers by producing high-quality initial guesse.
</div>
</div>




# 🎖 Honors and Awards
- *2024.10* I participate in ([DACOMA-24](https://www.dacoma.org.cn/)) and win the best paper award again!
- *2024.05* Future Scholar at Tsinghua University (清华大学未来学者)！
- *2022.09* I participate in ([DACOMA-22](https://www.dacoma.org.cn/)) and win the best paper award!
- *2022.01* My team placed 18th out of 3537 contestants in the 2021 Kaggle Competition Public Committee (I was the first author)!
- *2020.06* My team won the 12th place in the 2020 Baidu Star Developer Competition (out of 2,312 teams)!
- *2019.09 - 2022.06* I participated in the John Ma Cup of Tsinghua University in total 6 times, and won 5 times in the top 8 of the school!
# 📖 Educations
- *2024.08 - future*, Ph.D in Department of Engineering Mechanics, Tsinghua University, Beijing, China
- *2019.08 - 2022.06*, Master in Department of Engineering Mechanics, Tsinghua University, Beijing, China
- *2012.08 - 2016.06*, Bachelor from College of Air Traffic Management, Civil Aviation University of China, Tianjin, China
# 💬 Conference
- *2025.12*, [APCOM-ACCM 2025](https://www.apcom2025.org/), Brisbane, Australia: Yizheng Wang. “Towards Unified AI-Driven Fracture Mechanics: The Extended Deep Energy Method (XDEM)”  (Oral presentation)

- *2025.10*, [DACOMA-25](https://www.dacoma.org.cn/), Beijing, China: Yizheng Wang. “Towards Unified AI-Driven Fracture Mechanics: The Extended Deep Energy Method (XDEM)”  (Oral presentation) (Chair for Machine Learning Computing for Damage and Fracture Mechanics)

- *2025.7*, [CSTAM-25](https://meeting.cstam.org.cn/userVam3/#/meetingSchedule?sid=337&mid=85&v=109&meetingplaceId=78) 中国力学大会, Changsha, China: Yizheng Wang. “AI for PDEs in computational mechanics”  (Oral presentation)

- *2024.10*, [DACOMA-24](https://www.dacoma.org.cn/), Nanjing, China: Yizheng Wang. “AI for PDEs in computational mechanics”  Won “Best Paper Awards”  (Oral presentation)

- *2024.04*, [CCSM2024](http://ccsm2024.yiyum.com/?bust=1718867815838&sid=3777&mid=963&v=100#!c/show/a/index/) 全国固体力学大会, Nanjing, China: Yizheng Wang, and Yinghua Liu. “AI for PDEs in solid mechanics”. (Oral presentation and host in computaiontal solid mechanics)

- *2023.08*, [CCCM2023](http://www.cccm2023.org/) 中国计算力学大会, Dalian, China: Yizheng Wang, and Yinghua Liu. “Deep energy method based on the principle of possible work” Oral Presentation at “Artificial Intelligence and Its Applications in Computational Mechanics”. (Oral presentation)

- *2023.07*, [DACOMA-23](https://www.dacoma.org.cn/), Beijing, China: only participate

- *2023.05*, [DDCM2023](https://www.d-dcm.cn/), Dalian, China: Yizheng Wang, and Yinghua Liu. “A deep complementary energy method for solid mechanics using minimum complementary energy principle.”  (Oral presentation)

- *2022.09*, [DACOMA-22](https://www.dacoma.org.cn/), Beijing, China: Yizheng Wang. “Solving Partial Differential Equations of Solid Mechanics Based on PINN.”  Won “Best Paper Awards” (Master’s Thesis Supervised by Prof. Yinghua Liu) (Oral presentation)

- *2022.07*, [WCCM2022](https://www.wccm2022.org/) 世界计算力学大会, Yokohama, Japan: Yizheng Wang, and Yinghua Liu. “A Physics-informed Complementary Energy Form in Solid Mechanics.” Presented at Minisymposium MS1716 “Data-driven Approaches in Computational Solid Mechanics.” (Oral presentation)
# 💻 PROFESSIONAL EXPERIENCE
- *2023.09 - 2024.08*, Guest Researcher supervised by [Prof. Rabczuk](https://scholar.google.ca/citations?user=3CBuGosAAAAJ&hl=en), Weimar, Germany.
- *2022.11 - 2023.07*, Research Assistant at [Microsoft Research AI4Science](https://www.microsoft.com/en-us/research/lab/microsoft-research-ai4science/), Beijing, China.
- *2020.06 - 2020.08*, Research Assistant at [Shanxi Intelligence Institute of Big Data Technology and Innovation (SIBD)](https://www.sibd.org.cn/) , Taiyuan, China.
- *2016.07 - 2018.05*, Flight Dispatcher at [Zhejiang Loong Airlines Co., Ltd.](https://en.wikipedia.org/wiki/Loong_Air), Xiaoshan, China.

# Reviewer:
Journal:
Journal of the Mechanics and Physics of Solids | Engineering Applications of Artificial Intelligence | Engineering Geology | Underground Space | International Journal of Impact Engineering | International Journal of Hydrology | Engineering Analysis with Boundary Elements | Energy and AI | Neural Network | Frontiers of Structural and Civil Engineering | Computer, Material and Continua | Engineering Structure | International Journal of Mechanical System Dynamics | Scientific Reports | Applied Physics A | International Journal of Mechanics and Materials in Design | Machine Learning for Computational Science and Engineering | Mechanics Based Design of Structures and Machines | International Journal of Hydromechatronics | Computers and Chemical Engineering | Journal of Building Engineering | Applied Mathematical Modelling | Thin-Walled Structures | Computers and Structures | Computer Physics Communications | IEEE Transactions on Neural Networks and Learning Systems | Results in Engineering | Neurocomputing


Conference:
2025 23rd European Control Conference 
# [My CV](https://github.com/yizheng-wang/yizheng-wang.github.io/blob/main/docs/YizhengWang_CV.pdf) 
# [My Recommendation from Timon Rabczuk](https://github.com/yizheng-wang/yizheng-wang.github.io/blob/main/docs/Recommendation-Yizheng.pdf)