import{S as b,i as F,s as y,L as A,k as p,l as d,m as s,h as u,n as l,b as k,E as m,M as v,f as h,t as g,B as t,w as x,x as w,y as _,z as S,q as D,r as T}from"../../../../../chunks/index-317a2139.js";import{S as z}from"../../../../../chunks/SvelteMarkdown-8af5c757.js";const W=`# Stable Diffusion Models\r
\r
[TOC2]\r
\r
## Table of contents\r
\r
- [Contact](#contact)\r
- [Stable Diffusion](#stable-diffusion)\r
  - [Stable Diffusion v2.0](#stable-diffusion-v20)\r
  - [Stable Diffusion v1.5 [81761151] [a9263745]](#stable-diffusion-v15--81761151---a9263745-)\r
  - [Stable Diffusion VAE ft-mse-original](#stable-diffusion-vae-ft-mse-original)\r
  - [Stable Diffusion VAE ft-ema-original](#stable-diffusion-vae-ft-ema-original)\r
  - [Stable Diffusion Inpainting v1.5 [3e16efc8]](#stable-diffusion-inpainting-v15--3e16efc8-)\r
  - [Stable Diffusion v1.4 [4af45990] [7460a6fa] [06c50424]](#stable-diffusion-v14--4af45990---7460a6fa---06c50424-)\r
- [Waifu Diffusion](#waifu-diffusion)\r
  - [Waifu Diffusion VAE kl-f8-anime2](#waifu-diffusion-vae-kl-f8-anime2)\r
  - [Waifu Diffusion VAE kl-f8-anime](#waifu-diffusion-vae-kl-f8-anime)\r
  - [Waifu Diffusion v1.3 Full [84692140] [4470c325] [e1de58a9] [3e1a125f]](#waifu-diffusion-v13-full--84692140---4470c325---e1de58a9---3e1a125f-)\r
  - [Waifu Diffusion v1.3 beta epoch09 [a0d90b41] [134eaffb] [e90a9d02]](#waifu-diffusion-v13-beta-epoch09--a0d90b41---134eaffb---e90a9d02-)\r
  - [Waifu Diffusion v1.3 beta epoch08 [55537280] [7dd9e8e1] [d12b4159]](#waifu-diffusion-v13-beta-epoch08--55537280---7dd9e8e1---d12b4159-)\r
  - [Waifu Diffusion v1.3 beta epoch07 [3ad68e9a] [e4150f29] [39312118]](#waifu-diffusion-v13-beta-epoch07--3ad68e9a---e4150f29---39312118-)\r
  - [Waifu Diffusion v1.3 beta epoch06 [281c28bb] [3a672a8a] [d970eaf1]](#waifu-diffusion-v13-beta-epoch06--281c28bb---3a672a8a---d970eaf1-)\r
  - [Waifu Diffusion v1.3 beta epoch05 [25f7a927] [3563d59f] [9453d3e5]](#waifu-diffusion-v13-beta-epoch05--25f7a927---3563d59f---9453d3e5-)\r
  - [Waifu Diffusion v1.3 beta epoch04 [958859c3] [84d80299] [994d2e0f]](#waifu-diffusion-v13-beta-epoch04--958859c3---84d80299---994d2e0f-)\r
  - [Waifu Diffusion v1.3 beta epoch03 [63e9eb31] [22ca2722] [d8b28983]](#waifu-diffusion-v13-beta-epoch03--63e9eb31---22ca2722---d8b28983-)\r
  - [Waifu Diffusion v1.2 [0b8c694b] [45dee52b]](#waifu-diffusion-v12--0b8c694b---45dee52b-)\r
- [Anything-V3.0 [38c1ebe3] [1a7df6b8] [6569e224]](#anything-v30--38c1ebe3---1a7df6b8---6569e224-)\r
- [Cafe Unofficial Instagram TEST Model [50b987ae]](#cafe-unofficial-instagram-test-model--50b987ae-)\r
- [Trinart](#trinart)\r
  - [trinart_characters_19.2m_stable_diffusion_v1 [d64dab7f] + VAE](#trinart-characters-192m-stable-diffusion-v1--d64dab7f----vae)\r
  - [trinart2_step115000.ckpt [f1c7e952]](#trinart2-step115000ckpt--f1c7e952-)\r
  - [trinart2_step95000.ckpt [cf0bd941]](#trinart2-step95000ckpt--cf0bd941-)\r
  - [trinart2_step60000.ckpt [6ecd8e48]](#trinart2-step60000ckpt--6ecd8e48-)\r
  - [trinart_stable_diffusion_epoch3.ckpt [9d7f05fc]](#trinart-stable-diffusion-epoch3ckpt--9d7f05fc-)\r
- [SmirkingFace](#smirkingface)\r
  - [EB 1.0 [7f115f17] [7010a578] [339b9a04]](#eb-10--7f115f17---7010a578---339b9a04-)\r
    - [SF_EB_1.0_ema_vae.ckpt [7f115f17]](#sf-eb-10-ema-vaeckpt--7f115f17-)\r
    - [SF_EB_1.0_noema_vae.ckpt [7010a578]](#sf-eb-10-noema-vaeckpt--7010a578-)\r
    - [SF_EB_1.0_pruned_vae.ckpt [339b9a04]](#sf-eb-10-pruned-vaeckpt--339b9a04-)\r
  - [EBL 1.1 [967237c9]](#ebl-11--967237c9-)\r
  - [EBL 1.0 [758fda47]](#ebl-10--758fda47-)\r
- [gg1342_testrun1_pruned.ckpt [43076286] [2ccc3e58]](#gg1342-testrun1-prunedckpt--43076286---2ccc3e58-)\r
- [SXD-v0.8](#sxd-v08)\r
- [Pyro's](#pyro-s)\r
  - [Pyro's Blowjob Model v1.0 [9b5251e8]](#pyro-s-blowjob-model-v10--9b5251e8-)\r
  - [Pyro's POV Cowgirl Model](#pyro-s-pov-cowgirl-model)\r
- [Easter](#easter)\r
  - [easter_e9 [b56f765a]](#easter-e9--b56f765a-)\r
  - [easter_e5 [da453598]](#easter-e5--da453598-)\r
  - [easter_e4 [3997b596]](#easter-e4--3997b596-)\r
  - [easter_e3 [9c5ade34]](#easter-e3--9c5ade34-)\r
- [Hentai Diffusion](#hentai-diffusion)\r
  - [HD-16.ckpt [e2ec4647]](#hd-16ckpt--e2ec4647-)\r
  - [RD1412.ckpt [2140af02] [5b87f0e6] [4fdde306]](#rd1412ckpt--2140af02---5b87f0e6---4fdde306-)\r
  - [RD1212.ckpt [a1f5a67e] [37b5398c] [3b3459c8]](#rd1212ckpt--a1f5a67e---37b5398c---3b3459c8-)\r
- [Bare Feet / Full Body b4_t16_noadd [03e33bb4] [2bd8166c] [9012c514]](#bare-feet---full-body-b4-t16-noadd--03e33bb4---2bd8166c---9012c514-)\r
- [Lewd Diffusion](#lewd-diffusion)\r
  - [Lewd Diffusion 70k 2e [f4030c43]](#lewd-diffusion-70k-2e--f4030c43-)\r
  - [Lewd Diffusion 70k 1e [950d323b]](#lewd-diffusion-70k-1e--950d323b-)\r
  - [Lewd Diffusion v0 [07734b46]](#lewd-diffusion-v0--07734b46-)\r
- [Yiffy](#yiffy)\r
  - [yiffy-e18.ckpt [50ad914b]](#yiffy-e18ckpt--50ad914b-)\r
  - [yiffy-e15.ckpt [4bb305c0]](#yiffy-e15ckpt--4bb305c0-)\r
  - [yiffy-e13.ckpt [778b38ae]](#yiffy-e13ckpt--778b38ae-)\r
- [SnackBar-General-V1-E11 [16d5a5c7]](#snackbar-general-v1-e11--16d5a5c7-)\r
- [Furry](#furry)\r
  - [Furry_epoch4.ckpt [323f8dd8]](#furry-epoch4ckpt--323f8dd8-)\r
  - [Furry_epoch1.ckpt [0c891127]](#furry-epoch1ckpt--0c891127-)\r
  - [Furry_epoch0.ckpt [8c19ee5a]](#furry-epoch0ckpt--8c19ee5a-)\r
- [Zack3D_Kinky-v1.ckpt [1a75d5c6]](#zack3d-kinky-v1ckpt--1a75d5c6-)\r
- [Anal Vore AVHumanFurryPony7.ckpt [68e2e32d]](#anal-vore-avhumanfurrypony7ckpt--68e2e32d-)\r
- [R34](#r34)\r
  - [r34_e4.ckpt [6e45cf2c]](#r34-e4ckpt--6e45cf2c-)\r
  - [r34_e3.ckpt [57ea6f43]](#r34-e3ckpt--57ea6f43-)\r
  - [r34_e2.ckpt [778b68b1]](#r34-e2ckpt--778b68b1-)\r
  - [r34_e1.ckpt [f9000e4e]](#r34-e1ckpt--f9000e4e-)\r
  - [r34_150k_epoch0.ckpt [7dc34283] [7c3721c3]](#r34-150k-epoch0ckpt--7dc34283---7c3721c3-)\r
  - [gape60 [25396b85]](#gape60--25396b85-)\r
  - [gape22 [d69e1a23]](#gape22--d69e1a23-)\r
  - [gape18](#gape18)\r
- [sd-wikiart-v2.ckpt. [8f32b8df]](#sd-wikiart-v2ckpt--8f32b8df-)\r
- [Pachu-Diffusion [54d5d199]](#pachu-diffusion--54d5d199-)\r
- [TestFurry_5.ckpt [b1f1855e]](#testfurry-5ckpt--b1f1855e-)\r
- [cookie_sd_pony_run_a12 [2ce7dcf5] [67ff5385]](#cookie-sd-pony-run-a12--2ce7dcf5---67ff5385-)\r
- [pony-diffusion](#pony-diffusion)\r
  - [pony-diffusion-v2 [5bdc40aa]](#pony-diffusion-v2--5bdc40aa-)\r
  - [pony-diffusion-v1 [9070b574]](#pony-diffusion-v1--9070b574-)\r
- [mio-wd-v1.2-e24-ex-ad [125f9ece]](#mio-wd-v12-e24-ex-ad--125f9ece-)\r
- [fubuki-ld-v1-e13-ex-ad [2af6d20f]](#fubuki-ld-v1-e13-ex-ad--2af6d20f-)\r
- [asuka-ld-v1-e4-ex-ad [87074080]](#asuka-ld-v1-e4-ex-ad--87074080-)\r
- [tomoko-kuroki-ld-v1-e20-ex-ad [6095e7ab]](#tomoko-kuroki-ld-v1-e20-ex-ad--6095e7ab-)\r
- [Merges](#merges)\r
  - [BerryMix [19810fe6]](#berrymix--19810fe6-)\r
  - [FreckleGuy's mix](#freckleguy-s-mix)\r
  - [HassansBlend](#hassansblend)\r
  - [MMDv1-18](#mmdv1-18)\r
  - [samdoartsultmerge.ckpt [8687d7a5]](#samdoartsultmergeckpt--8687d7a5-)\r
  - [70gg30LD70k.ckpt [402dc090]](#70gg30ld70kckpt--402dc090-)\r
  - [wd1-2_sd1-4_merged.ckpt [2037c511]](#wd1-2-sd1-4-mergedckpt--2037c511-)\r
- [Dreambooth](#dreambooth)\r
  - [Hiten girl_anime_8k_wallpaper_4k.ckpt [7831dea3]](#hiten-girl-anime-8k-wallpaper-4kckpt--7831dea3-)\r
  - [nanachiDB-42imgs-5000steps.ckpt](#nanachidb-42imgs-5000stepsckpt)\r
  - [rizaDB-54imgs-4500steps.ckpt](#rizadb-54imgs-4500stepsckpt)\r
  - [bea-14000-pruned-fp16.ckpt [802a681b]](#bea-14000-pruned-fp16ckpt--802a681b-)\r
  - [2b-10000-pruned-fp16.ckpt [8cf4478f]](#2b-10000-pruned-fp16ckpt--8cf4478f-)\r
  - [misato-10000-pruned-fp16.ckpt [c51e4c77]](#misato-10000-pruned-fp16ckpt--c51e4c77-)\r
  - [hilda-v2-8000-pruned-fp16.ckpt [d2c8eef1]](#hilda-v2-8000-pruned-fp16ckpt--d2c8eef1-)\r
  - [nagatoro-4000-pruned-fp16.ckpt [8c5ff341]](#nagatoro-4000-pruned-fp16ckpt--8c5ff341-)\r
  - [gawr_gura-4000-pruned-fp16.ckpt [cbd4da60]](#gawr-gura-4000-pruned-fp16ckpt--cbd4da60-)\r
  - [mori_calliope-4000-pruned-fp16.ckpt [6cb50083]](#mori-calliope-4000-pruned-fp16ckpt--6cb50083-)\r
  - [towa-4000-pruned-fp16.ckpt [d578d3c1]](#towa-4000-pruned-fp16ckpt--d578d3c1-)\r
  - [Gawr_Gura_450img.ckpt [e7883abf]](#gawr-gura-450imgckpt--e7883abf-)\r
  - [Emilia_CustReg_3k.ckpt [2660cf9a]](#emilia-custreg-3kckpt--2660cf9a-)\r
  - [Star Fox Krystal](#star-fox-krystal)\r
  - [StudioGhibli [10c6aa67]](#studioghibli--10c6aa67-)\r
  - [Arcane Vi vimod.ckpt [e02601f3]](#arcane-vi-vimodckpt--e02601f3-)\r
  - [irlhyperbreasts_9k.ckpt [5ce8b6ec]](#irlhyperbreasts-9kckpt--5ce8b6ec-)\r
  - [hyperass v1](#hyperass-v1)\r
  - [hyperbreasts: v3](#hyperbreasts--v3)\r
  - [hyperpreg: v2 (realism and anime)](#hyperpreg--v2--realism-and-anime-)\r
  - [hyperpreg: v1.1 (realism)](#hyperpreg--v11--realism-)\r
  - [hyperpreg: v1 (realism)](#hyperpreg--v1--realism-)\r
  - [Kurisu](#kurisu)\r
  - [Kurisu Visual Novel Official artist (Huke) [eda12c8e]](#kurisu-visual-novel-official-artist--huke---eda12c8e-)\r
  - [dreambooth_lain_girl.ckpt [e7629bf8]](#dreambooth-lain-girlckpt--e7629bf8-)\r
  - [Gyokai/onono imoko](#gyokai-onono-imoko)\r
  - [futacum_r34.ckpt](#futacum-r34ckpt)\r
  - [futanari_v2_e3_s10000.ckpt](#futanari-v2-e3-s10000ckpt)\r
  - [Futa_step_3200_10_27.ckpt](#futa-step-3200-10-27ckpt)\r
  - [Wayne Barlowe [e0c27550]](#wayne-barlowe--e0c27550-)\r
  - [Blacked POV blowjob [8467f44f]](#blacked-pov-blowjob--8467f44f-)\r
  - [Zeipher F222 Female Nude (better anatomy)](#zeipher-f222-female-nude--better-anatomy-)\r
  - [Zeipher BB (Blowjob images)](#zeipher-bb--blowjob-images-)\r
  - [LOKEAN_PUPPYSTYLE_POV.ckpt [e02601f3]](#lokean-puppystyle-povckpt--e02601f3-)\r
  - [LOKEAN_MISSIONARY_POV.ckpt [e02601f3]](#lokean-missionary-povckpt--e02601f3-)\r
  - [Reverse cowgirl s4629674.ckpt [e285da0d]](#reverse-cowgirl-s4629674ckpt--e285da0d-)\r
  - [elden-ring-diffusion [16d77205]](#elden-ring-diffusion--16d77205-)\r
  - [modern-disney-diffusion [ccf3615f]](#modern-disney-diffusion--ccf3615f-)\r
  - [Arcane-Diffusion [318a302e]](#arcane-diffusion--318a302e-)\r
  - [classic-anim-diffusion [be7ddafc]](#classic-anim-diffusion--be7ddafc-)\r
  - [bukkake [b4a14787]](#bukkake--b4a14787-)\r
  - [DCAU [2fd6057b]](#dcau--2fd6057b-)\r
  - [Raven anime.ckpt](#raven-animeckpt)\r
  - [Raven Western.ckpt](#raven-westernckpt)\r
  - [oshinobu-pruned.ckpt](#oshinobu-prunedckpt)\r
  - [henreader_final_pruned.ckpt [e5803978]](#henreader-final-prunedckpt--e5803978-)\r
  - [oshino_shinobu_final_pruned.ckpt](#oshino-shinobu-final-prunedckpt)\r
  - [Latex's Abandoned Style](#latex-s-abandoned-style)\r
  - [Belle Dephine [32cbf6c8]](#belle-dephine--32cbf6c8-)\r
  - [Cal Arts Style](#cal-arts-style)\r
  - [Pixel Landscapes V1](#pixel-landscapes-v1)\r
  - [MicroWorlds](#microworlds)\r
  - [App Icons Generator V1](#app-icons-generator-v1)\r
  - [Pixel Art V1](#pixel-art-v1)\r
  - [VTT RPG](#vtt-rpg)\r
  - [Comic Diffusion](#comic-diffusion)\r
  - [SD_PixelArt_SpriteSheet_Generator](#sd-pixelart-spritesheet-generator)\r
  - [midjourney-v4-diffusion](#midjourney-v4-diffusion)\r
  - [BloodborneDiffusion](#bloodbornediffusion)\r
  - [samdoesarts_style [85b77ff9]](#samdoesarts-style--85b77ff9-)\r
  - [JWST Deep Space Diffusion](#jwst-deep-space-diffusion)\r
  - [copeseethemaldchinai_10000.ckpt (samdoesart) [32186669]](#copeseethemaldchinai-10000ckpt--samdoesart---32186669-)\r
  - [CopeSeetheMald-berry200_20400.ckpt (samdoesart) [fa49a214]](#copeseethemald-berry200-20400ckpt--samdoesart---fa49a214-)\r
  - [CopeSeetheMald-200_20400.ckpt (samdoesart) [95f071f9]](#copeseethemald-200-20400ckpt--samdoesart---95f071f9-)\r
  - [Black Souls bs_1500.ckpt [37ec0dc9]](#black-souls-bs-1500ckpt--37ec0dc9-)\r
  - [jaggy92500.ckpt [93423a00]](#jaggy92500ckpt--93423a00-)\r
  - [ykgl.ckpt (y2k cgi girls)](#ykglckpt--y2k-cgi-girls-)\r
  - [CSRmodel (cutesexyrobutts) [b77538cc]](#csrmodel--cutesexyrobutts---b77538cc-)\r
  - [Pepestyle](#pepestyle)\r
  - [dbmai [e02601f3]](#dbmai--e02601f3-)\r
  - [gigachad-diffusion](#gigachad-diffusion)\r
  - [Complex-Lineart](#complex-lineart)\r
\r
## Contact\r
\r
I have been keeping up with SD less lately, which means I am more likely to miss new models.\r
If you think something is missing from this list, contact me with details.\r
plonk#2327\r
\r
## Stable Diffusion\r
\r
### Stable Diffusion v2.0\r
\r
Stable Diffusion 2.0 code\r
https://github.com/Stability-AI/stablediffusion\r
\r
768x768 model\r
https://huggingface.co/stabilityai/stable-diffusion-2\r
\r
512x512 base model\r
https://huggingface.co/stabilityai/stable-diffusion-2-base\r
\r
Depth model\r
https://huggingface.co/stabilityai/stable-diffusion-2-depth\r
\r
4x upscaler\r
https://huggingface.co/stabilityai/stable-diffusion-x4-upscaler\r
\r
### Stable Diffusion v1.5 [81761151] [a9263745]\r
\r
> The Stable-Diffusion-v1-5 checkpoint was initialized with the weights of the Stable-Diffusion-v1-2 checkpoint and subsequently fine-tuned on 595k steps at resolution 512x512 on "laion-aesthetics v2 5+" and 10% dropping of the text-conditioning to improve classifier-free guidance sampling.\r
> Repo https://huggingface.co/runwayml/stable-diffusion-v1-5\r
\r
!!! note\r
v1-5-pruned-emaonly.ckpt **[81761151]** | **SHA256** cc6cb27103417325ff94f52b7a5d2dde45a7515b25c255d8e396c90014281516\r
v1-5-pruned.ckpt **[a9263745]** | **SHA256** e1441589a6f3c5a53f5f54d0975a18a7feb7cdf0b0dee276dfc3331ae376a053\r
\r
**Torrent v1-5-pruned-emaonly.ckpt**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:2daef5b5f63a16a9af9169a529b1a773fc452637&dn=v1-5-pruned-emaonly.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web v1-5-pruned-emaonly.ckpt**\r
Requires login\r
\r
\`\`\`text\r
https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.ckpt\r
\`\`\`\r
\r
**Torrent v1-5-pruned.ckpt**\r
!!! warning\r
This version of the model is only useful for native training. If you don't know what this is, you don't need this.\r
If you only want to generate images, or train dreambooth/textual inversion/hypernetworks, get v1-5-pruned-emaonly.ckpt instead.\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:38c2b7a8abf55604ae8a5f060ffda2e028075af3&dn=v1-5-pruned.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web v1-5-pruned.ckpt**\r
Requires login.\r
!!! warning\r
This version of the model is only useful for native training. If you don't know what this is, you don't need this.\r
If you only want to generate images, or train dreambooth/textual inversion/hypernetworks, get v1-5-pruned-emaonly.ckpt instead.\r
\r
\`\`\`text\r
https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned.ckpt\r
\`\`\`\r
\r
### Stable Diffusion VAE ft-mse-original\r
\r
Resumed from ft-EMA and uses EMA weights and was trained for another 280k steps using a re-weighted loss, with more emphasis on MSE reconstruction (producing somewhat "smoother" outputs). To keep compatibility with existing models, only the decoder part was finetuned; the checkpoints can be used as a drop-in replacement for the existing autoencoder.\r
Repo & Info (with comparisons) https://huggingface.co/stabilityai/sd-vae-ft-mse-original\r
\r
!!! warning\r
A VAE is not the same as the other models on this list. It is not a complete model that can be used to generate images alone, but a component to be used in tandem with other models.\r
If you don't know what this is or why you would want it, don't bother with it.\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/stabilityai/sd-vae-ft-mse-original/resolve/main/vae-ft-mse-840000-ema-pruned.ckpt\r
\`\`\`\r
\r
### Stable Diffusion VAE ft-ema-original\r
\r
Resumed from the original checkpoint, trained for 313198 steps and uses EMA weights. To keep compatibility with existing models, only the decoder part was finetuned; the checkpoints can be used as a drop-in replacement for the existing autoencoder.\r
Repo & Info (with comparisons) https://huggingface.co/stabilityai/sd-vae-ft-ema-original\r
\r
!!! warning\r
A VAE is not the same as the other models on this list. It is not a complete model that can be used to generate images alone, but a component to be used in tandem with other models.\r
If you don't know what this is or why you would want it, don't bother with it.\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/stabilityai/sd-vae-ft-ema-original/resolve/main/vae-ft-ema-560000-ema-pruned.ckpt\r
\`\`\`\r
\r
### Stable Diffusion Inpainting v1.5 [3e16efc8]\r
\r
Repo https://huggingface.co/runwayml/stable-diffusion-inpainting\r
Intended to be used with https://github.com/runwayml/stable-diffusion\r
\r
> The Stable-Diffusion-Inpainting was initialized with the weights of the Stable-Diffusion-v-1-2. First 595k steps regular training, then 440k steps of inpainting training at resolution 512x512 on “laion-aesthetics v2 5+” and 10% dropping of the text-conditioning to improve classifier-free classifier-free guidance sampling. For inpainting, the UNet has 5 additional input channels (4 for the encoded masked-image and 1 for the mask itself) whose weights were zero-initialized after restoring the non-inpainting checkpoint. During training, we generate synthetic masks and in 25% mask everything.\r
\r
!!! note\r
**SHA256** c6bbc15e3224e6973459ba78de4998b80b50112b0ae5b5c67113d56b4e366b19\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:b523a9e71ae02e27b28007eca190f41999c2add1&dn=sd-v1-5-inpainting.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
Requires login\r
\r
\`\`\`text\r
https://huggingface.co/runwayml/stable-diffusion-inpainting/resolve/main/sd-v1-5-inpainting.ckpt\r
\`\`\`\r
\r
### Stable Diffusion v1.4 [4af45990] [7460a6fa] [06c50424]\r
\r
!!! note\r
sd-v1-4-pruned.ckpt **[4af45990]**\r
sd-v1-4.ckpt **[7460a6fa]** | **SHA256** fe4efff1e174c627256e44ec2991ba279b3816e364b49f9be2abc0b3ff3f8556\r
sd-v1-4-full-ema.ckpt **[06c50424]** | **SHA256** 14749efc0ae8ef0329391ad4436feb781b402f4fece4883c7ad8d10556d8a36a\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:3A4A612D75ED088EA542ACAC52F9F45987488D1C&tr=udp://tracker.opentrackr.org:1337\r
\`\`\`\r
\r
**HuggingFace**\r
Requires login.\r
\r
\`\`\`text\r
https://huggingface.co/CompVis/stable-diffusion-v-1-4-original\r
\`\`\`\r
\r
**GDrive**\r
\r
\`\`\`text\r
https://drive.google.com/file/d/1wHFgl0ivCmIZv88hVZXkb8oy9qCuaBGA/view\r
\`\`\`\r
\r
## Waifu Diffusion\r
\r
### Waifu Diffusion VAE kl-f8-anime2\r
\r
A finetune of the SD 1.4 VAE on 250k anime-styled images. Supposedly improves reconstruction of eyes and fingers.\r
Info \`https://twitter.com/haruu1367/status/1579286947519864833\`\r
Repo \`https://huggingface.co/hakurei/waifu-diffusion-v1-4\`\r
\r
!!! warning\r
A VAE is not the same as the other models on this list. It is not a complete model that can be used to generate images alone, but a component to be used in tandem with other models.\r
If you don't know what this is or why you would want it, don't bother with it.\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/hakurei/waifu-diffusion-v1-4/resolve/main/vae/kl-f8-anime2.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion VAE kl-f8-anime\r
\r
A finetune of the SD 1.4 VAE on 250k anime-styled images. Supposedly improves reconstruction of eyes and fingers.\r
Info \`https://twitter.com/haruu1367/status/1579286947519864833\`\r
Repo \`https://huggingface.co/hakurei/waifu-diffusion-v1-4\`\r
\r
!!! warning\r
A VAE is not the same as the other models on this list. It is not a complete model that can be used to generate images alone, but a component to be used in tandem with other models.\r
If you don't know what this is or why you would want it, don't bother with it.\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/hakurei/waifu-diffusion-v1-4/resolve/main/vae/kl-f8-anime.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion v1.3 Full [84692140] [4470c325] [e1de58a9] [3e1a125f]\r
\r
1.3 Waifu Diffusion model trained on 600,000 high-resolution Danbooru images for 10 Epochs.\r
Release notes: https://gist.github.com/harubaru/f727cedacae336d1f7877c4bbe2196e1\r
\r
!!! note\r
wd-v1-3-float16.ckpt **[84692140]** | **SHA256** 4afab9126057859b34d13d6207d90221d0b017b7580469ea70cee37757a29edd\r
wd-v1-3-float32.ckpt **[4470c325]** | **SHA256** 9dade826203c7ee369881b5dc20d34298fa644c1f137568e09fbc4b9a0d3e817\r
wd-v1-3-full.ckpt **[e1de58a9]** | **SHA256** 23ba8d0411c211d3d14903d46613bc088924e1453ed1c6428ce86bde54a37d27\r
wd-v1-3-full-opt.ckpt **[3e1a125f]** | **SHA256** 10912b9a6d773ea7c299c0563d10538ada04ade81837362b6c0c67be4df937c1\r
\r
**wd-v1-3-float16.ckpt [84692140] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/wd-v1-3-float16.ckpt\r
\`\`\`\r
\r
**wd-v1-3-float32.ckpt [4470c325] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/wd-v1-3-float32.ckpt\r
\`\`\`\r
\r
**wd-v1-3-full.ckpt [e1de58a9] Web**\r
The full EMA is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the float16 or float32 version.\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/wd-v1-3-full.ckpt\r
\`\`\`\r
\r
**wd-v1-3-full-opt.ckpt [3e1a125f] Web**\r
The full opt is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the float16 or float32 version.\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/wd-v1-3-full-opt.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion v1.3 beta epoch09 [a0d90b41] [134eaffb] [e90a9d02]\r
\r
**==Unfinished Beta==** 1.3 Waifu Diffusion model trained on 600,000 high-resolution Danbooru images for 9 Epochs.\r
\r
!!! note\r
model-epoch08-float16.ckpt **[a0d90b41]** | **SHA256** b30bab13a2ea946ba85bc7b3a30c3fa20d013ca306193aa54b4771d147192dc1\r
model-epoch08-float32.ckpt **[134eaffb]** | **SHA256** a16d2f57b229156a61ccab6b1cbc120332f3a2a320c75952241e6439f3fe79ec\r
model-epoch08-full.ckpt **[e90a9d02]** | **SHA256** 7fb9c64bb460724dfecbf693fcd8e0e556c4664553a352c1256997813d585329\r
\r
**model-epoch09-float16.ckpt [a0d90b41] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch09-float16.ckpt\r
\`\`\`\r
\r
**model-epoch09-float32.ckpt [134eaffb] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch09-float32.ckpt\r
\`\`\`\r
\r
**model-epoch09-full.ckpt [e90a9d02] Web**\r
The full EMA is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the float16 or float32 version.\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch09-full.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion v1.3 beta epoch08 [55537280] [7dd9e8e1] [d12b4159]\r
\r
**==Unfinished Beta==** 1.3 Waifu Diffusion model trained on 600,000 high-resolution Danbooru images for 8 Epochs.\r
\r
!!! note\r
model-epoch08-float16.ckpt **[55537280]** | **SHA256** 3a3a36aac85502a06878ec6760c0fb95f71546ad734fbb2b6cfab9a50db7aa8d\r
model-epoch08-float32.ckpt **[7dd9e8e1]** | **SHA256** e64cbc29edbef82142768c3a398345f602ba8b337ebd22cd83071162fe789a18\r
model-epoch08-full.ckpt **[d12b4159]** | **SHA256** c2a8b09f77ce572c012c810495d8ae9f989d04ca6b3226c93be5dce2208bacdd\r
\r
**model-epoch08-float16.ckpt [55537280] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch08-float16.ckpt\r
\`\`\`\r
\r
**model-epoch08-float32.ckpt [7dd9e8e1] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch08-float32.ckpt\r
\`\`\`\r
\r
**model-epoch08-full.ckpt [d12b4159] Web**\r
The full EMA is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the float16 or float32 version.\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch08-full.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion v1.3 beta epoch07 [3ad68e9a] [e4150f29] [39312118]\r
\r
**==Unfinished Beta==** 1.3 Waifu Diffusion model trained on 600,000 high-resolution Danbooru images for 7 Epochs.\r
\r
> The model is not finished, not even close. Do not take the results as final.\r
\r
!!! note\r
model-epoch07-float16.ckpt **[3ad68e9a]** | **SHA256** 0aa0a2d1620b65fbcfe800ac5d5b5fc681c9e3bc7373ad5519837f94828eb83f\r
model-epoch07-float32.ckpt **[e4150f29]** | **SHA256** 99c1061162c126c59d17cfddaf8b475935a9f0a504f7b305b1d733e7618be82b\r
model-epoch07-full.ckpt **[39312118]** | **SHA256** 74ae340acb9ac251b8b9ee57f795e18bc4d39c016272fafd440e637fe391a790\r
\r
**model-epoch07-float16.ckpt [3ad68e9a] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch07-float16.ckpt\r
\`\`\`\r
\r
**model-epoch07-float32.ckpt [e4150f29] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch07-float32.ckpt\r
\`\`\`\r
\r
**model-epoch07-full.ckpt [39312118] Web**\r
The full EMA is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the float16 or float32 version.\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch07-full.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion v1.3 beta epoch06 [281c28bb] [3a672a8a] [d970eaf1]\r
\r
**==Unfinished Beta==** 1.3 Waifu Diffusion model trained on 600,000 high-resolution Danbooru images for 6 Epochs.\r
\r
> The model is not finished, not even close. Do not take the results as final.\r
\r
!!! note\r
model-epoch06-float16.ckpt **[281c28bb]** | **SHA256** c0397df53cd4cf1cfadb95a121a67eaad903e4203d708abfe3409a832a517191\r
model-epoch06-float32.ckpt **[3a672a8a]** | **SHA256** f34c89c80e91d77c06df178d292611ac7757728dd7a3aaff8c4c9117e6e92e35\r
model-epoch06-full.ckpt **[d970eaf1]** | **SHA256** cc5569691c843f64cc8e819b78c0081f6e8024432f6de898f11ee816ac3ff5ca\r
\r
**model-epoch06-float16.ckpt [281c28bb] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch06-float16.ckpt\r
\`\`\`\r
\r
**model-epoch06-float32.ckpt [3a672a8a] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch06-float32.ckpt\r
\`\`\`\r
\r
**model-epoch06-full.ckpt [d970eaf1] Web**\r
The full EMA is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the float16 or float32 version.\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch06-full.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion v1.3 beta epoch05 [25f7a927] [3563d59f] [9453d3e5]\r
\r
**==Unfinished Beta==** 1.3 Waifu Diffusion model trained on 600,000 high-resolution Danbooru images for 5 Epochs.\r
\r
> The model is not finished, not even close. Do not take the results as final.\r
\r
!!! note\r
model-epoch05-float16.ckpt **[25f7a927]** | **SHA256** 26cf2a2e30095926bb9fd9de0c83f47adc0b442dbfdc3d667d43778e8b70bece\r
model-epoch05-float32.ckpt **[3563d59f]** | **SHA256** 694617b2145abcd248d78ea2c556af86787ef9f79e9d9a0f7473d7b408dd3dfa\r
model-epoch05-full.ckpt **[9453d3e5]** | **SHA256** e0fceaac42328912ed60957c5fed129a418bdd5f3ebe82d5f09e7901a296a6ce\r
\r
**model-epoch05-float16.ckpt [25f7a927] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch05-float16.ckpt\r
\`\`\`\r
\r
**model-epoch05-float32.ckpt [3563d59f] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch05-float32.ckpt\r
\`\`\`\r
\r
**model-epoch05-full.ckpt [9453d3e5] Web**\r
The full EMA is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the float16 or float32 version.\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch05-full.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion v1.3 beta epoch04 [958859c3] [84d80299] [994d2e0f]\r
\r
**==Unfinished Beta==** 1.3 Waifu Diffusion model trained on 600,000 high-resolution Danbooru images for 4 Epochs.\r
\r
> The model is not finished, not even close. Do not take the results as final.\r
\r
!!! note\r
model-epoch04-float16.ckpt **[958859c3]** | **SHA256** 3fd4bbb7ca76c806d88061f0ce994b763693369bd6ea37863c93c1c6b9d25232\r
model-epoch04-float32.ckpt **[84d80299]** | **SHA256** 5237503095524512c7612f81ef786036aa001fd76693064fb00478115659a335\r
model-epoch04-full.ckpt **[994d2e0f]** | **SHA256** eee5a4391d6074f08bc6c3de3457c245252bde101e3e651c27b5cf85d4926b08\r
\r
**model-epoch04-float16.ckpt [958859c3] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch04-float16.ckpt\r
\`\`\`\r
\r
**model-epoch04-float32.ckpt [84d80299] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch04-float32.ckpt\r
\`\`\`\r
\r
**model-epoch04-full.ckpt [994d2e0f] Web**\r
The full EMA is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the float16 or float32 version.\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch04-full.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion v1.3 beta epoch03 [63e9eb31] [22ca2722] [d8b28983]\r
\r
**==Unfinished Beta==** 1.3 Waifu Diffusion model trained on 600,000 high-resolution Danbooru images for 3 Epochs.\r
\r
> The model is not finished, not even close. Do not take the results as final.\r
\r
!!! note\r
model-epoch04-float16.ckpt **[63e9eb31]** | **SHA256** 123d8ae9cdbf08f5e68b6eaf868483c29c3408d29bce693ea12c40f9ac34b04d\r
model-epoch04-float32.ckpt **[22ca2722]** | **SHA256** 1fe36906fff1a14879f1bda49d19112f0a21dd183f8f5842ea493f4733070205\r
model-epoch04-full.ckpt **[d8b28983]** | **SHA256** 950ea42feb58dcdfad26f23cd5e68ea38f9df2f49449c694a389d18fb33e6ea6\r
\r
**model-epoch03-float16.ckpt [63e9eb31] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch03-float16.ckpt\r
\`\`\`\r
\r
**model-epoch03-float32.ckpt [22ca2722] Web**\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch03-float32.ckpt\r
\`\`\`\r
\r
**model-epoch03-full.ckpt [d8b28983] Web**\r
The full EMA is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the float16 or float32 version.\r
\r
\`\`\`\r
https://huggingface.co/hakurei/waifu-diffusion-v1-3/resolve/main/model-epoch03-full.ckpt\r
\`\`\`\r
\r
### Waifu Diffusion v1.2 [0b8c694b] [45dee52b]\r
\r
Trained on Stable Diffusion v1.4 using 56k Danbooru images for 5 epochs.\r
!!! note\r
wd-v1-2-full-ema-pruned.ckpt **[0b8c694b]** | **SHA256** 5512bc271c31fd9433494f3fced009d3b27515cca5ef1a1ed13bce136f8e8cad\r
wd-v1-2-full-ema.ckpt **[45dee52b]** | **SHA256** 89138c3a7783a2b17730090c06e2e1950fb421068cc5f4a5d6c4ba1040a7e1bb\r
**Pruned Torrent [0b8c694b]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:153590fd7e93ee11d8db951451056c362e3a9150&dn=wd-v1-2-full-ema-pruned.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
**Full EMA Torrent [45dee52b]**\r
The full EMA is larger in file size because it contains additional data used for **training only**.\r
If you don't know what this is, use the pruned version.\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:f45cecf4e9de86da83a78dd2cccd7f27d5557a52&dn=wd-v1-2-full-ema.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
## Anything-V3.0 [38c1ebe3] [1a7df6b8] [6569e224]\r
\r
Anime model\r
Info https://www.bilibili.com/read/cv19603218\r
\r
**Torrent fp16 [38c1ebe3]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:45cd353ac4fa87098db5e3a6a349539710a3a1f5&dn=Anything-V3.0-fp16.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce\r
\`\`\`\r
\r
**Torrent fp32 [1a7df6b8]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:d9db662ab5ace77004b3348c23c9381380c27156&dn=Anything-V3.0-fp32.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce\r
\`\`\`\r
\r
**Torrent Full EMA [6569e224]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:80460036625fb61dce4bc6e7dab744744309a2a0&dn=Anything-V3.0-fullema.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce\r
\`\`\`\r
\r
## Cafe Unofficial Instagram TEST Model [50b987ae]\r
\r
> Trained on ~140k Instagram images made up of primarily Japanese accounts (mix of cosplay, model, and personal accounts)\r
> While the model can create some realistic Instagram-esque images on its own, for full potential, it is recommended that it be merged with another model (such as berry or anything)\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:eb085b3e22310a338e6ea00172cb887c10c54cbc&dn=cafe-instagram-unofficial-test-epoch-9-140k-images-fp32.ckpt&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopentor.org%3A2710&tr=udp%3A%2F%2Ftracker.ccc.de%3A80&tr=udp%3A%2F%2Ftracker.blackunicorn.xyz%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969\r
\`\`\`\r
\r
## Trinart\r
\r
### trinart_characters_19.2m_stable_diffusion_v1 [d64dab7f] + VAE\r
\r
> A stable diffusion v1-based model trained by roughly 19.2M anime/manga style images (pre-rolled augmented images included) plus final finetuning by about 50,000 images. This model seeks for a sweet spot between artistic style versatility and anatomical quality within the given model spec of SDv1.\r
> This is the same version 1 model that was released in AI Novelist/TrinArt service from early September through Oct 14.\r
> The dataset is filtered to exclude NSFW or unsafe contents.\r
> Repo https://huggingface.co/naclbit/trinart_characters_19.2m_stable_diffusion_v1\r
\r
!!! note\r
trinart_characters_it4_v1.ckpt [d64dab7f] **SHA256** d58058f2c71612aa7492d63ad8e6c32b3159494dc51a29ffe71937cdc49b6681\r
autoencoder_kl-f8-trinart_characters.ckpt **SHA256** d2dd1c82220e31a72bd9958dda249ed7f94faf875d5123ae3aab7a1950a82a8f\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/naclbit/trinart_characters_19.2m_stable_diffusion_v1/resolve/main/trinart_characters_it4_v1.ckpt\r
\`\`\`\r
\r
**VAE Web**\r
\r
\`\`\`text\r
https://huggingface.co/naclbit/trinart_characters_19.2m_stable_diffusion_v1/resolve/main/autoencoder_kl-f8-trinart_characters.ckpt\r
\`\`\`\r
\r
### trinart2_step115000.ckpt [f1c7e952]\r
\r
V2 checkpoint uses dropouts, 10,000 more images and a new tagging strategy and trained longer to improve results while retaining the original aesthetics.\r
!!! note\r
**SHA256** 776af18775dfccf29725a994df855e7d8f7b8ea525013e3a466f210ec15c8fd4\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/naclbit/trinart_stable_diffusion_v2/resolve/main/trinart2_step115000.ckpt\r
\`\`\`\r
\r
### trinart2_step95000.ckpt [cf0bd941]\r
\r
V2 checkpoint uses dropouts, 10,000 more images and a new tagging strategy and trained longer to improve results while retaining the original aesthetics.\r
!!! note\r
**SHA256** c1799d22a355ba25c9ceeb6e3c91fc61788c8e274b73508ae8a15877c5dbcf63\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/naclbit/trinart_stable_diffusion_v2/resolve/main/trinart2_step95000.ckpt\r
\`\`\`\r
\r
### trinart2_step60000.ckpt [6ecd8e48]\r
\r
V2 checkpoint uses dropouts, 10,000 more images and a new tagging strategy and trained longer to improve results while retaining the original aesthetics.\r
!!! note\r
**SHA256** 0acc70d6a515cdedbc840e2c06525709a83cb9be8cdfdf1136a6548e9ee8f0fa\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/naclbit/trinart_stable_diffusion_v2/resolve/main/trinart2_step60000.ckpt\r
\`\`\`\r
\r
### trinart_stable_diffusion_epoch3.ckpt [9d7f05fc]\r
\r
Considered obsolete, refer to trinart2.\r
trinart_stable_diffusion is a SD model finetuned by about 30,000 assorted high resolution manga/anime-style pictures for 3.5 epochs.\r
!!! note\r
**SHA256** 840bbc99a603d4171963b31eec700abcb6f9545d1374b53eb7f830261494be19\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/naclbit/trinart_stable_diffusion/resolve/main/trinart_stable_diffusion_epoch3.ckpt\r
\`\`\`\r
\r
## SmirkingFace\r
\r
> SmirkingFace is a project that aims to finetune the Stable Diffusion model with high quality erotic content and allow it to generate a large variety of erotic content.\r
> In case you're uncertain which model you need, the EB 1.0 EMA model tends to perform well in many cases. EBL 1.0 has been trained for the longest, but will require code for our modified model to work (released on our github).\r
> Note: All our models include the updated MSE VAE released by Stability AI.\r
> Info https://www.patreon.com/posts/released-models-73689798\r
> Usage instructions with previews https://www.patreon.com/posts/73775030\r
> Word lists https://www.patreon.com/posts/word-lists-73913464\r
\r
### EB 1.0 [7f115f17] [7010a578] [339b9a04]\r
\r
Model using the original Stable Diffusion architecture trained on a wide variety of erotic photos with a large variety in poses.\r
Info https://www.patreon.com/posts/released-models-73689798\r
Usage instructions with previews https://www.patreon.com/posts/73775030\r
\r
##### SF_EB_1.0_ema_vae.ckpt [7f115f17]\r
\r
!!! note\r
SF_EB_1.0_ema_vae.ckpt [7f115f17] **SHA256** 245cac02fa7243a83ff5f7cf78407a505308e8b6f2dacdff2ad43a1846514f3d\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:a0bcc397b2c3c101755245fd9b26ae1aa8d5d580&dn=SF_EB_1.0_ema_vae.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://anonfiles.com/32F7ecE0y5/SF_EB_1.0_ema_vae_zip\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://gofile.io/d/MYOKl8\r
\`\`\`\r
\r
##### SF_EB_1.0_noema_vae.ckpt [7010a578]\r
\r
!!! note\r
SF_EB_1.0_noema_vae.ckpt [7010a578] **SHA256** 344719ce863db1464ee81f2dc61375c10fcb9fd8b72afd69ad07b091fc834170\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:3d73f553ce18ec0bae3811edb37a904c5e82c56d&dn=SF_EB_1.0_noema_vae.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://anonfiles.com/t1Iee0E4y0/SF_EB_1.0_noema_vae_zip\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://gofile.io/d/MYOKl8\r
\`\`\`\r
\r
##### SF_EB_1.0_pruned_vae.ckpt [339b9a04]\r
\r
!!! note\r
SF_EB_1.0_pruned_vae.ckpt [339b9a04] **SHA256** c50ab94df348e43ad001bd18bcbf4c0f239afc408b134d24ce74b5b7c86b3e0d\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:875cb7ced0127c67f466a08de8945b5f936fc020&dn=SF_EB_1.0_pruned_vae.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://anonfiles.com/icT4e1Eeyf/SF_EB_1.0_pruned_vae_zip\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://gofile.io/d/MYOKl8\r
\`\`\`\r
\r
### EBL 1.1 [967237c9]\r
\r
Model using an extended architecture (1.8B parameters), resumed from EB 1.0. Trained on a wide variety of erotic photos with a large variety in poses.\r
Won't work out of the box with webui (currently, at least).\r
Code https://github.com/smirkingface/stable-diffusion\r
Info & previews https://www.patreon.com/posts/ebl-1-1-released-74653550\r
Running with auto's webui https://www.patreon.com/posts/running-extended-73768212\r
\r
!!! note\r
SF_EBL_1.1_vae.ckpt **SHA256** 1276a1920b29b773b8c61944c9bbcce7de47e71f097633d00ba27a7013477336\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:d145e9c1de7e43972ac15e360baa838ed3921bfa&dn=SF_EBL_1.1_vae.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.jiesen.life%3a8443%2fannounce&tr=https%3a%2f%2ftracker.cyber-hub.net%3a443%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=http%3a%2f%2ftracker.mywaifu.best%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://anonfiles.com/c0bat6Hay5/SF_EBL_1.1_vae_zip\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://gofile.io/d/MYOKl8\r
\`\`\`\r
\r
### EBL 1.0 [758fda47]\r
\r
Model using an extended architecture (1.8B parameters), resumed from EB 1.0. Trained on a wide variety of erotic photos with a large variety in poses.\r
Won't work out of the box with webui (currently, at least).\r
Code https://github.com/smirkingface/stable-diffusion\r
Info https://www.patreon.com/posts/released-models-73689798\r
Running with auto's webui https://www.patreon.com/posts/running-extended-73768212\r
General usage instructions with previews https://www.patreon.com/posts/73775030\r
\r
!!! note\r
SF_EBL_1.0_vae.ckpt [758fda47] **SHA256** e237715adaf1b3e43eb2eee792fe82a90d01a45beb79d38807f5ca92b7a277db\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:8c4cafe3b148c4337e381dbc0a18fc03a2eb7ac2&dn=SF_EBL_1.0_vae.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://anonfiles.com/I6y3feEay4/SF_EBL_1.0_vae_zip\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://gofile.io/d/MYOKl8\r
\`\`\`\r
\r
## gg1342_testrun1_pruned.ckpt [43076286] [2ccc3e58]\r
\r
A test run that was trained on 280 NSFW images (nude solo women) + another 80 SFW images of a few fictional characters.\r
!!! note\r
gg1342_testrun1_pruned.ckpt **[43076286]** | **SHA256** ebe2f8dfeed0b87080a37e94bf0aca8800fc10691826a5e76259faf509106246\r
gg1342_testrun1_pruned-float16.ckpt **[2ccc3e58]**\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:c95e266e15e13cf0e2d69b29338a89a94d736546&dn=gg1342_testrun1_pruned.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
## SXD-v0.8\r
\r
> Hardcore sex act model with realistic tentacle porn as a side project. Made with smirkingface's SD repo. Both pruned and full versions available\r
\r
**Web**\r
\r
\`\`\`text\r
https://pixeldrain.com/l/hNc8DomC\r
\`\`\`\r
\r
## Pyro's\r
\r
### Pyro's Blowjob Model v1.0 [9b5251e8]\r
\r
Photorealistic\r
\r
> Current dreambooth based blowjob models suck dick (heh), so I decided to do a "real" take on this and fine-tune it the native way (like eg. WaifuDiffusion did with their model)\r
> Base model: SD 1.5\r
> 2899 input images\r
> 23192 steps x batch size 4\r
> LR 5e-06\r
> Info and potentially newer versions: https://rentry.org/pyros-sd-model\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:5c5d96dfb4eda3d4eb0f8f67c695b8b8ac241060&dn=pyros-bj-v1-0.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://anonfiles.com/6123m6F6y9/pyros-bj-v1-0_ckpt\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/lLtjCLwb#KgXPDzbTotcb0_quzzBMm6DaDCuSFIaF8CXxw1WsEs8\r
\`\`\`\r
\r
### Pyro's POV Cowgirl Model\r
\r
Preview images: https://imgur.com/a/vgO86ZC\r
Info and downloads: https://rentry.org/pyros-pov-model\r
\r
## Easter\r
\r
### easter_e9 [b56f765a]\r
\r
Preview https://i.imgur.com/k4HdjgM.png\r
\r
> anime-furry-assorted model\r
> Trained on 240k images off gelbooru and e621.\r
> Suggested positive prompts: an artist or artstyle helps a lot\r
> Suggested negative prompts: \`letterbox, censored\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:cea7216792392a6480caa61fab87257fac50f6cf&dn=easter%20epoch%209%20%5bb56f765a%5d.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt2.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/ZnhjHCza#NBk6JiSja07DL0yliVwH4dVvtmtKF3pIujueg2QPbLk\r
\`\`\`\r
\r
### easter_e5 [da453598]\r
\r
> General lewd model, "Easter.ckpt"! Trained on about 180k images from gelbooru and e621.\r
> NSFW and niche content is included. I take no responsibility for the model's outputs!\r
> Model seems better at the front than the back.\r
> Suggested negative prompt: "Letterbox".\r
> The name comes from its tendency to mix rabbits and eggs.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:da3395f01a1063d1980c3c2c610c25a7a20ebce8&dn=easter_e5%20%5bda453598%5d%20plus%20tags.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/1vQVHbBI#W0hrTSMy9CvUxzhWShmtGsUf4AV6ndHze5NPTLqqhKU\r
\`\`\`\r
\r
### easter_e4 [3997b596]\r
\r
> General lewd model, "Easter.ckpt"! Trained on about 180k images from gelbooru and e621.\r
> NSFW and niche content is included. I take no responsibility for the model's outputs!\r
> Model seems better at the front than the back.\r
> Suggested negative prompt: "Letterbox".\r
> The name comes from its tendency to mix rabbits and eggs.\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/4vADAYYY#m7K2OVQrEYhmi5e3wUnkdb2xg6ewotysAt7Z0Rras6g\r
\`\`\`\r
\r
### easter_e3 [9c5ade34]\r
\r
> General lewd model, "Easter.ckpt"! Trained on about 180k images from gelbooru and e621.\r
> NSFW and niche content is included. I take no responsibility for the model's outputs!\r
> Model seems better at the front than the back.\r
> Suggested negative prompt: "Letterbox".\r
> The name comes from its tendency to mix rabbits and eggs.\r
> Currently on epoch 3.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:79d1adf55ab8336e095215f3d293fa3c29d57528&dn=easter_e3.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/l3RRiIzI#hHGR6rYAJ0-weE8kef7bBUq5u2WjI3oTP92A7atTINw\r
\`\`\`\r
\r
## Hentai Diffusion\r
\r
Repo https://huggingface.co/Deltaadams/Hentai-Diffusion/tree/main\r
Supposedly will update weekly, so check the repo, it might be more current than this listing.\r
The pruned torrents below are with EMA weights removed.\r
\r
> This model was based on Waifu Diffusion 1.2, and trained on 150,000 images from R34 and gelbooru.\r
> Focused training has been done of more obscure poses such as crouching and facing away from the viewer, along with a focus on improving hands.\r
> Using tags from the site in prompts is recommended. Adding 1girl to the start of the prompt will help get better results.\r
\r
### HD-16.ckpt [e2ec4647]\r
\r
Repo https://huggingface.co/Deltaadams/Hentai-Diffusion/tree/main\r
Supposedly will update weekly, so check the repo, it might be more current than this listing.\r
!!! note\r
**SHA256** 4c9317fe064386b0d8645375d0f8a0059455cfee0b84d2e280d5cc2fc9e88c21\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/Deltaadams/Hentai-Diffusion/resolve/main/HD-16.ckpt\r
\`\`\`\r
\r
### RD1412.ckpt [2140af02] [5b87f0e6] [4fdde306]\r
\r
Repo https://huggingface.co/Deltaadams/Hentai-Diffusion/tree/main\r
Supposedly will update weekly, so check the repo, it might be more current than this listing.\r
\r
!!! note\r
RD1412-pruned-fp16.ckpt **[2140af02]** | **SHA256** c02f07fc72ea7281a14c94469428a497b142f70f6b5b4ea20435fbf5ef3f1731\r
RD1412-pruned-fp32.ckpt **[5b87f0e6]** | **SHA256** c318e7155f30af74785503d8ebf2856813e234032bd5c043c814e2f8baa4d67e\r
RD1412.ckpt **[4fdde306]** | **SHA256** 477b860a6859838e99d81fa5d3345e717e11fe8bd0e7eb32bce7541d57807a4d\r
\r
**Torrent RD1412-pruned-fp16.ckpt [a1f5a67e]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:da8986f9059ce4f64f84e7390eb542558b2cd466&dn=RD1412-pruned-fp16.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.0x.tf%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce\r
\`\`\`\r
\r
**Torrent RD1412-pruned-fp32.ckpt [37b5398c]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:ab4c2d7308a3fa694f7409407399a1cc5d4c7ed9&dn=RD1412-pruned-fp32.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.0x.tf%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web Full EMA RD1412.ckpt [4fdde306]**\r
\r
\`\`\`text\r
https://huggingface.co/Deltaadams/Hentai-Diffusion/resolve/main/RD1412.ckpt\r
\`\`\`\r
\r
### RD1212.ckpt [a1f5a67e] [37b5398c] [3b3459c8]\r
\r
Repo https://huggingface.co/Deltaadams/Hentai-Diffusion/tree/main\r
Supposedly will update weekly, so check the repo, it might be more current than this listing.\r
\r
!!! note\r
HenDiff_RD1212-pruned-fp16.ckpt **[a1f5a67e]** | **SHA256** 8e46950f3d700886ced3842e4f05c31a1ab30b856668e9bc990940e60ad21be1\r
HenDiff_RD1212-pruned-fp32.ckpt **[37b5398c]** | **SHA256** c303f408d538544765b109aef0e2f165864cab720365a1d3a1d166237965095a\r
RD1212.ckpt **[3b3459c8]** | **SHA256** 23c56765c35a9b205e52f64b46c6311279cc3a56e6d17eba32779ff590bdc3d7\r
\r
**Torrent HenDiff_RD1212-pruned-fp16.ckpt [a1f5a67e]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:f4e78d085169d2077a316bd9b75723812c1ab429&dn=HenDiff_RD1212-pruned-fp16.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.0x.tf%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce\r
\`\`\`\r
\r
**Torrent HenDiff_RD1212-pruned-fp32.ckpt [37b5398c]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:2a6b60f454dcf89b81e7db034fcb1536b774628c&dn=HenDiff_RD1212-pruned-fp32.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.0x.tf%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web Full EMA RD1212.ckpt [3b3459c8]**\r
\r
\`\`\`text\r
https://huggingface.co/Deltaadams/Hentai-Diffusion/resolve/main/RD1212.ckpt\r
\`\`\`\r
\r
**Torrent Full EMA RD1212.ckpt [3b3459c8]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:D0B89A0516205157EA0CBDDBBB49BC60C611A3B7&dn=RD1212.ckpt&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\r
\`\`\`\r
\r
## Bare Feet / Full Body b4_t16_noadd [03e33bb4] [2bd8166c] [9012c514]\r
\r
High quality labels only (the "curated" model).\r
Preview grid https://i.imgur.com/2sJGz3j.jpeg\r
\r
> A very WIP checkpoint focused on Bare Foot (BF) Full Body (FB) nude female images - best used if you are trying for accurate photorealistic feet or female genitalia, both of which normal SD struggles with\r
> It is very much WIP\r
> Extremely specialized, and lost a lot of general purpose capability and ability to stylize.\r
\r
**Torrent bf_fb_v3_t4_b16_noadd-ema-pruned-fp16.ckpt [03e33bb4]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:9530a8a0b43f83366216ab853b4419aa2056da58&dn=bf_fb_v3_t4_b16_noadd-ema-pruned-fp16.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.skyts.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.0x.tf%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce\r
\`\`\`\r
\r
**Torrent bf_fb_v3_t4_b16_noadd-ema-pruned-fp32.ckpt [2bd8166c]**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:1f6bab17c548e35ac2a412e3e9119e5f4e00bb50&dn=bf_fb_v3_t4_b16_noadd-ema-pruned-fp32.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.skyts.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.0x.tf%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce\r
\`\`\`\r
\r
## Lewd Diffusion\r
\r
### Lewd Diffusion 70k 2e [f4030c43]\r
\r
LD-70k-2e-pruned.ckpt\r
70k explicit images from danbooru\r
2 epochs\r
Base model Waifu Diffusion v1.2\r
Dataset: \`https://drive.google.com/drive/folders/1f_BYi88LLTZUzBHkUz8PDgw6l7M7swkd?usp=sharing\`\r
Dataset stats: \`https://docs.google.com/spreadsheets/d/1BzNSXyT4fhiM64DwIJSCyAXuhRQ9fkxqcr-t1frIYkc/edit\`\r
!!! note\r
**SHA256** 54faf6de03fb9a6fe4d8af163b16133cd7cd045d45915178c602e4b51a92036c\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:U5RICVYDEJL6LIJJWFKQOIVO5GMGCJNW&dn=last-pruned.ckpt&xl=3852165809&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce\r
\`\`\`\r
\r
### Lewd Diffusion 70k 1e [950d323b]\r
\r
LD-70k-1e-pruned.ckpt\r
70k explicit from danbooru\r
1 epoch\r
Base model Waifu Diffusion v1.2\r
Dataset: \`https://drive.google.com/drive/folders/1f_BYi88LLTZUzBHkUz8PDgw6l7M7swkd?usp=sharing\`\r
Dataset stats: \`https://docs.google.com/spreadsheets/d/1BzNSXyT4fhiM64DwIJSCyAXuhRQ9fkxqcr-t1frIYkc/edit\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:fca8782a5a9861a6beb1aa3b48938bd1da1a665e&dn=LD-70k-1e-pruned.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
### Lewd Diffusion v0 [07734b46]\r
\r
Lewd-diffusion-pruned.ckpt\r
Danbooru21 NSFW epoch0\r
40K Images\r
1 Full Epoch\r
Base model Waifu Diffusion v1.2\r
Dataset: \`https://drive.google.com/drive/folders/1f_BYi88LLTZUzBHkUz8PDgw6l7M7swkd?usp=sharing\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:f6976fbe3b9f93469bb62eb0c4950643b09f1f83&dn=Lewd-diffusion-pruned.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
## Yiffy\r
\r
### yiffy-e18.ckpt [50ad914b]\r
\r
Based on yiffy-e15, trained for a further 3 epochs using a dataset of 210k images from e621.\r
\r
> This will likely be the last epoch for quite some time, because until further improvements to other parts of the network (such as a custom VAE, variable res, etc), we think that further training is not necessary because the model has converged on a decent style for now.\r
> **IMPORTANT NOTE:** during training explicit was misspelled as **explict**. Using the misspelled version results in better cocks. Sorry :<\r
\r
Tag counts \`https://mega.nz/file/ZkkTEYJY#X_j191NtHJRp0BKJusTqmWrs1-AdAILy99mqSAMpWbo\` or \`https://pixeldrain.com/u/TkwJU3WG\`\r
\r
!!! note\r
**SHA256** 64e242ae67cb1fc85110a68242c936fa6f3e33077f2bfed48c4769959dff6c61\r
**MD5** dbe25794e24af183565dc45e9ec99713\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:b177dd04ae7062b541c82ad26f897e0a9fa514f4&dn=yiffy-e18.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://sexy.canine.wf/file/yiffy-ckpt/yiffy-e18.ckpt\r
\`\`\`\r
\r
### yiffy-e15.ckpt [4bb305c0]\r
\r
Based on yiffy-e13, trained for a further 2 epochs using a dataset of 210k images from e621.\r
\r
> **IMPORTANT NOTE:** during training explicit was misspelled as **explict**. Using the misspelled version results in better cocks. Sorry :<\r
\r
Tag counts \`https://mega.nz/file/ZkkTEYJY#X_j191NtHJRp0BKJusTqmWrs1-AdAILy99mqSAMpWbo\` or \`https://pixeldrain.com/u/TkwJU3WG\`\r
\r
!!! note\r
**SHA256** f0d49adddcb9f1030cb13e4eed21d12f27cdd3d98a9740002d0ccdb4a9fa61f1\r
**MD5** cc354964edbcbb7758cb359743aa1791\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:2b8d5f308244eddf56d4a350df84d63045e65dd6&dn=yiffy-e15.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://sexy.canine.wf/file/yiffy-ckpt/yiffy-e15.ckpt\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://pixeldrain.com/u/qkRKKpqg\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://iwiftp.yerf.org/Furry/Software/Stable%20Diffusion%20Furry%20Finetune%20Models/Finetune%20models/yiffy-e15.ckpt\r
\`\`\`\r
\r
### yiffy-e13.ckpt [778b38ae]\r
\r
> first 4 epochs were trained on ~70k images with lama infilling (the cause of all of our headaches, because the network found a pattern in the edges and started replicating it everywhere)\r
> next 6 epochs were trained on ~120k images with random cropping and a lower LR\r
> last epochs were done on a different dataset, not bigger than 150k\r
> **IMPORTANT NOTE:** during training explicit was misspelled as **explict**. Using the misspelled version results in better cocks. Sorry :<\r
\r
Tag counts \`https://mega.nz/file/ZkkTEYJY#X_j191NtHJRp0BKJusTqmWrs1-AdAILy99mqSAMpWbo\` or \`https://pixeldrain.com/u/TkwJU3WG\`\r
\r
!!! note\r
**MD5** bfff21ca92fb218e52ab47aea8bac582\r
**SHA256** 3d3f7cc7876ce79697038c620ba723d785be26a18a9734ea10a31fae63992b65\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:6d749325cbdcf1fc044483fb0d53c233b60735dc&dn=yiffy-e13.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://iwiftp.yerf.org/Furry/Software/Stable%20Diffusion%20Furry%20Finetune%20Models/Finetune%20models/yiffy-e13.ckpt\r
\`\`\`\r
\r
## SnackBar-General-V1-E11 [16d5a5c7]\r
\r
> This model was trained with waifu diffusion using the top 300k images on e621 with certain tags. Use e621 tags in prompts with underscores. You might get better results if you order them as follows:\r
> \`[safe/questionable/explicit]_content [artist] [copyrights] [characters] [species] [general]\`\r
> For better results, set 'Stop At last layers of CLIP model' in the webui settings to 2.\r
> Sample images:\r
> https://media.discordapp.net/attachments/528278867572424710/1036765895797788682/09785-69750433-safe_content_renamon.png > https://media.discordapp.net/attachments/528278867572424710/1036765867645603870/09627-1184405578-safe_content_lucario_anthro_male_solo_cute_clothing_adorable.png\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:3e18a1d0b988f66c23a472e556ae15fed150d5cc&dn=snackbar-general-v1-e11-pruned.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://pixeldrain.com/u/uMb3Bnw6\r
\`\`\`\r
\r
## Furry\r
\r
### Furry_epoch4.ckpt [323f8dd8]\r
\r
Trained on 300k images from e621.\r
Tag counts: \`https://mega.nz/file/co0UlQ5Z#vERcoYTWGJguTsXmysbLq1NL_xBS8txQhVvPI5E3QKE\` or \`https://pixeldrain.com/u/FQwRjyyk\`\r
\r
!!! note\r
**MD5** f8ef45a295ef4966682f6e8fc2c6830d\r
**SHA256** 4160c57f98f1727f5a52cba8c844656fc9061311f9c37daf45e8e0ebe913c987\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:a9635389ae4c5583b0cc76ec8f6dce35438b3016&dn=furry_epoch4.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://pixeldrain.com/u/dtYiYN7g\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://iwiftp.yerf.org/Furry/Software/Stable%20Diffusion%20Furry%20Finetune%20Models/Finetune%20models/furry_epoch4.ckpt\r
\`\`\`\r
\r
### Furry_epoch1.ckpt [0c891127]\r
\r
Trained on 300k images from e621.\r
Tag counts: \`https://mega.nz/file/co0UlQ5Z#vERcoYTWGJguTsXmysbLq1NL_xBS8txQhVvPI5E3QKE\` or \`https://pixeldrain.com/u/FQwRjyyk\`\r
\r
**Torrent**\r
\r
\`\`\`\r
magnet:?xt=urn:btih:d62bc9a088b206565005cab915a58fd26da1802e&dn=furry_epoch1.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://iwiftp.yerf.org/Furry/Software/Stable%20Diffusion%20Furry%20Finetune%20Models/Finetune%20models/furry_epoch1.ckpt\r
\`\`\`\r
\r
### Furry_epoch0.ckpt [8c19ee5a]\r
\r
Trained on 300k images from e621.\r
Tag counts: \`https://mega.nz/file/co0UlQ5Z#vERcoYTWGJguTsXmysbLq1NL_xBS8txQhVvPI5E3QKE\` or \`https://pixeldrain.com/u/FQwRjyyk\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://iwiftp.yerf.org/Furry/Software/Stable%20Diffusion%20Furry%20Finetune%20Models/Finetune%20models/furry_epoch0_ckpt\r
\`\`\`\r
\r
## Zack3D_Kinky-v1.ckpt [1a75d5c6]\r
\r
This is a NSFW model trained from SD v1.4, great for general furry but specializes in the kinky side of art such as\r
Transformation, latex, tentacles, goo, ferals, bondage, and a lot more that I cant remember. Uses over 100k images all aesthetics filtered.\r
Prompt is raw E621 tags, so with underscores.\r
!!! note\r
**SHA1** 9f54dcdbdb2e4c969a9d1b70ba34f02227b8ce10\r
**MD5** aa944b1ecdaac60113027a0fdcda4f1b\r
**SHA256** 3FD17AF06C610990A957A801A1831F88EF5E45D9C3C8E551557B8B9C6C1FC2D5\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:807a71d3ed3f887e41c492cf24fbd3c6f5a81534&dn=Zack3D_Kinky-v1.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`\r
https://pixeldrain.com/u/DEocAHsx\r
\`\`\`\r
\r
## Anal Vore AVHumanFurryPony7.ckpt [68e2e32d]\r
\r
Anal vore. 7 epochs continued from Zack3D_Kinky-v1.\r
Tags \`https://mega.nz/file/FmxSnRZa#I4JgsLTiXWoFUoDrQBWfVNnooUUOxqkFHEOPuCE1Hdc\`\r
Example prompts \`https://mega.nz/file/hu5QnJgJ#DFmvHDuEpm7OdDkQD_wIRrCo7x8j3lqYkhC4aS-egvs\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/4jR2WAIZ#p0A7eorXgI_ywC06zQiLcPwE3QdStEa86wwEdrDIE7A\r
\`\`\`\r
\r
## R34\r
\r
### r34_e4.ckpt [6e45cf2c]\r
\r
Fifth epoch.\r
Tag counts: \`https://mega.nz/file/4sFn0AxQ#pHDvIE5eKJC3NSNpgdEw-ve0WSlWjtsTvfpe7YaYh1Q\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:ed9f0e3f849d7119107ef4e072c6abeb129e1a51&dn=r34_e4.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2fpublic.tracker.vraphim.com%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/yJgDUCzA#zOD2yeE6QLBqPEjEpIi2b4FWOlb64yVUveOd_eW6teI\r
\`\`\`\r
\r
### r34_e3.ckpt [57ea6f43]\r
\r
> r34 e3 (fourth epoch). Same dataset, prepended "by" to artist tags, artist recognition has improved a little bit (still needs to get better), character recognition has improved quite a bit.\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/WVggzbRa#4-pcaLeLN02bdvzUwCn2QQKoLxCC7copAJHYyG4aOB0\r
\`\`\`\r
\r
### r34_e2.ckpt [778b68b1]\r
\r
> Third epoch, again a pretty nice improvement over the last. Dataset grew by ~3K images, with 5K removed and 8K added.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:ef93096b839a54bff77c585b1ba2518bc264d0b4&dn=r34_e2.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.filemail.com%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/3JQ13JTZ#sdByZl4rXp7uxxIDutGs5GHg5RkGZfLrTA5wQEfkDJE\r
\`\`\`\r
\r
### r34_e1.ckpt [f9000e4e]\r
\r
> I yeeted about 30K images and then added 20K back from good artists, and lowered the LR significantly to reflect my batch size, I think it's improved significantly but I didn't save any prompts/settings from epoch0 to compare it with.\r
\r
!!! note\r
**SHA256** 6ca821f381687796052aa027f60a2dff1aeb001a0c4a2e1f1a1fef4fe89e809a\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:aa575688ad99cf4bf8e5ee8ab026de9ef61f2d19&dn=r34_e1.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.0x.tf%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/OdxnkAaQ#-9VBG4jyPqlQIcRRnojtNWvhdJQFbmmfGU9I2QGWV5o\r
\`\`\`\r
\r
### r34_150k_epoch0.ckpt [7dc34283] [7c3721c3]\r
\r
Trained on 150K images from \`rule34.xxx\`. 1 epoch.\r
Tag counts: \`https://mega.nz/file/UhsWjBCI#XOvN31pil7_g9YgtzpchpJwyOnVHxrE-dlhxBLYku0I\`\r
!!! note\r
r34_150k_epoch0-pruned-fp16.ckpt **[7dc34283]** | **SHA256** f8c7da0d6a98ebd641cb67c24f33510e2c86d1dfa104c10279c7e5cb49d535fd\r
r34_150k_epoch0.ckpt **[7c3721c3]** | **SHA256** de2ad17e4af8871cdd42bd03de4faf28983c0ef8702323bbc3d382510d367a91\r
\r
**r34_150k_epoch0-pruned-fp16.ckpt [7dc34283] Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:a8f34e4f7f0bc5298516082b41b5e920b8cc483c&dn=r34_150k_epoch0-pruned-fp16.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.0x.tf%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt2.archive.org%3a6969%2fannounce\r
\`\`\`\r
\r
**r34_150k_epoch0.ckpt [7c3721c3] Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:PVTASWQ5GXC4NXGKAZU5LVXJZX3PR6R2&dn=r34_150k_epoch0.ckpt&xl=11142098457&tr=udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce\r
\`\`\`\r
\r
**r34_150k_epoch0.ckpt [7c3721c3] Web**\r
\r
\`\`\`text\r
https://mega.nz/file/fdpVCZqB#C3G1_Qs9K65oh_9RHIJoiO1eE5Ns07mvqVdVYXq9uoo\r
\`\`\`\r
\r
##Gape\r
\r
### gape60 [25396b85]\r
\r
60th epoch (120k steps)\r
gaping/large insertion/other model trained on danbooru, gelbooru, sankaku: all of \`gaping anus\`, \`gaping pussy\`, \`large insertion\`, \`huge dildo\`, \`fisting\`, \`prolapse\`, \`all the way through\` + some others.\r
Info https://rentry.org/gapemodel\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:b892f6e7e6e287ca2ea59d2c575fdf5ae1f82d92&dn=gape60.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.zerobytes.xyz%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.zemoj.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.monitorit4.me%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/38RxVBiK#ocmQb_ahp078Imfcvc5SrAvJePOqvhNVBKfZIIeP74Q\r
\`\`\`\r
\r
### gape22 [d69e1a23]\r
\r
Presumably the 22nd epoch.\r
gaping model trained on sankaku and e621 data: all of \`gaping_anus\`, \`gaping_pussy\`, \`large_penetration\`, \`fisting\`, \`prolapse\`, etc (some shit omitted). based on yiffy15.\r
Info https://rentry.org/gapemodel\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/29hmjYaA#GDdvgwJKKNFLMiaYA2RpuxFk7ormSrS32c05-s3JJCo\r
\`\`\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:9d7aabfbac88940a0f93b076f3ce30bb4b06b7e8&dn=gape22_yiffy15.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fmovies.zsw.ca%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fbt.oiyo.tk%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.nanoha.org%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce&tr=https%3A%2F%2Ftr.burnabyhighstar.com%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
### gape18\r
\r
Presumably the 18th epoch.\r
gaping model trained on e621 data: all of \`gaping_anus\`, \`gaping_pussy\`, \`large_penetration\`, \`fisting\`, \`prolapse\`, etc (some shit omitted). based on yiffy15.\r
Info https://rentry.org/gapemodel\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:9c0fac3978e650e0fa18c18ee74dc35479774c08&dn=gape18_yiffy15.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pomf.se%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fmovies.zsw.ca%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fbt.oiyo.tk%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.nanoha.org%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce&tr=https%3A%2F%2Ftr.burnabyhighstar.com%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
## sd-wikiart-v2.ckpt. [8f32b8df]\r
\r
> sd-wikiart-v2 is a stable diffusion model that has been fine-tuned on the wikiart dataset to generate artistic images in different style and genres.\r
> The current model has been fine-tuned with a learning rate of 1e-05 for 1 epoch on 81K text-image pairs from wikiart dataset. Only the attention layers of the model are fine-tuned. This is done to avoid catastrophic forgetting, the model can generate artistic images given specific prompts but still retains most of its previous knowledge.\r
> Info https://huggingface.co/valhalla/sd-wikiart-v2\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:474493890c2532031fefc8ba3c44d8fed61f287a&dn=sd-wikiart-v2.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
## Pachu-Diffusion [54d5d199]\r
\r
> This fine-tuned Stable Diffusion v1.5 model was trained for 8000 iterations on the works of Pachu M. Torres. Training was performed using ShivamShrirao/diffusers with full precision, prior-preservation loss, the train-text-encoder feature, and the new 1.5 MSE VAE from Stability AI. A total of 4120 regularization / class images were used. Regularization images were generated using the prompt "artwork style", 50 DDIM steps, and a CFG of 7.\r
> Use the tokens \`pachu artwork style\` in your prompts for the effect.\r
> Repo https://huggingface.co/ProGamerGov/Pachu-Diffusion\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/ProGamerGov/Pachu-Diffusion/resolve/main/pachu_artwork_style_v1_iter8000.ckpt\r
\`\`\`\r
\r
## TestFurry_5.ckpt [b1f1855e]\r
\r
> Small model, trained with 40k dataset mixed furry and humans (~15k humans and 25k furry). No censorship, no speech bubbles, no comic strips. Gelbooru/e621 mixed tags. 5 epoch (still not finished but can do good results) NSFW!!\r
> Tags order recommendation - type (furry if furry), character, source, author, race, gender, other description tags.\r
> Trained on up to 225 tags, with penultimate layer (CLIP 2 in AUTO GUI)\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:0c0bbbf3182305d6e7e4707e566f2c60cf4e890f&dn=TestFurry_5.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
## cookie_sd_pony_run_a12 [2ce7dcf5] [67ff5385]\r
\r
> This is the "Cookie A12" model.\r
> Trained on 300k Derpibooru images with score.gt:100 for 2172700 steps.\r
\r
> New features;\r
>\r
> - Improved VAE\r
> - Improved CLIP Text Encoder\r
> - Generate images at any aspect ratio\r
> - Generate any derpibooru artist or OC to high accuracy.\r
> - Generate Anthro, Humanized, EqG, Dragon?, whatever exists in derpibooru.\r
> - Generate high quality results without "magic words" (https://u.smutty.horse/mjzakocpxtf.png)\r
> - No censored tags or data, NSFW+SFW.\r
\r
> Note:\r
> Keep CLIP Skip off. The improved CLIP will break if you skip any layers.\r
\r
> Samples:\r
> https://u.smutty.horse/mjzakocpxtf.png >https://drive.google.com/drive/folders/1nOZKI2iXpzjusvlCsZxF7NxKZYjvKOWE?usp=share_link\r
\r
**Torrent float16**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:54d2d1d8f36d9ee192a3b84e6e6c0ddb68f4e891&dn=cookie_sd_pony_run_a12_datasetv5_300k_imgs_fp16.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web float16**\r
\r
\`\`\`text\r
https://sexy.canine.wf/file/furry-ckpt/cookie_sd_pony_run_a12_datasetv5_300k_imgs_fp16.ckpt\r
\`\`\`\r
\r
**Web float32**\r
\r
\`\`\`text\r
https://sexy.canine.wf/file/furry-ckpt/cookie_sd_pony_run_a12_datasetv5_300k_imgs_fp32.ckpt\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/folder/rIZwEaLZ#AwCpM7Zhu8TFgISQhAE8tw/folder/LRxjWBaJ\r
\`\`\`\r
\r
## pony-diffusion\r
\r
### pony-diffusion-v2 [5bdc40aa]\r
\r
> pony-diffusion is a latent text-to-image diffusion model that has been conditioned on high-quality pony and furry SFW and NSFW images through fine-tuning.\r
> WARNING: Compared to v1 of this model, v2 is much more capable of producing NSFW content so it's recommended to use 'safe' tag in prompt in combination with negative prompt for image features you may want to suppress. v2 model also has a slight 3d bias so negative prompts like '3d' or 'sfm' should be used to better match v1 outputs.\r
> Repo https://huggingface.co/AstraliteHeart/pony-diffusion-v2\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/Va0Q0B4L#QAkbI2v0CnPkjMkK9IIJb2RZTegooQ8s6EpSm1S4CDk\r
\`\`\`\r
\r
### pony-diffusion-v1 [9070b574]\r
\r
Fine-tuned on top of an early checkpoint of Waifu Diffusion with a learning rate of 5.0e-6 for 4 epochs on approximately 80k pony text-image pairs (using tags from derpibooru) which all have score greater than 500 and belong to categories \`safe\` or \`suggestive\`.\r
Info \`https://huggingface.co/AstraliteHeart/pony-diffusion\`\r
!!! note\r
**SHA256** 507dd62efcb01db04aeb1b68eb28912d1fe692c04637e463cc43e68752729627\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/ZT1xEKgC#Xxir5udMmU_mKaRZAbBkF247Yk7DqCr01V0pDzSlYI0\r
\`\`\`\r
\r
## mio-wd-v1.2-e24-ex-ad [125f9ece]\r
\r
Small model trained on 500 (aprox) images on Mio (nichijou). 24 epochs.\r
Info: \`https://huggingface.co/chavinlo/mio-naganohara-waifu-diffusion\`\r
\r
!!! note\r
**SHA256** 4744ed99c119096fa144df9aa8c869d933e3b6a239786462c5cc399ff1d78698\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:MS2YZ762U2IJZBG2GSEADRAA5KAOQCVQ&dn=mio-wd-v1.2-e24-ex-ad&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/chavinlo/mio-naganohara-waifu-diffusion/resolve/main/epoch%3D000023-pruned.ckpt\r
\`\`\`\r
\r
## fubuki-ld-v1-e13-ex-ad [2af6d20f]\r
\r
Medium model trained on 5,000 images of Fubuki from Hololive. 13 Epochs Pruned, 3.8GB, includes samples.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:D37QX2URIZ7QWMBCCLMZG6THZF5GLDB2&dn=fubuki-ld-v1-e13-ex-ad&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce\r
\`\`\`\r
\r
## asuka-ld-v1-e4-ex-ad [87074080]\r
\r
Small model trained on 17,000 images of Asuka from Evangelion. 4 Epochs, Pruned, 3.6GB, does not include samples.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:4GBOL6SMWLZWT2CBUWVMSF5NCGD47CGZ&dn=asuka-ld-v1-e4-ex-ad&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce\r
\`\`\`\r
\r
## tomoko-kuroki-ld-v1-e20-ex-ad [6095e7ab]\r
\r
Small model trained on unknown number of images of Tomoko Kuroki. 20 Epochs, Pruned, 3.5GB, does not include samples.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:3OFJJ76Y2K4W47RJ7EXFKI3BAZPPVTQM&dn=tomoko-kuroki-ld-v1-e20-ex-ad&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce\r
\`\`\`\r
\r
## Merges\r
\r
### BerryMix [19810fe6]\r
\r
If you have already been pickled to satisfaction, perhaps you may try being berried next.\r
Info https://rentry.org/berrymix\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:e975132162842e0b3e96948f8bffcb66071ecc97&dn=berry_mix.ckpt&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\r
\`\`\`\r
\r
### FreckleGuy's mix\r
\r
> A merge with some anime model and trinart with an old version of the automatic1111 ui\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:1968aed673e402127b6abab535059f622f93b989&dn=freckle_mix.ckpt&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\r
\`\`\`\r
\r
### HassansBlend\r
\r
> Still has a focus on being photorealistic but allows for some additional poses, sex scenes etc. Samples included on the page along with the images with metadata to copy.\r
> https://rentry.org/sdhassan\r
\r
> View sample albums from this model\r
> Other: https://imgur.com/a/c8VEbGJ\r
> Tentacles: https://imgur.com/a/l5hg69w\r
> Retro realistic: https://imgur.com/a/N5W5Rtn\r
> Normal nudes: https://imgur.com/a/14jAPBN\r
> Hardcore: https://imgur.com/a/WZJSvha\r
\r
### MMDv1-18\r
\r
A merge of an exorbitant number of models.\r
Info https://huggingface.co/ShinCore/MMDv1-18\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/ShinCore/MMDv1-18/resolve/main/MMD%20V1-18%20MODEL%20MERGE%20(TONED%20DOWN)%20ALPHA.ckpt\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/ShinCore/MMDv1-18/resolve/main/MMD%20V1-18%20MODEL%20MERGE%20ALPHA.ckpt\r
\`\`\`\r
\r
### samdoartsultmerge.ckpt [8687d7a5]\r
\r
> Here's a merged model using the original, chewtoy's model, and Chris(orginalcode)'s model\r
> Use \`samdoesarts style\` in the prompt.\r
> Repo https://huggingface.co/jinofcoolnes/sammod/tree/main\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:7357defc010aa7e05e60f29149ad20b09aec78ad&dn=samdoartsultmerge.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2f6ahddutb1ucc3cp.ru%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/jinofcoolnes/sammod/resolve/main/samdoartsultmerge.ckpt\r
\`\`\`\r
\r
### 70gg30LD70k.ckpt [402dc090]\r
\r
A merge between gg1342_testrun1_pruned.ckpt and LD-70k-1e-pruned.ckpt, 70-30 ratio.\r
This list isn't for merges, you can make them yourself with the WebUI.\r
This one is here because it is referenced (and asked for) so often.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:5667722f227d1534232182de77730f8aa7ff8212&dn=70gg30LD70k.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fzecircle.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fyahor.ftp.sh%3A6969%2Fannounce&tr=udp%3A%2F%2Fvibe.sleepyinternetfun.xyz%3A1738%2Fannounce&tr=udp%3A%2F%2Fv2.iperson.xyz%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker2.dler.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.theoks.net%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tcp.exchange%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.swateam.org.uk%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.publictracker.xyz%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
### wd1-2_sd1-4_merged.ckpt [2037c511]\r
\r
A merge between Waifu Diffusion v1.2 and Stable Diffusion v1.4 at unknown ratio.\r
This list isn't for merges, you can make them yourself with the WebUI.\r
This one is here because it is referenced (and asked for) so often.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:a1515e051c61ac55e64a7961da956dc2f5c00e90&dn=wd1-2_sd1-4_merged.ckpt&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2810%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker1.bt.moack.co.kr%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.nanoha.org%3A443%2Fannounce&tr=https%3A%2F%2Ftracker.lilithraws.org%3A443%2Fannounce&tr=https%3A%2F%2Ftr.burnabyhighstar.com%3A443%2Fannounce&tr=http%3A%2F%2Ftracker.mywaifu.best%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker.bt4g.com%3A2095%2Fannounce\r
\`\`\`\r
\r
## Dreambooth\r
\r
### Hiten girl_anime_8k_wallpaper_4k.ckpt [7831dea3]\r
\r
Useful for merging.\r
Custom Dreambooth model based off of the artist Hiten. Dataset was 6 training images, and 34 regularization images. Trained for 4000 steps.\r
Uses the Waifu Diffusion v1.2 model as a base.\r
To use the model, simply insert the name 'Hiten' into your prompts. The class token used was 'girl_anime_8k_wallpaper'. Append the class token after Hiten for stronger results. EX: "1girl by Hiten girl_anime_8k_wallpaper"\r
Info: \`https://huggingface.co/BumblingOrange/Hiten\`\r
!!! note\r
**SHA256** | 59cb5b6f2b7b9373a602d93c802ee841c367db5166a758e8d1d32464c9db1dd5\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/BumblingOrange/Hiten/resolve/main/Hiten%20girl_anime_8k_wallpaper_4k.ckpt\r
\`\`\`\r
\r
### nanachiDB-42imgs-5000steps.ckpt\r
\r
> nanachi 42 images on top of yiffy-e15\r
> keyword: nanachiDB cute_furry_girl\r
> **Web**\r
\r
\`\`\`text\r
https://mega.nz/file/xE9gFQYK#f61_2_OvDSOd4VRW3W9EoLpImwCBf1hauUFhW-iNtRw\r
\`\`\`\r
\r
### rizaDB-54imgs-4500steps.ckpt\r
\r
> ryza dreambooth model (54 images on top of WD 1.3 beta)\r
> keyword: rizaDB anime_girl (yes I misspelled the name)\r
> Attention: it can generate nsfw result by default\r
\r
\`\`\`text\r
https://mega.nz/file/dc1EDKCa#NTXIyMRCpFfS8BsW3s-VeT950ApRTzE8_aVciLmx1bM\r
\`\`\`\r
\r
### bea-14000-pruned-fp16.ckpt [802a681b]\r
\r
> Bea (Pokemon S/S) NSFW DreamBooth model\r
> Dataset Size: 24 hand-picked, hand-cropped fanart images, 50% SFW, 50% NSFW\r
> Steps: \`14000\`\r
> Learning Rate: \`6.5e-07\`\r
> Trigger Phrase (Identifier + Class): \`sks girl\`\r
> All training images depict the character as at least 18 years old - I am not responsible for the generation results using this model file.\r
> Training data included in torrent.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:18c7932594fcf2b67434103d3af422a92ebac625&dn=dreambooth-bea-nsfw&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.skyts.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce\r
magnet:?xt=urn:btih:18c7932594fcf2b67434103d3af422a92ebac625&dn=dreambooth-bea-nsfw&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.skyts.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce\r
\`\`\`\r
\r
### 2b-10000-pruned-fp16.ckpt [8cf4478f]\r
\r
> YoRHa 2B (Nier) DreamBooth NSFW\r
> Dataset Size: 18 hand-picked, hand-cropped fanart images, roughly half of them NSFW\r
> Steps: \`10000\`\r
> Learning Rate: \`6.5e-07\`\r
> Trigger Phrase (Identifier + Class): \`sks girl\`\r
> All training images depict the character as at least 18 years old - I am not responsible for the generation results using this model file.\r
> Training data included in torrent.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:14f5414d184f36c1932f310661eb82e14165931b&dn=dreambooth-2b-nsfw&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.skyts.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce\r
\`\`\`\r
\r
### misato-10000-pruned-fp16.ckpt [c51e4c77]\r
\r
> Misato Katsuragi (Casual Outfit) (Neon Genesis Evangelion) DreamBooth NSFW\r
> Dataset Size: 21 hand-picked, hand-cropped fanart images, roughly half of them NSFW\r
> Steps: \`10000\`\r
> Learning Rate: \`6.5e-07\` (i think?)\r
> Base Model: WD 1.3 epoch 8\r
> Trigger Phrase (Identifier + Class): \`sks katsuragi_misato\`\r
> All training images depict the character as at least 18 years old - I am not responsible for the generation results using this model file.\r
> Training images included in torrent.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:b4751304bbb04c719233436f92806cf278da74ab&dn=dreambooth-misato-nsfw&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.skyts.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce\r
\`\`\`\r
\r
### hilda-v2-8000-pruned-fp16.ckpt [d2c8eef1]\r
\r
> Hilda (Pokemon) DreamBooth NSFW\r
> Dataset Size: 24 hand-picked, hand-cropped fanart images, roughly half of them NSFW\r
> Steps: \`8000\`\r
> Base Model: WD 1.3 epoch 8\r
> Trigger Phrase (Identifier + Class): \`sks hilda_(pokemon)\`\r
> All training images depict the character as at least 18 years old - I am not responsible for the generation results using this model file.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:37c7fc96d630dafc14c3e46526507ca66e760afc&dn=dreambooth-hilda-nsfw&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce\r
\`\`\`\r
\r
### nagatoro-4000-pruned-fp16.ckpt [8c5ff341]\r
\r
> Nagatoro DreamBooth NSFW\r
> Dataset Size: 16 hand-picked, hand-cropped fanart images, roughly half of them NSFW\r
> Learning Rate: \`2.9e-07\` (imgs\\*0.18)\r
> Steps: \`4000\`\r
> Trigger Phrase (Identifier + Class): \`sks nagatoro_hayase\`\r
> All training images depict the character as at least 18 years old - I am not responsible for the generation results using this model file.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:fc70fc0613601df43ffc7e7921250debf925db7b&dn=dreambooth-nagatoro-nsfw&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce\r
\`\`\`\r
\r
### gawr_gura-4000-pruned-fp16.ckpt [cbd4da60]\r
\r
> Gawr Gura (Hololive) DreamBooth Model NSFW\r
> Dataset Size: 24 hand-picked, hand-cropped fanart images, roughly half of them NSFW\r
> Learning Rate: \`4.3e-07\` (imgs\\*0.18)\r
> Steps: \`4000\`\r
> Trigger Phrase (Identifier + Class): \`sks gawr_gura\`\r
> All training images depict the character as at least 18 years old - I am not responsible for the generation results using this model file.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:9200076f1cc41258a8069a6c44e948f5f6cd515b&dn=dreambooth-gura-nsfw&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce\r
\`\`\`\r
\r
### mori_calliope-4000-pruned-fp16.ckpt [6cb50083]\r
\r
> Calliope Mori (Hololive) DreamBooth Model NSFW\r
> Dataset Size: 14 hand-picked, hand-cropped fanart images, roughly half of them NSFW\r
> Learning Rate: \`2.5e-07\` (imgs\\*0.18)\r
> Steps: \`4000\`\r
> Trigger Phrase (Identifier + Class): \`sks mori_calliope\`\r
> All training images depict the character as at least 18 years old - I am not responsible for the generation results using this model file.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:969cabc39c8363aeec824f5530bb0749b6452621&dn=dreambooth-calli-nsfw&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce\r
\`\`\`\r
\r
### towa-4000-pruned-fp16.ckpt [d578d3c1]\r
\r
> Tokoyami Towa (Hololive) DreamBooth Model NSFW\r
> Dataset Size: 15 fanart images, roughly half of them NSFW\r
> Learning Rate: \`2.7e-07\` (imgs\\*0.18)\r
> Steps: \`4000\`\r
> Class: \`tokoyami_towa\`\r
> All training images depict the character as at least 18 years old - I am not responsible for the generation results using this model file.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:207fef192613543d219a861b37e04c138a7a8597&dn=dreambooth-towa-nsfw&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce\r
\`\`\`\r
\r
### Gawr_Gura_450img.ckpt [e7883abf]\r
\r
Based on Waifu Diffusion v1.2\r
Custom Dreambooth model based off of the likeness of Hololive Vtuber Gawr Gura. Dataset was 450 training images, and 900 regularization images. Trained for 3000 steps.\r
To use the model, simply insert the name 'Gawr Gura' into your prompts.\r
Repo: https://huggingface.co/BumblingOrange/GuraLv400\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/BumblingOrange/GuraLv400/resolve/main/Gawr_Gura_450img.ckpt\r
\`\`\`\r
\r
### Emilia_CustReg_3k.ckpt [2660cf9a]\r
\r
Based on Waifu Diffusion v1.2\r
Custom Dreambooth model based off of the likeness of Emilia from Re:Zero. Dataset was 16 training images, and 11 regularization images. Trained for 3000 steps.\r
To use the model, simply insert the name 'Emilia' into your prompts. The class token used was 'white_hair_girl_violet_eyes'. Append the class token after Emilia for stronger results. EX: "A photo of Emilia white_hair_girl_violet_eyes"\r
Repo: https://huggingface.co/BumblingOrange/Emilia\r
\r
\`\`\`text\r
https://huggingface.co/BumblingOrange/Emilia/resolve/main/Emilia_CustReg_3k.ckpt\r
\`\`\`\r
\r
### Star Fox Krystal\r
\r
Trained on 90 fan art images for 2500 steps on top of yiffy18. Regulation images were an even mix of about 200 low-quality generations of 4 common anthro species with a spread of gender (a new idea I hope to explain in a forthcoming guide).\r
This following bit of text MUST be used in your prompt, or it will do nothing!\r
Trigger Phrase \`thatbluefoxfromstarfoxkrystal anthro\`\r
\r
!!! note\r
**SHA256** 13adea314c8653de231c454fa9e911d80ab04640caf30d752802c9b201d4c243\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/6x4zETbS#E22vQhjjK9CmBQXkzZgNFkIF4-TWGsyE0GRFP7pk-kE\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://pixeldrain.com/u/EH2mvEux\r
\`\`\`\r
\r
### StudioGhibli [10c6aa67]\r
\r
Prompt is \`studio_ghibli_anime_style style\`\r
Repo https://huggingface.co/IShallRiseAgain/StudioGhibli\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/IShallRiseAgain/StudioGhibli/resolve/main/StudioGhibliV4.ckpt\r
\`\`\`\r
\r
### Arcane Vi vimod.ckpt [e02601f3]\r
\r
Use \`sks vi\` or \`vi\` in the prompt.\r
!!! note\r
**SHA256** 2db4e932c1d7e3ac4b8c9d94d9b9c98487941f3b6c5617973351f898374d7aae\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/jinofcoolnes/VImodel/resolve/main/vimod.ckpt\r
\`\`\`\r
\r
### irlhyperbreasts_9k.ckpt [5ce8b6ec]\r
\r
Preview https://i.imgur.com/GIsZKH4.jpg\r
Keyword \`hyperbreasts\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:350e93a86f6d08724a03e8175e1947fc7e123e4c&dn=irlhyperbreasts_9k.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2f6ahddutb1ucc3cp.ru%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/drive/folders/1ghNQ5kEXlnuuRTGMobfyr81W7N6bURMi\r
\`\`\`\r
\r
### hyperass v1\r
\r
> Hyper Ass Dreambooth model [NSFW] v1\r
> -800 images\r
> -10,000 steps\r
> -learning rate 5e-6\r
> This is the last model of the BBB hyper trio (boobs, butt, belly), and the last one I have planned for now\r
\r
keyword \`hyperass\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:cba3a8020f7b69695301412b58c35f7c17826c39&dn=dreambooth-hyper-ass&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce%20&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce%20&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce\r
\`\`\`\r
\r
### hyperbreasts: v3\r
\r
> Hyper Breasts Dreambooth model [NSFW] v3\r
> -1.2k images\r
> -10,000 steps\r
> -learning rate 1e-6\r
> This one was trained on less images overall, but higher quality and larger in size. Bigger results than v2.\r
> keyword \`hyperbreasts\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:697ac36f1539ddd88b84a6237cf25ed11388bf43&dn=dreambooth-hyper-breasts-v3&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce%20&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce\r
\`\`\`\r
\r
### hyperpreg: v2 (realism and anime)\r
\r
> keyword \`hyperpreg\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:b90176670760eee75156197644a461d61a64990d&dn=dreambooth-hyper-preg-v2&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce%20&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce\r
\`\`\`\r
\r
### hyperpreg: v1.1 (realism)\r
\r
> The difference between v1 and v1.1 is that v1.1 focuses on even larger belly sizes, with a smaller more refined dataset\r
> 1k images\r
> 50,000 steps\r
> learning rate 1e-6 cosine\r
> base model sd-v1-5\r
> keyword: \`hyperpreg\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:ee0959baa76604ebe17dd88b58bff32145cd9fb6&dn=dreambooth-hyper-preg-v1.1&tr=udp%3a%2f%2f93.158.213.92%3a1337%2fannounce%20&tr=udp%3a%2f%2f151.80.120.113%3a2810%2fannounce%20&tr=udp%3a%2f%2f91.216.110.53%3a451%2fannounce\r
\`\`\`\r
\r
### hyperpreg: v1 (realism)\r
\r
hyper_preg_2.7k-lr5e-7-15ks-fp16.ckpt\r
Hyper Preg Dreambooth model NSFW\r
\r
> 2.7k images\r
> 15,000 steps\r
> learning rate \`5e-7\`\r
> base model \`sd-v1-4\`\r
> keyword \`hyperpreg\`\r
> class \`round belly\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:wlu5ltx6nf637e3au2zk4r2o2y6oi3ol&dn=dreambooth-hyper-preg&xl=2133006686&fc=2\r
\`\`\`\r
\r
### Kurisu\r
\r
> Kurisu NSFW\r
> Trigger Phrase (Identifier + Class): \`sks kurisu\`\r
> Steps - 4000\r
> Images - 16 with a few NSFW\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:2380decbde8386095241729e38cb6bbead93c0c2&dn=kurisu_final_pruned.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\r
\`\`\`\r
\r
### Kurisu Visual Novel Official artist (Huke) [eda12c8e]\r
\r
kurisu_vn_final_4k_pruned.ckpt\r
\r
> Can do NSFW\r
> Trigger Phrase (Identifier + Class): \`sks kurisu_vn\`\r
> Steps - 4000 (tried 6k and it was overfitted)\r
> 12 SFW images from the artist of the Steins;Gate, Huke\r
> Quick note on this model, if you are wanting to generate different characters and use "highres fix" in auto's ui, set denoising strength high to prevent artifacts due to the art style, preferably >0.85. Adjust CFG as necessary, 5-7 is a good start.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:04c933900719a5833fbe07581ffa6c5114d3b7b6&dn=kurisu_vn_final_4k_pruned.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\r
\`\`\`\r
\r
### dreambooth_lain_girl.ckpt [e7629bf8]\r
\r
Prompt token \`lain girl\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:8fb4f0fe0ce052b5d6f0d1221a69f04aa2ea406d&dn=dreambooth_lain_girl.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/VK0U0ALD#YDfGgOu8rquuR5FbFxmzKD5hzxO1iF0YQafN0ipw-Ck\r
\`\`\`\r
\r
### Gyokai/onono imoko\r
\r
> the best model for coherency is gyokaidreambooth_1000.\r
> gyokaidreambooth_2000 starts to ignore prompt words but is very consistent in style.\r
> Use term \`gyokai\` under class \`1girl\`\r
> e.g \`illustration of gyokai 1girl\`\r
> works well with \`multicolored hair, colorful, halftone, polka dot\`\r
> protip: the model works well when paired with gyokai-zen HN at 0.85 strength.\r
> gyokai-zen: \`https://mega.nz/file/67AUDQ4K#8n4bzcxGGUgaAVy7wLXvVib0jhVjt2wPS-jsoCxcCus \`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/folder/HzYT1T7L#H9TWVVYowA0cX8Eh6x_H3g\r
\`\`\`\r
\r
### futacum_r34.ckpt\r
\r
> understands 'futa' and 'cumming' ; based on r34_e4, cartoony looking\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/file/d/1cbCm5KJQgIeD5Om6tkbwGtqHG6Pa0gBz/view\r
\`\`\`\r
\r
### futanari_v2_e3_s10000.ckpt\r
\r
> understands futanari ; very anime-ish\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/file/d/1PhCzlHf-PpxynzYcQPQ3INk5tfBL9Bb1/view?usp=sharing\r
\`\`\`\r
\r
### Futa_step_3200_10_27.ckpt\r
\r
> understands futa ; based on SD1.5, realistic looking\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/file/d/1-3xKhdXwlbPIXt8OjBvlamTiQUGza0hn/view\r
\`\`\`\r
\r
### Wayne Barlowe [e0c27550]\r
\r
Trained on 31 SFW artworks by artist Wayne Barlowe\r
\r
> Trigger Phrase: \`DBWayneBarlowe\`\r
> Steps: \`4000\`\r
> Images:\r
> Model: \`SD_1.5_pruned\`\r
> Use religious, demonic oriented prompts\r
\r
!!! note\r
**SHA512** 30fd8065ff69438c0ef96e063490f6ed4a8c7b41ac8433a36e592f285937f34cc45212d7c44846161a3b5f7977d9700778bf8d566beb653e56babf079f570302\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:a488fb7b0403988df282b422c3d9383e17bbc646&dn=DBWayneBarlowe_JM.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://gofile.io/d/VPm7wu\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://pixeldrain.com/u/9pPL2ikF\r
\`\`\`\r
\r
### Blacked POV blowjob [8467f44f]\r
\r
dreambooth-bkdbj-4000step-pruned-fp16.ckpt\r
\r
> Blacked POV blowjob model, trained for 4000 steps on 70 hand picked photos from blacked.com, trained on top of SD 1.4 model using Dreambooth. Keyword for prompt: \`bkdbj\`\r
> All training images used depict the actress as at least 18 years old - I am not responsible for any generation results using this model file or models merged with it. I will provide no support or further updates for this model. It is a "one trick pony" model, as it can do only one kind of NSFW scene. Size for generation that works is 512x512 or up to 512x640.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:836422af364efb784e61a049c1257ea1230509b7&dn=dreambooth-bkdbj-4000step-pruned-fp16.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://gofile.io/d/aMfZIV\r
\`\`\`\r
\r
### Zeipher F222 Female Nude (better anatomy)\r
\r
From: https://ai.zeipher.com/\r
\r
> All of these are still being trained and not final\r
> Check their website/discord for downloads and potential updates.\r
\r
**Torrent F222**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:GR3IGMJDPJPW3B4WRT5B7SAN7CEBHWSZ&dn=f222&tr=http%3A%2F%2Ftracker.openbittorrent.com%2Fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://redirect.ai.zeipher.com/b1t50kc\r
\`\`\`\r
\r
Previously F111.\r
Previously F99.\r
\r
### Zeipher BB (Blowjob images)\r
\r
From: https://ai.zeipher.com/\r
\r
> All of these are still being trained and not final\r
> Check their website/discord for downloads potential updates.\r
\r
### LOKEAN_PUPPYSTYLE_POV.ckpt [e02601f3]\r
\r
Photorealistic hetero doggystyle images.\r
For some reason, shares short hash with Arcane Vi vimod.ckpt and lokean missionary. Probably due to how it was trained - the hash is only of a small segment near the start of the file. They are different models.\r
Use \`LOKEAN_PUPPYSTYLE_POV\` to activate.\r
Info and preview images https://rentry.org/kwai\r
\r
**Web**\r
\r
\`\`\`text\r
https://agencykwai.vip/SD/LOKEAN_PUPPYSTYLE_POV.ckpt\r
\`\`\`\r
\r
### LOKEAN_MISSIONARY_POV.ckpt [e02601f3]\r
\r
Photorealistic hetero missionary images.\r
For some reason, shares short hash with Arcane Vi vimod.ckpt and lokean puppystyle. Probably due to how it was trained - the hash is only of a small segment near the start of the file. They are different models.\r
Use \`LOKEAN_MISSIONARY_POV\` to activate.\r
Info and preview images https://rentry.org/kwai\r
\r
**Web**\r
\r
\`\`\`text\r
https://agencykwai.vip/SD/LOKEAN_MISSIONARY_POV.ckpt\r
\`\`\`\r
\r
### Reverse cowgirl s4629674.ckpt [e285da0d]\r
\r
Photorealistic reverse cowgirl porn model\r
Prompt \`s4629674\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:7dd135c05ce2693fbcaf0e6e2f9975dfa871f745&dn=s4629674.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zemoj.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/Q4tDRTAJ#GvgsNp_AnCuniY_rpdrerDQtVaGO90dQlyB__wT4dMM\r
\`\`\`\r
\r
### elden-ring-diffusion [16d77205]\r
\r
This is the fine-tuned Stable Diffusion model trained on the game art from Elden Ring.\r
Use the tokens \`elden ring style\` in your prompts for the effect.\r
Repo https://huggingface.co/nitrosocke/elden-ring-diffusion\r
Check the repo for potential newer versions.\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/nitrosocke/elden-ring-diffusion/resolve/main/eldenRing-v3-pruned.ckpt\r
\`\`\`\r
\r
### modern-disney-diffusion [ccf3615f]\r
\r
This is the fine-tuned Stable Diffusion model trained on screenshots from a popular animation studio.\r
Use the tokens \`modern disney style\` in your prompts for the effect.\r
Repo https://huggingface.co/nitrosocke/mo-di-diffusion\r
Check the repo for potential newer versions.\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/nitrosocke/mo-di-diffusion/resolve/main/moDi-v1-pruned.ckpt\r
\`\`\`\r
\r
### Arcane-Diffusion [318a302e]\r
\r
This is the fine-tuned Stable Diffusion model trained on images from the TV Show Arcane.\r
Use the tokens \`arcane style\` in your prompts for the effect.\r
Repo https://huggingface.co/nitrosocke/Arcane-Diffusion\r
Check the repo for potential newer versions.\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/nitrosocke/Arcane-Diffusion/resolve/main/arcane-diffusion-v3.ckpt\r
\`\`\`\r
\r
### classic-anim-diffusion [be7ddafc]\r
\r
This is the fine-tuned Stable Diffusion model trained on screenshots from a popular animation studio.\r
Use the tokens \`classic disney style\` in your prompts for the effect.\r
Repo https://huggingface.co/nitrosocke/classic-anim-diffusion\r
Check the repo for potential newer versions.\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/nitrosocke/classic-anim-diffusion/resolve/main/classicAnim-v1.ckpt\r
\`\`\`\r
\r
### bukkake [b4a14787]\r
\r
bukkake_20_training_images_2020_max_training_steps_woman_class_word.ckpt\r
SD1.4 + Dreambooth\r
\r
> A good prompt to test is is "portrait of bukkake woman, cute girl, sexy, beautiful girl, photograph, nikon d4, f/2.8, 70mm, topless"\r
> Tip: Do NOT use face restore if you are trying to do txt2img to achieve any kind of realistic cum on a realistic face. Both currently available face restore models (GPFGAN and Codeformer) completely remove or ruin cum on face. Hopefully another coomer will come up with a new face restore model that ignores liquids on faces and still fixes the underlying face\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:90df9e64cd31b686c858b9d50b54efafd6a96984&dn=bukkake_20_training_images_2020_max_training_steps_woman_class_word.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.swateam.org.uk%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/olV0yDrR#-5ShWX92PP6r8wV6jHMHQjOmEGnq82xY6-J048GOf9s\r
\`\`\`\r
\r
### DCAU [2fd6057b]\r
\r
A model for the DC animated universe. Currently it has only been trained on Batman the Animated Series, but there are plans to include all the shows.\r
Repo (with samples) https://huggingface.co/IShallRiseAgain/DCAU\r
See the repo for potential newer versions.\r
Prompt is currently \`Batman_the_animated_series\`.\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/IShallRiseAgain/DCAU/resolve/main/DCAUV1.ckpt\r
\`\`\`\r
\r
### Raven anime.ckpt\r
\r
> 'anime' model - A newer model. It is a bit undertrained for more flexibility. It can create more complicated images with greater stability, but with a stronger anime style.\r
> Tag & classname require more emphasis / attention than the 'Western' model. Try (RavenRoth woman:1.2). It is a bit undertrained for more flexibility - may need to use 'grey skin' in the prompt. (RavenRoth woman:1.2) with grey skin.\r
> Tag & classname: \`RavenRoth woman\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/folder/4KlHFQaL#NBqANoiG3E7mz3apn85Q0g\r
\`\`\`\r
\r
### Raven Western.ckpt\r
\r
> This is an earlier Dreambooth model I created. It has a style more true to the Teen Titans cartoon and Zone art.\r
> I noticed how negative prompts can cause the model to shift away from a cartoon / Zone art style, so be careful with negative prompts if you find this.\r
> A negative prompt of: 'lowres, (bad anatomy), bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, jpeg artifacts, >signature, watermark, username, blurry, artist name' works well.\r
> I think the AI considers the thick line art style to be 'low quality' and for Raven to be 'deformed' or 'mutant', due to the grey skin.\r
> Try lower CFG Scale (closer to 5) for more flexibility. You may even want to try \`[RavenRoth anime_girl]\`\r
> Tag & classname: \`RavenRoth anime_girl\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/folder/4KlHFQaL#NBqANoiG3E7mz3apn85Q0g\r
\`\`\`\r
\r
### oshinobu-pruned.ckpt\r
\r
> Dataset Size: 63 fanart images that resemble the anime character design (just 3 or 4 are NSFW)\r
> Steps: 9450 (~6 epochs)\r
> Base Model: Waifu Diffusion v1.3\r
> Trigger Phrase (Identifier + Class): \`illustration of a oshinobu blonde_loli\`\r
> Because of the training data used, generated images keep her typical round blush (most of times).\r
> Now, I think I used an insane amount of steps and images, but when I trained this (one week ago) I had no idea what I was exactly doing.\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:bd00f28f19715632b62eae8660cbffb14d606c20&dn=oshinobu-pruned.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\r
\`\`\`\r
\r
### henreader_final_pruned.ckpt [e5803978]\r
\r
Trigger Phrase (Identifier + Class): \`sks henreader_db\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:2ea2f859da0dd0b48d39f7296bee20434b40e92b&dn=henreader_final_pruned.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\r
\`\`\`\r
\r
### oshino_shinobu_final_pruned.ckpt\r
\r
Trigger Phrase (Identifier + Class): \`photo of a sks oshino_shinobu_db\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:ed81724913f0cf899c6eed4a896ff1480b243761&dn=oshino_shinobu_final_pruned.ckpt&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fpublic.tracker.vraphim.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce\r
\`\`\`\r
\r
### Latex's Abandoned Style\r
\r
> This style is based on the artist Latex, an artist who used to do latex/latex tf but one day completely changed their art style, scrubbed their old images from most of the internet, and moved away from making latex (but kept the name ironically). Luckily I have a dump of their old art, so finally there is a way to remake one of my favorite styles of latex/goo art. I have attached some quick imperfect gens to check a look at. Im sure you guys will surpass me very very quickly.\r
> Phrase in prompt: \`latex_artist art\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:d14d31cbddbd3a1be01d4e89012495fe779fda2e&dn=Latex.zip&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
Pixeldrain: https://pixeldrain.com/u/9kNKHCSz\r
\`\`\`\r
\r
### Belle Dephine [32cbf6c8]\r
\r
Dreambooth NSFW\r
Keyword \`Belle girl_cute_face\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:29a87b4cfa2c3868b54fe382103ad17881b5f868&dn=Belle%20girl_cute_face%20v2%205k.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2ftracker2.dler.org%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.publictracker.xyz%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.novaopcj.eu.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.encrypted-data.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.army%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/file/d/1hcv-2kznXDYAnUDwUrQm6gHIrUQ0j9bZ/view?usp=share_link\r
\`\`\`\r
\r
### Cal Arts Style\r
\r
Info & samples https://publicprompts.art/cal-arts-dreambooth-model/\r
Trigger phrase: \`CALARTS\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/PublicPrompts/CALARTS/resolve/main/CALARTS.ckpt\r
\`\`\`\r
\r
### Pixel Landscapes V1\r
\r
Info & samples https://publicprompts.art/pixel-landscapes-v1-dreambooth-model/\r
Trigger phrase: \`16-bit-landscape pixel art style\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/PublicPrompts/16-bit-landscape_PublicPrompts/resolve/main/16-bit-landscape_PublicPrompts.ckpt\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/file/d/113V4jfwlgCsAKiMLPgpj0hfdZk1sV5cL/view\r
\`\`\`\r
\r
### MicroWorlds\r
\r
Info & samples https://publicprompts.art/microworlds-dreambooth-model/\r
Trigger phrase: \`microworld render style\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/7YJRFbxS#FmTrxB4ayFxUaBz-wiVxHov3YLAUFhObR2JyVwq_p_o\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/file/d/1QTUATU3WbYIWX-6ECRypCi1z9TOsXIhG/view?usp=sharing\r
\`\`\`\r
\r
### App Icons Generator V1\r
\r
Info & samples https://publicprompts.art/app-icons-generator-v1-dreambooth-model/\r
Trigger phrase: \`SKSKS app icon\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/file/d/1TNZTQfk0CNZg7nwy033olwOpQAkcglAN/view?usp=sharing\r
\`\`\`\r
\r
### Pixel Art V1\r
\r
Info & samples https://publicprompts.art/pixel-art-v1-dreambooth-model/\r
Trigger phrase: \`SKSKS art style\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/file/d/1HwiqDNm3FyxMNEZLqh7FXsMJv9wmy9bc/view?usp=sharing\r
\`\`\`\r
\r
### VTT RPG\r
\r
A collection of models to do with D&D races and monsters.\r
Info & Downloads https://huggingface.co/VTTRPGResources\r
\r
### Comic Diffusion\r
\r
Repo https://huggingface.co/ogkalu/Comic-Diffusion\r
Includes 6 comic styles.\r
\r
> The tokens for V2 are:\r
> \`charliebo artstyle\` >\`holliemengert artstyle\` >\`marioalberti artstyle\` >\`pepelarraz artstyle\` >\`andreasrocha artstyle\` >\`jamesdaly artstyle\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/ogkalu/Comic-Diffusion/resolve/main/comic-diffusion-V2.ckpt\r
\`\`\`\r
\r
### SD_PixelArt_SpriteSheet_Generator\r
\r
Allows you to generate pixel art sprite sheets from four different angles.\r
Repo https://huggingface.co/Onodofthenorth/SD_PixelArt_SpriteSheet_Generator\r
\r
> For the front view use \`PixelartFSS\`\r
> For the right view use \`PixelartRSS\`\r
> For the back view use \`PixelartBSS\`\r
> For the left view use \`PixelartLSS\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/Onodofthenorth/SD_PixelArt_SpriteSheet_Generator/resolve/main/PixelartSpritesheet_V.1.ckpt\r
\`\`\`\r
\r
### midjourney-v4-diffusion\r
\r
Stable Diffusion fine tuned on Midjourney v4 images\r
Use prompt: \`mdjrny-v4 style\`\r
Repo https://huggingface.co/prompthero/midjourney-v4-diffusion\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/prompthero/midjourney-v4-diffusion/resolve/main/mdjrny-v4.ckpt\r
\`\`\`\r
\r
### BloodborneDiffusion\r
\r
> This is a Dreamboothed Stable Diffusion model trained on the Bloodborne series Style.\r
> The total dataset is made of 100 pictures, and the training has been done on runawayml 1.5 and the new VAE, with 12k steps (poly LR1e-6).\r
> The token \`Bloodborne Style\` will bring in the new concept.\r
> The recommended sampling is k_Euler_a or DPM++ 2M Karras on 20 steps, CFGS 7 .\r
> Repo https://huggingface.co/Guizmus/BloodborneDiffusion\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/Guizmus/BloodborneDiffusion/resolve/main/BloodborneStyle-v1.ckpt\r
\`\`\`\r
\r
### samdoesarts_style [85b77ff9]\r
\r
> This is a dreambooth model trained on the works of Sam Yang(samdoesarts).\r
> trained with automatic1111 dreambooth extension\r
> 13000 steps 128 training images (256 flipped) 1500 class images 1e-6 learning rate\r
> token for this model is \`samdoesarts style\`\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:7999b19ee45d505354e50c25041f405ca8932a38&dn=samdoesarts_style.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2f6ahddutb1ucc3cp.ru%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://anonfiles.com/JbocEcG4yd/samdoesarts_style_ckpt\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://pixeldrain.com/u/4s3ntWvR\r
\`\`\`\r
\r
### JWST Deep Space Diffusion\r
\r
> This is a fine-tuned Stable Diffusion model (based on v1.5) trained on images taken by the James Webb Space Telescope, as well as Judy Schmidt. Use the token JWST in your prompts to use the style (e.g., \`jwst, green spiral galaxy\`).\r
> Repo https://huggingface.co/dallinmackay/JWST-Deep-Space-diffusion\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/dallinmackay/JWST-Deep-Space-diffusion/resolve/main/JWST-Deep-Space.ckpt\r
\`\`\`\r
\r
### copeseethemaldchinai_10000.ckpt (samdoesart) [32186669]\r
\r
Yet another samdoesart dreambooth model.\r
\r
> 100 images\r
> No class images.\r
> 1e-6 learning rate.\r
> Sample guidance scale set to 9.5\r
> based on "chinai (anything)"\r
> Use \`copeseethemald style\` in prompt\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:4f1365b3dd30541d2c1becfd5d54160928916ba4&dn=copeseethemaldchinai_10000.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2f6ahddutb1ucc3cp.ru%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/xT9jVToK#Sj1S76kl-PC-zCRwJ2FWen6DS0NHY0IXFFAkXhm03eo\r
\`\`\`\r
\r
### CopeSeetheMald-berry200_20400.ckpt (samdoesart) [fa49a214]\r
\r
Another samdoesart dreambooth model.\r
\r
> 204 images @ 20.4k steps\r
> 1e-6 learning rate\r
> based on "berry mix"\r
> Use \`copeseethemald style\` in prompt\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:e4f1f4b9d7d6cf8570914fe22318b44c18d6d602&dn=CopeSeetheMald-berry200_20400.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2f6ahddutb1ucc3cp.ru%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/folder/1a1xkQQK#4atlB1cJqI35InXxlxyA7A\r
\`\`\`\r
\r
### CopeSeetheMald-200_20400.ckpt (samdoesart) [95f071f9]\r
\r
Another samdoesart dreambooth model.\r
\r
> 204 images @ 20.4k steps\r
> 1e-6 learning rate\r
> based on "blossom mix"\r
> Use \`copeseethemald style\` in prompt\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:9b92aeea5d136ddae25c0d6165405e6e4d144ff1&dn=CopeSeetheMald-200_20400.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2f6ahddutb1ucc3cp.ru%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/folder/ZG0UnRBJ#jykESWBUCr7hjOoNVTXwLw\r
\`\`\`\r
\r
### Black Souls bs_1500.ckpt [37ec0dc9]\r
\r
> A dreambooth trained on game cg from a game called black souls\r
> call for\`bs\` in the prompt\r
> have vae off, ensure clip skip is set to 1, and set cfg to a low number (like 6)\r
> Preview https://cdn.discordapp.com/attachments/1038283286046322819/1040125269761081444/grid-0000.png\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:63e9c043838f7bca078fb9607873957d11a88e24&dn=bs_1500.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.altrosky.nl%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2ffe.dealclub.de%3a6969%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2f6ahddutb1ucc3cp.ru%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/KkIgRY7a#VrKp_JwspTF4e05ApSy4hkJgGUcMKaXSbyB_COZ-o6k\r
\`\`\`\r
\r
### jaggy92500.ckpt [93423a00]\r
\r
Game screenshots.\r
\r
> Here are the terms to call: jaggy, then ps_game_screenshot, pc_game_screenshot, gamecube_game_screenshot, blood_and_gore, intense_violence, zotov_game_screenshot, eroge_game_screenshot, life_sim_game_screenshot, and/or alter_echo. This is in descending order of influence. There are a few others which are not effective enough to name, but can have strong effects at times. I won't mention them. You should put (cartoon) and maybe (menu) in the negative prompt.\r
> Preview images: https://imgur.com/a/J4i1DiN\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:71847b56518e6d7d92dfe24e95f2ee474807b197&dn=jaggy92500.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.cyber-hub.net%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/0SER2YpC#_MRc6p_sG9cSWqihpt33jpOWyMR8bCZrUaVkh4z5kGE\r
\`\`\`\r
\r
### ykgl.ckpt (y2k cgi girls)\r
\r
> It does cgi girls from the y2k era. Trained for 40k steps.\r
> You call on them with \`(ykgl cgi_girl)\`, or \`(ykgl cgi_girls)\`, or just \`(ykgl girl)\`, and then maybe with , \`cgi_artstyle\`.\r
> Preview images https://imgur.com/a/r2aIcxo\r
\r
**Web**\r
\r
\`\`\`text\r
https://mega.nz/file/hT0mgTqR#d8g133APl30UtDwsNmzV73_ZESi_kTa5pmQgJoxomn0\r
\`\`\`\r
\r
### CSRmodel (cutesexyrobutts) [b77538cc]\r
\r
Dreambooth model based on cutesexyrobutts art style.\r
Preview https://i.imgur.com/VPNUae8.png\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:46c46d2630043f9e47b0107b9680b5bd270263d7&dn=Systemy-CSRmodel.rar&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dler.org%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.cyber-hub.net%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://gofile.io/d/D1L69E\r
\`\`\`\r
\r
### Pepestyle\r
\r
> A Dreambooth model created with the sole purpose of generating the rarest and dankest pepes.\r
> StableDiffusion 1.5 was used as a base for this model.\r
> 22 instance images, 400 class images, 2.2k steps at a 1.3e-6 learning rate.\r
> Use the phrase \`pepestyle person\`\r
> Repo https://huggingface.co/SpiteAnon/Pepestyle\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/SpiteAnon/Pepestyle/resolve/main/pepestylev2_2200.ckpt\r
\`\`\`\r
\r
### dbmai [e02601f3]\r
\r
A dreambooth model from China.\r
Preview images https://imgur.com/a/fTDgBST\r
Info https://tieba.baidu.com/p/8136937175\r
\r
**Torrent**\r
\r
\`\`\`text\r
magnet:?xt=urn:btih:89ede059b4f90887b1f1ce10ba7a37e1d8a0c4b5&dn=dbmai.ckpt&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopentracker.i2p.rocks%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=https%3a%2f%2fopentracker.i2p.rocks%3a443%2fannounce&tr=http%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337%2fannounce&tr=udp%3a%2f%2fopen.demonii.com%3a1337%2fannounce&tr=udp%3a%2f%2fmovies.zsw.ca%3a6969%2fannounce&tr=udp%3a%2f%2fipv4.tracker.harry.lu%3a80%2fannounce&tr=udp%3a%2f%2fexplodie.org%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.org%3a443%2fannounce&tr=https%3a%2f%2ftracker.cyber-hub.net%3a443%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce\r
\`\`\`\r
\r
**Web**\r
\r
\`\`\`text\r
https://drive.google.com/drive/folders/1MUtM5MTXM35fid5TE3tUSKXAqPP7oysz\r
\`\`\`\r
\r
### gigachad-diffusion\r
\r
> StableDiffusion v1.5 used. 20 instance images, 400 class images, 2.2k steps at a 1e-6 learning rate.\r
> Token \`gigachad\`\r
> Info & preview images: https://huggingface.co/SpiteAnon/gigachad-diffusion\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/SpiteAnon/gigachad-diffusion/blob/main/gigachad_2000.ckpt\r
\`\`\`\r
\r
### Complex-Lineart\r
\r
> Trained on around 100 images at 768x768 resolution.\r
> Use prompt: \`ComplexLA style\`\r
> Use resolution near 768x768, lower resolution works but quality will not be as good.\r
> Repo & preview images: https://huggingface.co/Conflictx/Complex-Lineart\r
\r
**Web**\r
\r
\`\`\`text\r
https://huggingface.co/Conflictx/Complex-Lineart/resolve/main/ComplexLA%20Style.ckpt\r
\`\`\`\r
`;function I(c){return{c:t,l:t,m:t,p:t,i:t,o:t,d:t}}function E(c){let n,a;return n=new z({props:{source:c[0]}}),{c(){x(n.$$.fragment)},l(r){w(n.$$.fragment,r)},m(r,e){_(n,r,e),a=!0},p:t,i(r){a||(h(n.$$.fragment,r),a=!0)},o(r){g(n.$$.fragment,r),a=!1},d(r){S(n,r)}}}function B(c){let n,a;return{c(){n=p("div"),a=D("Loading...")},l(r){n=d(r,"DIV",{});var e=s(n);a=T(e,"Loading..."),e.forEach(u)},m(r,e){k(r,n,e),m(n,a)},p:t,i:t,o:t,d(r){r&&u(n)}}}function R(c){let n,a,r,e={ctx:c,current:null,token:null,hasCatch:!1,pending:B,then:E,catch:I,value:0,blocks:[,,,]};return A(W,e),{c(){n=p("div"),a=p("article"),e.block.c(),this.h()},l(f){n=d(f,"DIV",{class:!0});var o=s(n);a=d(o,"ARTICLE",{class:!0});var i=s(a);e.block.l(i),i.forEach(u),o.forEach(u),this.h()},h(){l(a,"class","flex-auto prose max-w-screen-lg text-md"),l(n,"class","container max-w-fit m-2")},m(f,o){k(f,n,o),m(n,a),e.block.m(a,e.anchor=null),e.mount=()=>a,e.anchor=null,r=!0},p(f,[o]){c=f,v(e,c,o)},i(f){r||(h(e.block),r=!0)},o(f){for(let o=0;o<3;o+=1){const i=e.blocks[o];g(i)}r=!1},d(f){f&&u(n),e.block.d(),e.token=null,e=null}}}class H extends b{constructor(n){super(),F(this,n,null,R,y,{})}}export{H as default};
