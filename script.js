const DIMENSIONS = 512;
let ALPHA = 10;
let RH_THRESHOLD = 5.0;
let isMuted = true;
let isHomeMode = false;
let currentVideoStartTime = Date.now();
let currentVideoIndex = -1;
let swipeHistory = []; 
let videoHistory = [];
let totalSwipes = 0; 
let recentCategories = [];

const yt_ids = ["hlji-vH0W7w", "9e9D7ABgHpU", "Twn_4AW0M6U", "D3s14gpmea4", "EkdVIC7UmSo", "WgCVSdXYR1w", "MHTizZ_XcUM", "nBfK04-QPpg", "zhtAoO9GUkk", "eOkxboD692M", "a1D-fZP8qJk", "g6tlNyr5sl8", "h5Zwg3Ag-bE", "mHZSrtl4zX0", "161mdDXrx6M", "gjgcwzJKu7s", "tH2tKigOPBU", "imWdOOryWuc", "zoWYGYfVbxM", "1ekU0_GPi-g", "RJsAqqObj-Y", "52GoRYP1les", "Y8tiCArU5pU", "nkwJPIJJ3hM", "jciQNpAc3Qg", "NGFhc8R_uO4", "B1VFmpxUTFM", "tP4k90sqWuA", "F2KcZGwntgg", "bor0qLifjz4", "_seJ7tW5MSA", "VNzkhZBjo5k", "Z-E5IUozd7M", "B_Kmri8OGg8", "BMGGc4SW0d0", "vVQcMt62UOE", "jzp9fLsXzlU", "z57Qscs5bD0", "mBUGXKYJZFQ", "682-BDpVseE", "nsgAsw4XGvU", "JaUhrGPs9Gc", "U-2XmqZGA3Q", "oiW3qIM0-k4", "e7-QQvhFvoU", "xCxT2NFCmco", "Y4y2e4rUxfo", "wr0lNZJfwwQ", "bZiWZJgJT7I", "utKvDXhS62Y", "qKq0Afmsj-U", "uRDy4M5jI-g", "oIAJkSiq2hM", "JECr1RpQ_jU", "XJRS3aLVE78", "0STnOQeA37E", "yiPqSoejAPQ", "QstcxIxzPug", "_ouIH1UO7tY", "ne5-W3cDlNk", "Sfzy05M-nzY", "z6TOQzCDO7Y", "_dmW-QDG5Tg", "mbpLpxi9rJY", "FXK4b6fLfVY", "m4gBaZcBHkE", "LmyRZR8MaJI", "u0Ec_sX-boY", "gfH-NLo8tRk", "7uTs6e9BvfY", "v4rP8ji4fgo", "ZhAPpor53K0", "KJ63Wgn9KWk", "uI_ifVdGuE8", "sfknp7c3gPM", "XS2Y9hM-GZc", "wYIyMz4Cs-U", "q7iIeQ0XiSE", "zzkMoJWyAzo", "nej5iw3Vg20", "Uh3fNYVwDXM", "im61iyNpimw", "6NnLfbTCM2I", "-_CWVXrie94", "HAhLl4xkt9k", "dQ_93nINBFs", "aKMSZD5qbyg", "IKnXrbg_VoY", "ZC0DxdjTjT8", "iE-Tx1JvNIc", "XDZ39JJsSp0", "HA4_gVHBUXc", "Jc7ogKSFs_4", "woTi--GCzwM", "3fnRU6jrL4s", "mQutXlTHCOU", "0RDqY8vmk1c", "0KKHYtSLI1g", "BgYVLsI0-XM", "eDb7VRxW9Cw", "Vwt7Bvv6SMg", "71uKAJk2K1s", "tzDHsufirfc", "AWzYpVm0L9o", "ye99Nh-zCik", "Im4Vg_TTbUE", "F2IZTHWuQVU", "0vNzxtQVf80", "_LJow0vrBRc", "rewCL624QOs", "-DcKAUO9zuc", "C6Rn75N8Ss4", "JcqAhPvPmOw", "g5aLU5MFfXM", "O_LO2QPQOck", "w3r67JXmCY0", "YXuJtCacaug", "hpqNsEOY2n4", "6-Vx-EzqmxE", "JT0mnpl3U4w", "yrgO3R8mgGo", "bzNKQ2FkEJI", "5yJCM0nheL0", "YPMwtmEisHM", "PwOVanOWdzM", "aD47CHWgdh8", "Sj-w0fJfmKw", "nfFQm82IqUc", "EbMDV7yBjrE", "dTBzF7etEy8", "i1AMYsR7xHQ", "ih1h72HkrnU", "hs00Dtp-_JQ", "8n7LsgFfFC4", "jWifCal6LxI", "NL2FUEPcST0", "TeWEKtqeFI0", "1tpcVlYBNk4", "nDfDpljq3Es", "InkzTw31tdY", "6mBO2vqLv38", "95-yZ-31j9A", "jOYUWM3QYpM", "TYsu5OJZ-u0", "YtxLexm-9pI", "z1SPwUkYDtk", "xPi4uZu4uF0", "LlhmzVL5bm8", "rdVPflECed8", "NnOAbQlQs6M", "cNwEVYkx2Kk", "RsQ1tFLwldY", "Y5OydGq_oYE", "MstX9cPPCio", "kQrVg5mb-iU", "j9-Y0KWVJ1k", "53q3gscB7FM", "XHvmX3FhTwU", "0HXKteHaio8", "3tUzBmCILrs", "orV8GebjuaM", "8gQbgyTlS-8", "axnHz5iPYCk", "GUXa-ByKCkc", "XNwPhlNeC9I", "Uc9hQGqV-DU", "ojOeHGalej0", "RoxKbyst0To", "257mEsu8lXg", "wKMy9FEpOhw", "1mlN0yuxoLE", "geUKI-2uWaY", "9jeYLvhzTB8", "9K9lTOQ8uEM", "xWwRpX3cfX0", "UFFf3QVaU9Y", "U6DG9dyvvJQ", "tACf_etAgrA", "36bkuPKwvbU", "LuM1PZgxWjI", "dy6ovi5gysk", "AudPmaQe9AM", "nDNMI0N9oO8", "EIQV_MFXTc8", "oLsonHQJOUc", "ZjuzJODdH8Q", "73Xk-tGE7a4", "YeVsxF-MVQE", "zINE3NGPYSs", "JgjesjhZlgs", "Tvpu6m9beMs", "RTZ60Y06BnQ", "xoH_akfDMA8", "-QU0oOqImq8", "6qGtjTwJ7k8", "isWA00k_jSU", "SaHeCRFX3uQ", "TIIhp0DqCCY", "7GB_2qSW5b4", "J0lb46Zi5-s", "rRULq9sWMF0", "rlm1YCrFMWg", "tlRjnUd-wmU", "weED53HHisg", "5A3obsCZHog", "gG5yPs1hzyc", "mNOYS-duUJY", "XU2xd2b-GTs", "Iyp_X3mwE1w", "h5ysddrlXLw", "kzsyJROQOas", "w1Nyql3ltC4", "wW95gSLJkCY", "3SAxXUIre28", "eHxiudIPNMI", "VPFp-zqjbMA", "FIxT6rK02lk", "tJfERzrG-D8", "3E1SXG7VkQk", "MicJ46YX5Lg", "aAJ6fo6n5o8", "T7fGDw7U2Wg", "UPazxC7o2SM", "DyDA80HuD-M", "FVTGYKpP_nc", "DQx96G4yHd8", "zFIWWM0Iv-U", "7oedD0KS4Do", "0ugyzbjRqiI", "j18ECUhkeY0", "zbXSfN71LHg", "3M5XyPK0OBo", "5wxQV9vIv7w", "klAUPbub-DE", "dFyxfMLt-s0", "oB0B2kWq9mc", "dM1ODMiwxWU", "pR2Ldv7m30Q", "4P_z4vMqMog", "1h7tpntr980", "0m3sPJnnveo", "ZYmmjNOwfvQ", "gnkkvUATpnI", "L97a6OHCQv8", "m3okcIdkLjk", "jTOfOew316s", "iwNAmMNazCs", "2yAr36a7Lmw", "00ZXaXIABMY", "7jOGWog-Tqs", "IuTDuvYr7f0", "x25SkQ7n2cA", "5juwJFTTTVg", "wjR9SvJ5DjQ", "scfD0DXLM9c", "jW5UQCyi8dI", "Jd1wzlwtKJ0", "0OJHgQhNX3g", "NXdTwcoGE_w", "7z-hxGUwXVo", "M5q5wr9Mgbw", "2NQrx-LqZrs", "iwVfE7QIWOs", "mfjSZy_Xoj8", "F0AT_7uVbeo", "ytPnieVGGBM", "PbhJgmkW4Wo", "nSAZNIx2_KU", "LGNBp_wREts", "ivpnISL_Pg0", "kKgIoroigLU", "BwVnPEMpou8", "lcvren5_H7E", "NNHgcEGDF5Q", "SoehsMvz5ME", "jyDqEr9usxw", "r2TwpNQzMZ0", "PuK6-UyZN-E", "JkMWoHjnaRw", "yebV29ZVvjI", "UyRkTdewXVo", "gKxTVj4H5qw", "5oS7wmQ5Is8", "XseKE6-d4iA", "bfOrNpH9n2k", "SAUeGtyLsrk", "qYNweeDHiyU", "NIwexiIjASA", "bmmQA8A-yUA", "4jb8J6dDdWs", "0kZIGB_dG80", "JxgmHe2NyeY", "uu1SV41IZ4Y", "4qVRBYAdLAo", "72AHKztZN44", "juo5G3t4qAo", "jmLid2x9eKg", "SIEaLBXr0rk", "my5wFNQpFO0", "TyT8i8YIcwI", "QM0sYbEQSkM", "Fa_V9fP2tpU", "hJzhyQeGSt4", "XBSvp43EQhA", "JnnaDNNb380", "E00dUXXQtoA", "g-NUz0pQC0I", "h-oVmlwC_IQ", "gbgML0CFZA8", "7FbcYYsMrcA", "6KyYcEIsy8w", "xW4F3OBbwSs", "I2JiVLt16Cc", "QxQhi9Ai4Bk", "W4V4pljtcHg", "wc3oTqXWzhA", "LvUVc8mclmU", "XKy76kZshdI", "u9DM5gPobOc", "wBr1iG06Tk4", "fD6V9l4gOGE", "a1d5aAx7R7w", "TApeW5USC1Y", "9H-66Pln5iE", "bWIKzMdKgYw", "J19kTbIHGBM", "e2hOLdVhp_0", "ohPa-SJZYVc", "npBxoV3Zjns", "RgUiCWSull8", "pRJAfq_ncU8", "MmisbcmHPSM", "A12bPpRpsoI", "v9FFYwWTxfI", "YDxdo0t7eqU", "fzQqZIjYz10", "TkZtig86Emc", "SBWdeQPNG8s", "44nf8_JOD94", "p3gqHqV_xI8", "Wf6zaKfa9v8", "OBOBath0_qc", "4Z_AxRAnoJ0", "jBDbIM4EmJA", "SHUi2ScKz-c", "LwQr3RExDO8", "niHbdOYAzOQ", "8K3di5HSz6Q", "bCzWajfLba8", "R8AMbDJVSWo", "5VmoufiE3bg", "RLQVlx8M7Hw", "qJaWxyUrKfg", "xvSkoD6IcgM", "zlq9ZdWTt30", "CiI76k5xJB8", "liQZgtLe_-c", "y4HOY700dGs", "84P9Cg1ehI0", "o1gBCd2NvIM", "oQvh_sJiX3E", "8aqqA6Hap_Q", "4wKsCamp4sk", "2IlnQCjZe1Y", "lmhlwcyx4P0", "GR9RFDPrHyY", "6jUMjRwKyOM", "sX6VAfICbcc", "yaE15-5Ebvs", "uUFOIIGicQA", "koDI8Al2sqU", "Lj340AVd-8k", "1mMFhPIpRP8", "6rioJ_5MoGk", "o3CzUTgbc3A", "EVgVdCrJGgc", "R8Y0B49saOg", "9JhYnX3r--8", "mzqbGLAGJHw", "NbFEgxve8bQ", "L1GYRZ2FXv8", "kyqfEncsj5o", "vDy09ygYG0g", "4KOnxMXGBaI", "5j7m5zuhejQ", "nFFiqwKCZvM", "TRVfJ6Lq66o", "m6hF_x4Tj2s", "-BG7OQqCmog", "xf3ma1XFt9Y", "H31ajtV1PY8", "dRsw0MflGyo", "sFz9wDi6ud8", "1kEGoA7CZyg", "aBKR-bdK-e4", "uU_84kNQ6xc", "IgT2O4bpAFQ", "eH9y-V9z4pw", "hS9PA6SuyyU", "h0H_H6RcuZA", "TE9XiVbWumQ", "2P4V_FyWWss", "XzBxAZNZndU", "UhCo2EKeqGA", "4aSEOhk9kBI", "Pu9DgOvwZ-w", "RC4NUi-VwLY", "0_0HJbNzGb8", "lFiOZqyymUY", "gFrS1lfvH7M", "pSyDANXG1k4", "AMPNvMFZCVo", "yNeprtMyAAg", "v9-sJt8mSx0", "fn1bNrGnjPY", "1vSVb4gJ2eU", "9EYqAhb8rF4", "_JtgR8GBsGk", "1TF22jOGsww", "qBMk41TCE28", "MRfU9RR95A4", "e7U6TacNfJ4", "bjUelAjEC6E", "ufQ6oX5qivI", "yffVCyzpM1g", "1KMcoJBMWE4", "R-EeF-wcYAU", "qQIsvIOQS8U", "3NUizzImhig", "ZrhZvqgtdYY", "1gGt1Mg_zSo", "VgPbBbn8WN4", "fiYRQ8ciHjk", "XYNGkSvFT8c", "UOLL4QSezLI", "djTIAg6g140", "Mezqq1AaBWE", "LrIW3HCjiAU", "1x6mGyozhlc", "4M6e4YsAKPA", "0tMoAt7PWZw", "GTkP4XoXFww", "IPaSD4sQOkg", "Kl-we5sEZCw", "ChsLmEpdNrI", "Wei9LZPEsnw", "V8UMaBw-lLs", "4qo0p2o0dCY", "mFpTKyPYpTc", "zDoUP16nMnI", "IjUPOLU5ZG4", "nf5fAIjaWWY", "-ui-LSQUnjo", "a-DdW6-NRCM", "9ufXYp9m-fA", "LjSoIPjjZow", "PGcssd6aqps", "hJNBdDiVqlU", "N46Z_2kz6UM", "Sk-dc9ybKuM", "dOe3n9eO6Lc", "KxK0_mKyWx8", "1gx-GTk3PbI", "-6KtwaavHUM", "oYfzXLDv-94", "2hZhgrfA3kY", "f3_q0dXOtu4", "_1pL1vraZN8", "Gu2ndZ2KNqg", "UFJ7j-uIkEc", "_M93HD0AyUU", "Yutzg2NLwcU", "NZLbTuBDhJg", "7rMgpExA4kM", "ZvD1viJFtZ0", "hqiVF6JMRZI", "KPefYbPnIWI", "STiFvf7tkd4", "sQubUgujFw8", "SK2EEiPyNJY", "xA9iS08lx80", "Al4wxXnLqNo", "EW1YC4eqZT8", "_88dCJWdscc", "G7ec7qCHwzc", "KJgu2htaLbk", "XYD4IEd3zP0", "wY63b5ZX-jA", "HuYJBQBB6II", "EmKl0-XwsyY", "m_QhY1aABsE", "NM8z7j7yUHE", "MdHPUwuH-Po", "ZrQFmiRJAZ0", "IwYx9hKWoGw", "b8K5zFZ-8k8", "bgHoQ_5dT2M", "JllVotEWslQ", "DeuY9jSYpr4", "hrv0sDACB7M", "62dQkCRZhP4", "rhLGh5bB01M", "lPI94zDfCbU", "cq9vJKatgys", "EAFZV7C4vQA", "vL2KoMNzGTo", "08rGK-9fIzM", "8M4hxKeoeOk", "Z-BGaLtxYbY", "FqQAjkZOBeY", "IzGJw6daRTw", "RQWpF2Gb-gU", "KN7RgLIeXRs", "aeDbYuJyXr8", "HHV-P4_Xp1E", "pJ7LK2C1V4Q", "jO5L1VYMhGA", "lt4OsgmUTGI", "x2xvx-7r3d0", "S8M10UsxMQQ", "J5h8hbNvHzE", "8ZQ0msyRL4U", "b0ll-MGDdpY", "qpp77n66bXc", "Pwuce8NGUgg", "ekFoKAvcwk8", "XeYv4MK_-uc", "-UlxHPIEVqA", "WZlZHZt2toY", "ETrBgAAtCCM", "4pKly2JojMw", "ihba9Lw0tv4", "klmBssEYkdU", "UxU8OCsNbYY", "wRAtVLgj-wU", "bQa6VKPoyFw", "DmBl9x1e3oU", "6bq2uUN-oSY", "2cxcGwDZNWQ", "VjRyuPpT0Es", "pjreplZXHMA", "BbWmmvPMSGI", "yigadoKHUVM", "VCAwwX3WiA0", "MJA-gn_OPFY", "SvPKFsCiMsw", "gpj4zuSWBjY", "tEJZ385YDFc", "nNixBuJWzC8", "lKfICYeSurc", "wpXCROJRnHQ", "bnusK6RfN5g", "qbSNMHInDUU", "9jedjT9u9DM", "Yv19c73TBPw", "DmH6LChe9II", "-kh5E5MFDlQ", "B3kARoXZyBk", "H_dHkQ8IOYQ", "a8hU-FGja5Q", "d05r9wFzKXg", "axIitwR5KOU", "irxJuxkqlxo", "DmfY6zAoZm4", "-ik-FMsSpAg", "mAKLU1NYLVY", "JHKB-BsssZM", "4cXrFI4lQtQ", "cE7_a-s03j4", "FxjE8OGchNU", "uzkD5SeuwzM", "h3DCdWyb0cc", "f7KSfjv4Oq0", "5TPvxcbhxQ4", "OvKr6loCciE", "pHJIhxZEoxg", "l3mId36NKdQ", "F4x-jVwdegU", "itBBsQRv0EU", "UnrtLi7YIY4", "gFH5qN1WgHg", "Yw0bbobF-Hk", "PKMQzkIiB0Y", "6Q-eFx90DM4", "WSiuXHkc_OI", "QAa2O_8wBUQ", "aobLGpIVNjc", "ZXmNfMRHzqA", "p9bg6itAUng", "q4DF3j4saCE", "8rAe8RuICYM", "K9w8I_YD29E", "d1japIhKU9I", "awBbfc46rZ0", "ZYiWIKnm8_A", "Ga1HnEqMWM8", "k3EDPeSV70A", "3pGu42-h3wc", "ecAHSt0Xneo", "lyN4jj3Vd1A", "syfBwAfdfWw", "2h4MQ8zA_Vg", "M3ofTRxZHqI", "h1mnlGOXxF8", "BV1r2NnCzU8", "d7Mcsgzl6ls", "IX-gQSyXSU4", "o3UkIagTVSQ", "QL0Trm8Avk0", "9AGaECt9j4g", "oAtYfF0_4-I", "UUcvG9fHDQ0", "s9EM8FaPiDI", "iVLvhjquEFE", "rBld_E249yY", "12zxTQJXfGw", "9M1nXwix9ns", "_PxZh0MWk2w", "tdhq-sBktSU", "c2j7XLgBWtE", "oZH_7pYJPTE", "-6s7-pKJO4I", "3PFffECpGA0", "rTYShJhX7MM", "T7PCuydUfxo", "SNLdYtBz6DM", "ufI5ldkQu9w", "h9Jea8XMIPM", "FGINdQGaVh0", "3i3phcAINjM", "dU5Mcv4eLUU", "zrlWkNc8aGA", "q_XicfmBIes", "X1EpyUb-srs", "P5d9omYAk40", "KYydVZRbl6M", "0imHWfBUYm4", "yPtsx0q_eV4", "4jiLAWxwmYo", "1l5rumM7zt0", "Flp058WH2-o", "YI9uI_x3Y-o", "VGLQGD93G8E", "l3M-WNQCWfM", "SpfsPi6E-0o", "_KGJXy4-1DI", "qGak0SVRFcs", "ygFsIqijUn8", "u-NTZ2rJHl8", "zWwI350l5PA", "WEm3EUdicDg", "Gx5qb1uHss4", "QoIRX37VZpo", "cQT33yu9pY8", "Mo_GBvQI_DI", "xx6ys7huDXg", "SW0YGA9d8y8", "woVJ4N5nl_s", "wUSDVGivd-8", "94UHCEmprCY", "qTej1CIiJc0", "EXIgjIBu4EU", "u-OmVr_fT4s", "xECXZ3tyONo", "8O5kX73OkIY", "khKv-8q7YmY", "xAcTmDO6NTI", "YYXdXT2l-Gg", "NEM31eVxWaY", "YZkyL-f-YXY", "JFq2mN5vwqg", "P6UiKU6RwjI", "ZqHizzWITuQ", "N-WK-6Nx-zI", "GeYcLGVzlgE", "6_QX12szXTM", "WmQPtk3Ybxs", "sGbixee041A", "AaQCNleIfUg", "PVYmpg-ULGA", "FMazVA-iZHw", "OwuX-dRylhU", "epgQ-sAr0l8", "mp638qFDa5I", "-paduPqrv54", "CM1PG1F-5qU", "N9S1gzv2Y2Y", "z9XZzWMMgRM", "aQuR-l_Ygd0", "6WZ6S-qmtqY", "eS6a6btDK8M", "6mtbp6rE1S0", "2SxXjN7WT90", "C9bxyuhmSjA", "1-TACMeF6pk", "Vrtbxvefnjs", "KOnB47PyZJw", "wQZBtWg_GJw", "RhVN3COuXdQ", "py5SK4mXwvM", "IjL5I8wWz6I", "OIT5JbgYlCU", "A61BPeIg41Q", "1RXIEIHhlMc", "V-0WMEjhjHg", "sbYX4Lur4Yc", "5WGSa1e2qo4", "KHArdQ7e7UY", "e2Hu-rTZ-ug", "uygjoGUsL-U", "YYnOnAgQkmw", "QdCAtXENxBc", "QsVg3gZEi6w", "DgGdlCOCK8s", "LV801eQzUQ0", "WKpQRXdvAqM", "cZx7Rr3iVvc", "dvtVLa4uOYc", "SYGaGN59Swo", "uMGR2UVAymo", "RVUy_bm4V1k", "-nXy9ym1juo", "PjvGGpCcNH8", "46ZXl-V4qwY", "lsO5gldWfZs", "DFRoMEE4K7I", "HQvRZSGKcOU", "wPy87nNmC_g", "jdz7QNDwFzY", "S_ynr-y2k5w", "TFP1rO5ujcU", "gOFN5cqM8D4", "uOkEle1X7fQ", "PbK15O1NF7U", "E9lrZnbnvGE", "3ms0jTQD5GA", "-sM_WxDpdqQ", "kD_2jvnlkAo", "IkfZPi03auM", "i-xMswfpnIo", "J00_lsKLI3U", "4ObrgYJs9Sc", "NVm4QTepNUQ", "PLui3SbLNNo", "_Hwcdnkrmxs", "UFMukGqAz7w", "H4uZlJoSO4Y", "PycGG69qljo", "HhaoPSo1-sE", "Y-DeZV9dYDs", "uFKcSL_IHgg", "lVeK9CpZ090", "tX8DnJojCuc", "iCkBphvuLKw", "ptnrNbK7wIs", "PXcUbyLNjMA", "9Y_Bg1kaUXo", "CsgovUpUFVo", "GlCCFm91yO8", "BgCDvhoSVx0", "UAsS0Mnp_tI", "TpUClVjegPc", "UesOwN1hT38", "z3gBd0t8zTY", "BgVtrRVItxg", "C84pmy5e4lE", "npLGg7Z4vO8", "Uovg8g5mjD4", "lYolzFtTl_E", "CyE3lqKhQ8Q", "U_tqB4IZvMk", "GtNNfMgjRkM", "aFPSj48Szj4", "_6ve5UzG4l0", "teERz_qPtzY", "hlUSShvOkk8", "_8MFDDlRkVs", "pcQqgb8ublU", "lTHpxqNfeIg", "Gkf_rdROyWw", "QYlzoplheEU", "a230qu0o4AI", "2o7wj2hWQNI", "4RDSaPzIpio", "U3frQdGaJiY", "93A1ryc-WW0", "ZPfVU77hZNM", "eGNbT56R7p8", "FAlQhwyW5pQ", "xsckp8r1-8c", "Rt0kp4VW1cI", "YXvSp6zTWY4", "k2C5TjS2sh4", "xbwR3Xfi6tY", "Bm9gl8Nec2A", "eaxT2JTpmqY", "QW9sxtRo9rI", "xjAXW7Npueo", "Xvg2b5l4Zj0", "LQ_dIJ1Hd6I", "S-lxU5CWiRY", "5AoktyNSz_A", "SKhH6yBNwMo", "JkMA9Jv7NEU", "NEkhY5LoW6s", "2m_UXlOoetg", "AvHoVAcapo8", "2GJ8r0FwdcE", "fHZjZ_5kCrQ", "UwF1nFRMuHI", "28f9bqklFeo", "SjnuJMII2HA", "zdxVaCXPdpY", "YrTTTxiuER8", "RdF02XCckMo", "jk9t0LLyA4w", "2CwPT0yQTFE", "teyUEXDKKbY", "rqErQ1sn74k", "ZROna9AlZd8", "G1hKzCkywM8", "lM02vNMRRB0", "PgvRvgClMxI", "x_tuPhtL2tA", "OMDRiSLpQuA", "s8HVH6rILcs", "wPwHsAP5tDA", "4HGA5ItahFo", "vtxVK3sbZ0o", "BDE9dERmaIY", "6KL2QZ91kAM", "xZvy2CnVIB4", "wwGN-rNZpV0", "iXco4toSZf4", "S3UN3s1ivHg", "ybcZQxpTrCs", "Ejwg63QtBAE", "3YTohytF9oE", "0xhzwDXfLds", "BTMjD7_evjE", "TlhHMVgiIeM", "rGDxkIXKQ3Q", "jRlOT_zSw3g", "HsKSAEf7h2s", "oHPy7r2RDVE", "JTXHRH_G2oU", "pHj-zUDbZ1g", "54KJQ-NUMgg", "y7pkbQJb3yo", "X86b7Km8S7o", "PeBl_zlhzm4", "4FTqjHMLskc", "3aNdX-8nNms", "of0xo2hQfqg", "fMK8F5Rb-1U", "YnwqdTWlGG4", "WspDHb7-HSo", "zfT81x-7_t0", "rFrtS8M7lOI", "41MJ6NtYSJ8", "1if8QYtg9Zk", "sP_nGy6d35Y", "s2JFnnE7osw", "uhoYIRJGnpg", "wpacThrQl4s", "jw_MlQ9VGyY", "1i4kJkFXBKw", "27JRVfZYAfM", "7OS44cPz6wA", "5gv1E6tpzdY", "4gBAjbeUrjU", "zqANjUGarAw", "hgxw7kO49xI", "APT-OhaWlu0", "CENDrJsXIp8", "Z4877fx2hwg", "XTcaAZYUJns", "7v-bshg-yOI", "oU6CWor8GPU", "CNVIcYTFJ80", "koUi-AgsowQ", "Hzi3PDz1AWU", "eHWb_ZBidF8", "c8hjhRqIwHE", "WRo3_p_V79c", "q8HTCO_lYmo", "9FHyfThGuvU", "82ws-7unro4", "Q9tSyGMnnqg", "mREzOsy0kO0", "ehUQNsyTKCc", "3_Q-yYfjeBM", "HWGXf2h5YLA", "sWFmukKFf7I", "TWkSKz7mdhY", "EnlHd5xTts4", "yhsxxdSiqOc", "1DYH5ud3zHo", "d_MJ60fzojE", "1df6YqigxH0", "PUAwDPUNyrs", "UJFkrJ_UQs8", "xPgPKRuFia4", "dmgMKbHyDFw", "UNR7dDJs6K4", "wOgf2nGHNC8", "cRxSWtxbeY0", "LC_D7D3SjhM", "sdtkVfFN2u0", "ZzqM6PgSIxM", "-YCGK33c0xs", "Skeiv9-ccso", "O3hnW7Kcp14", "thZRLWhUpFw", "DQfBn0Qc5TI", "G43vl3RKN5s", "I8OKU1hdTz8", "kYXEmbYYnfg", "pk-51SsU-vc", "yqU9z5uLvEM", "-EJKwJlWALw", "1Gic5nYiAjM", "Tllu3Qae9g0", "FcMBFs6Jsek", "AzDhek7wt6I", "Sq-y-wiZduE", "BsVhgta2WAo", "MjCcmSdraRI", "UVf2Yw7uFoE", "2tNp2vsxEzk", "zwsAf0do-yo", "Ai7cyDLA8D0", "uStFvcz9Or4", "uwfwBfrFHKU", "bC-BYhuFUtY", "b1LQSezKxnA", "-bYaFqubQDw", "cEjT2_NCeFc", "KG8DkeaNh5g", "sjvXX9EfgUg", "H5KG8MEpFSc", "Sdcbdxop8KA", "WuOBR7t1mG8", "9YlmLEb-IGI", "gLvkWpnzba8", "5cFhx_myB0Q", "DISjdfkSjc8", "YrE5RexFDPM", "aMNuQ1kyRGA", "twLqddk-VEw", "3l3TFieqIvk", "hymVP5KABE8", "P_JuQCiKWUc", "i0TD3IU0d6I", "1_s_srKtFZc", "psUjZ9lC3yw", "rvwBcU1jXWc", "M4YgVoUFI24", "R3RskGVhhGI", "ayHUiLJfxMQ", "Ej5J1qI0IWU", "j1CrIKtvRIk", "fbl-RbrU1-U", "xPe1jMuX32s", "bA6-VEVAzCE", "DC-Xn2C_L1U", "beW8pCezrdI", "3vl1hd9vlqA", "V38NoO2xiVw", "qkr07CutHrU", "Mho0M1Ns0Rw", "4AbyOqe7ggc", "s1fxZ-VWs2U", "PXaLc9AYIcg", "6FMKwCN2d5A", "-8LMML_EiMg", "AJtfMrwmtZU", "Hj75_aDCpfw", "PP-BVM-GRp0", "BL4DCEp7blY", "hK51upU5bkU", "ll-n_wUIzeA", "v7MYOpFONCU", "86Kg6rhO7DU", "DEA0_upu4sQ", "ZIgxsMtjE8Q", "CLPkVvI9yFg", "kWW6Sg08O2s", "QF3ZZeSoufE", "JoTbcO2Lr34", "fhdUNSUx7Ms", "0fYnGi4kN3g", "N6gaZ6gS_NM", "IMb-URlqV5Y", "uy8bQaW_Nnw", "qEVKD_Tz3vo", "BKio-LGWilM", "m1qh-R7phUA", "g1jRXVjFkMg", "8uhKTkS9HEw", "hVauyryAsXk", "7N561p3j8qc", "Jj2yAYfADmg", "hl8UAaQpC8k", "FcaEyW1fkm4", "nVyD6THcvDQ", "ZaPbP9DwBOE", "FwOTs4UxQS4", "OYvlznJ4IZQ", "NRmAXDWJVnU", "VGFpV3Qj4as", "DsKZpgoy830", "JcXKbUIebrU", "FnGP8NmWca4", "iv-5mZ_9CPY", "VSFuqMh4hus", "dvFDxwlT2e8", "htZRCE2GgIs", "1UufaK3pQMg", "ESBMgZHzfG0", "0cVuMHaYEHE", "C9gKWTzRukM", "C05XDMGaAn8", "9rpOO0Bh7i0", "lFIIMEe2Ht0", "dPGBpLoTww4", "KWHsjQth4Vo", "BWSaIgoY38k", "-p9ZIlQlhP4", "f2EnXSPqBDo", "VqUEvOgK5T8", "AWhL4ePuPFs", "SK9iyQJuFGg", "EjT28JuJMEw", "TdI6lwB5NWA", "p3Bu3yXqFEk", "IaVRCr5_lRY", "qrDzYwfc7js", "kWVLf7LX0zA", "cEeH5MiDK8I", "v1xF1L8ZS7s", "1Hw9evYugdI", "4rnJOqptoS8", "QD1F0rfrMUg", "j9xO4dMuS0U", "QYiddvAhffI", "bf8vRORhgjA", "cknFa4rEbZE", "qLaLmEW0hWg", "B3HhrYdzkiQ", "PR4FPvzSBiQ", "U_ZSFP0m3Mg", "ijy7ynTTMgY", "xsFIKrJ744c", "bCOgAXq57gs", "jYXdUMgygSM", "mPlSTrflPvI", "VPJW9X7Agsw", "RiH8UKQl5hc", "ZKtSwt8jO1U", "qw5ONnkBbvc", "Bqj2Txnjvfk", "-37ozGUIlEM", "WwDSi7r4iz8", "lOuZ5iavrhs", "jxBSciHtHXg", "5tabss1Iye0", "zSb9-HZ-G_o", "lrrnyt5QvG4", "n6tXwUv3ZQ4", "GT8jcriTUkQ", "eJW5cvevDZ0", "tjraYhZPYG0", "4faqpXz-cGE", "WtDCAbMeWSo", "V0Y1EvWrQVo", "zBPnvkrgNWo", "k7bFPUnuX18", "XT0XHSwYkHk", "y53XUF8v92Y", "5AvKRiNo2vY", "s9zrcV4rvEQ", "LWSAPYmeGmU", "MskEUh81MiI", "bVt3jAlhV8g", "B-ukcWJzXwc", "1XkbjQxA6BY", "y-ozRwFdBfg", "ckju3hKvhyo", "qseOJv8120A", "6KNpfrJc1Zs", "SrT_Fh9u17E", "N5jba2EuIIk", "KfCa34-IS0o", "GPXOW1pJJmc", "ZFWSJdAK3Ug", "AVmSFwlDZpQ", "wHDt4lUP-4k", "XeIsoGAz10U", "8G5Y5QW6GA8", "C7anqAm8naQ", "vBCFO1_GGjg", "1rPDyX9rDWo", "IVDejW4GN98", "Wg_jwgmwt-U", "fd05ykLX1Aw", "Yb3ZorUZ9Bc", "3HFKNofNJuo", "E-UClPvEFlQ", "v4LVd4ySo1I", "JqSndpR2eNU", "XmaQGYA_Yv8", "AFcTaLQ4bys", "6xAw7Ng80RQ", "0p70Eel5sHc", "BYHtzT5t-tU", "dy0ce911J_A", "bBKZ_e_0xGM", "EjVxlhaSx04", "iLwLaoHY9bw", "bvYUq6Ox0Hc", "GdwCg9f5tL4", "MZ9O8NXNA2k", "EMqgUlfChIk", "N6BJVM5tvnw", "6uCHVNdijp0", "hX3Ok_zPW4s", "GZQejHVQoYM", "tPwy8zb1A_s", "cRSS0VBV99c", "_354ufdgffQ", "0FXTGdSEVNQ", "q7aZpkQgbOc", "osuCr7zfyfc", "ppwqvcPJijU", "u7dsE3gCxAo", "uWWVNq5GHp4", "WRgW-GOHw9g", "Rh2YrIxk8bY", "0UCm9ID-Iz4", "zH00wZW0Ess", "jo4KFCJh310", "9ZWjpxI194c", "cHANzfyo5F0", "4WUz_VyP-Pk", "5BbUNIAPbK8", "Xye2rm5BEw4", "dFM-U8EsKlc", "C0msMWkqRW4", "MGKrKvwSd4M", "JBgmGJRhVes", "7ECA9W5N280", "cV70nR-OCWI", "6lpPtTVXVxw", "IQHQVOF3Mls", "jdC0dFKUMZA", "FWu2rkffYvg", "4wCFw8HoSWM", "e410afWOESI", "0FAp6IDv_xY", "PwZImDdT37g", "uaperazqrEU", "XugrSWfNO9Y", "zI41fvKd3yg", "4jTooqnFmtE", "uqvOlViKfts", "NlorbVOgol0", "OcQzM5SPUfY", "ru3z_jak7D8", "tavz1qERCZE", "ashhJ4WR1BQ", "MRV8mFWwtS4", "r8-EMErijvM", "aZ-waGDrUsk", "1fJcHfiKR4o", "GoIIrsseHrU", "AOC1dZKzcz8", "tZRnX583Ws4", "WLi25OB3Q4c", "WQWkv-LFp6o", "R5SMphkmTj8", "4ncoPQw3OjY", "ucdaEjd1Y4A", "faopSaHTwbI", "asbbhyHBSKU", "mS5eEhLN57s", "rn1mjuVXNEI", "KT-d8MlT27A", "s5CLtBaRIwY", "7yDmGnA8Hw0", "aa2Fmr7sKIA", "nSbvlktToSY", "zWxbeAgBPmA", "XkHJyqZqjxE", "xMcOUyyk9Hk", "HyRjuPP9S3o", "9uZ-jeZS8d0", "mmkCS5eA4f8", "0l5ftgEQUjM", "O7O-3NeXm9g", "hYo64qPEGw8", "qMFpOcLroOg", "BSF9s0gbJ2M", "LKvjIsyYng8", "vyC0A_zy9bk", "G3XBMG96-Qk", "7DKFvrWDHMM", "EcYeWnFj7S4", "AAh4SAfdln0", "NU_GtFD6UWQ", "drXLCci9H5Y", "4hIKndS8D5o", "Zp1ygNCASNw", "8sGIsjEwYOQ", "juUTjsa-bmE", "rahtTTARC_c", "C3iI6S7TuCA", "-TKwfCk5DWk", "aefO0N_DFWw", "8Y4nk5yElGk", "WOKYgWlXwk0", "6G_OAbVtpzE", "XHu8j9_VYck", "f4LeLdgS3W8", "NApuFNz3VuE", "cYbZpkQDPlQ", "yLHPLWDyHio", "8KyNBFGU7MI", "YuScm1QMOjg", "hUDYd8LAvD8", "C-jcHshtHrE", "jmFH303onZI", "iaeBnYLNXgQ", "SPMBwSH3e58", "CDg0WCw7HGo", "HUqy-OQvVtI", "_uk_6vfqwTA", "Hs_JMydrxZM", "ew8TMtgb0Qw", "yjW2RSKAu3g", "_wqotalyMes", "2JJTWMRo4RM", "Q4kQ8P7MpYM", "54m5bETBTQY", "-WUhB9DLrqo", "Al_k9hmd4ws", "mr9X6Fiic-s", "GlKU_I5g8Lk", "eG9hBIweaOE", "CiXFzjnxor0", "Ub4jHJRleUc", "pEgRA0CtDSo", "yCjX3wLdf2g", "K0uzBJzx7lk", "5sn_Gxdox3g", "6hfy22pa_Go", "oucL2T9CO3E", "ptmtIPtGQvU", "2stn0lQQ74E", "xYxzgAEfTto", "lBRQ-iHlBDg", "6UaUi5fBmJc", "LxmPXk-OfV8", "Wuz0sHeVpx8", "TYLKPb9ciw0", "e-AQK_xsaFE", "qCYbS9GrnKE", "XI756pOc_ao", "yLpazWpIb4w", "nU21rCWkuJw", "_DfTAJ3XZpA", "sL47TQLz4gQ", "jEwV5t4fKkE", "NEBGjCC97CU", "lC9ohbOj1h0", "i5NPnPE58qs", "OWyWf23LpLc", "V5-PvaLjA-4", "b4BJjzqCLKY", "_6YTzpkcI70", "I3ZCXH8GO5Q", "2dWoTya7_58", "gAOFVEwftjQ", "jEV-_r5WPvA", "hC11WRkZPPs", "rSnNeJUedtI", "lHCtqeP5rSc", "Xvfg2Of8__0", "PYK0ad5Uynk", "dHB7ZPmyrOI", "m7rmwbo9heU", "dAj_ikIbpaw", "Tp_qNwmiqfI", "878YBkGKQfA", "SwUvObWlRlc", "J8IYYZr_wfM", "idnQGR9L8OQ", "XpWpi_Jitt8", "y_eGi4jVYUw", "NEVVfGudNfw", "hgo2f61Irb8", "7OUfHzwTKXQ", "1XYfRKv2MCE", "g3vqnxMs-Wc", "LhcnWJtB2jM", "WelR3BTKzGo", "blyJa20TMVM", "XUxaBltidSA", "RbMyAQVjyN4", "LEF1nkKYeVg", "b5nd9RGFKjM", "0Sx9wOtlARU", "Ya16OesBA0o", "4sUcuv68zFU", "kOeX5kuW2gQ", "QpF6tQaq1hI", "Jiu-klwqdDM", "gqK2RGBhel8", "RXxlxcwi7Dw", "k-JLGXJU9fY", "O5R66tndNm0", "21zTt1TsCa4", "_bf-fUEjBNI", "MyXinE94nyY", "zXDSsmobF2I", "mF-xfgqIXeg", "jJLSWygShfc", "ThwuT3_AG6w", "AjWYQPaw-U0", "B_9w6my2Rws", "oqSk-MqDb3c", "oL-AOAOSTFw", "2QKARCPO3sA", "0IOsk2Vlc4o", "g7EFA2VE-Ps", "XzdaSX3u30s", "UFQqyV1IQh0", "YFjd-zI42U8", "YIBEoYEkHJo", "FzudXas5CEA", "9lcTiFarDPs", "HvPW2ue0_pI", "9AZ2qbQGje4", "fQk_sEQdW0w", "oN5lkasJ7Tw", "qPmKsGgRN4c", "WlBXjReBZh8", "lGdhI2gTVdM", "Dyf6b9qdqzs", "ZQvfHyfgBtA", "zYMzE4xnjtc", "u04GC9R2kgc", "TXuitWCNNMU", "x70VqMrXrbs", "1p91gmhlPNo", "ar_EVYA69cI", "DKF5dKo_r_Y", "Z_V_Qd89Jg8", "ZSkB3zrU8T4", "JfOMZfxH4ME", "zsmLoJRgngs", "SiOSbHo2dvk", "2PlBnZ7rAQo", "lrCwmpjR77U", "4YT0WcI7hjk", "WiRYvqXoHM0", "nSy_N7JEp7o", "KZLygdpg3LU", "qeGQgPQsJJI", "Vdb9IndsSXk", "XkvlY7qDXcU", "oF_OAe-9lHk", "hoN7V12o024", "zWlePUUnm1o", "NHLDMYQAmow", "oY_CIX65kgw", "4Q_-W0DAx6U", "NPMkU0bN5X0", "1DEmFZvZ4AY", "SXFgJ-Q3ZqQ", "c5rWB_fS5ao", "W16WhFwtdoA", "U_9UxFxOVYE", "j-IacGailU8", "GWF1L1mYbP0", "AfCifEtTL3M", "MN1Vwq15UR4", "qezJ3Ite28I", "-RKhtGl35Dc", "GCtqKRXoTnU", "AUSwJ_dWETY", "YcSmLxWKYuU", "XxgIEeIBCFo", "9hqFwNuF6FM", "PwmHIEt9fZQ", "nEqaWJQp7Ds", "VRlqw44xWt0", "V6F9h12eUr8", "Vfur1cK3rIs", "ACOpYGURG30", "HZH-EYlPt0s", "dtxrtKd-Vao", "KhGun0kEv48", "9WH4JBqNqv8", "7D7gnOxAgBI", "YV_94RjG7bo", "4TdMr4EpMMA", "xvPH4wbG2e4", "5xr-cC_4RCE", "RaQhZ9fKkWs", "ydL8Iyyxwgc", "fpwwiuddko8", "QSIMd-NjZ04", "MUhhzxLDurI", "ujF4wUaQLiQ", "fHkwjEa_xEo", "D8Q-ag4dLWM", "92W2MWq2rxo", "hPge9W1emZI", "krSWcXDMewI", "xTDVz4y6f5Q", "81PJz-3iFTc", "u1QYGZnsv3A", "F9DTdOGva4Q", "jFtSgn-ZXgA", "nvP7hE19gBs", "vBG621XEegk", "rW9H1BhBBTw", "9AkqC17uf78", "OLa8DQkKlyU", "dPgx9EH0e7g", "PU5PSjadch4", "SY-qYA_aotQ", "7Ifb_Jb24KA", "u1ojNgPCHGs", "6WPapF9dQr0", "5gy3Ymax85o", "c3_35hv8uME", "-gdILnzYZEg", "Y_nr6AwAsSQ", "DAOFpgocfrg", "6OmJ3sKP2Rg", "Ctn4xMXg4-A", "XPi1dvJlA-w", "1QwyMWM0Jjg", "5uu7jk5jajI", "b5yGhEYaZzk", "WBIdXKWa0WY", "aJMjSjoQY00", "0QidJypaU2M", "WwBkiyhp3rQ", "pthRJjGZJTU", "9Pd_9RuUY8U", "5TZtQAYOtnA", "WhvdJ_IjvVc", "G4rlHY27sa0", "1uNpjqH-mQQ", "5H-UoFsohGM", "BU5m7APWnb8", "NHH8ENlkMC0", "rn_YodiJO6k", "EaLlFrlhT98", "jHeNTYivwOw", "DSn-JBc2xq4", "OM9uMJWtNww", "vV8IAOojoAA", "hrF3jVppfr4", "xmyuJZH3RAc", "CoOibAstPJ4", "286SGzpUx9o", "XtQMytORBmM", "mvdhOEsCkAg", "1x6n4ZqOFB4", "iqlH4okiQqg", "lMZun9SHv1s", "fqb9MfRqK9I", "_tE4phLuGyA", "9HCTB4aZGTg", "c-aEBxGPLB0", "RSJDDrYbEUc", "H_5u_DVTbbU", "7vEyVcYUIzY", "gB1F9G0JXOo", "8fcy0_FQ_OA", "97PeSdLarns", "AmGSEH7QcDg", "1mwNrMD0Lm0", "FiW69KIsQz0", "FD2OiJPSGx0", "jqEHDaKFZ_w", "BASYwlGqXbc", "Cbx75zuP6Vk", "gOKv6NDkfuE", "_9kMkJrBvX8", "gDge_Zgrm8A", "Fcn5RxljQLo", "63ryvQ4sGkw", "tuPG_Qz3pyE", "kpaga_3BWfQ", "FCUiYknWiX0", "KZ0pWiw5QOU", "vNT44epTvN8", "I2Mj3I9UpY4", "QBGX9QirWaU", "nTqe8t1_weo", "1oDGP5jRd8A", "FahVngvlhoY", "H_fa03mR2sQ", "XtTdoJqWWEk", "2z36dAwcKqA", "p5SygzMSLhM", "wVjMFU11hVA", "Qv3mcJhSFKM", "uRdwPe3uhDQ", "XB4VHfV0hQY", "DjVkzpJ5diE", "a0Zif2aG0gM", "lZdoUgNTE8E", "QmwKLJDknF4", "2pTZvRoCulU", "xCBOiaJEoFw", "IvwelqA4tLM", "6dSIf-o6chc", "VnjnltTR5JA", "Xx8pLcXnIKM", "FfPsnY8VfTc", "16VWfHOCS-0", "y6EWpUgiHIA", "qtNfKxgl0BU", "Q4xf-ca0GWQ", "ZCYDe0mU2Iw", "wVd836vHl6s", "L6S5JlEIpSY", "m1IUGdK7X0U", "xwWQu8rSqjQ", "ah8U0-fV6k8", "ReDdg-tnuYM", "utvVUNrn5X8", "UqwSahByqfQ", "Dpu3XoY3wQw", "bxIV_itPWkU", "4p68-lMrjYU", "ejwfAjdVUCM", "iXyGghipzM8", "rWH4XGO1KSU", "tzBmrpFNcH4", "8ibgkwouP4g", "GbN9vLuiP0E", "q-02rfaRvRI", "CzrpBPqO_aE", "nrdNdprcYls", "CBztG84NoP4", "8x7ngI8rv5c", "My4bDJ6WeuY", "j3RbnsHTuVw", "KobtHTLEeKM", "TedBqinR04o", "ghUws0yF3vw", "CXhcOq3DwlQ", "nJBxiZoDSYg", "gwAGNUfmhzs", "0-YASrz7lNI", "iKJ555L4vUI", "3vyKTAk7zSw", "gj6fRKeHUXA", "LufR6O11PHQ", "VLoWbDoskpE", "UzcDHsoef7k", "HTw84EVIhvY", "WDvU3qnaIYA", "cRrtIildKDM", "ZUwOucz2w20", "NMuVPnIGOUU", "oj_mGjxuItU", "WvVfvESiyOU", "WA0scznjjW4", "Nq-SyxUvXNk", "RqcisWDyMos", "g4OwUsVp9jI", "MB7YIYER9hk", "J6Flw0Hyd_A", "kX9nB5ld4gQ", "jbkFb75XuJo", "gthG0_KqniY", "a6A5S30I97U", "7rXQALFgV_A", "WLYKTWPdwZU", "aCo1-mBYYkg", "xFsJYuyEgCY", "vrwM8NQnC48", "OS8Idc74bng", "FZIlw72pg-w", "GDbYUAjCx3U", "yx0HgMXnF1M", "KFnZHaqMopE", "DkfG9fn7pv4", "9-WYOK90KNo", "DUSlRoFHL1M", "_UbyX_eXSow", "l8WqyB5PT_w", "Ojsi2H-p21c", "iOG6L4hoUBU", "8TWhFFdR1EE", "LFMKLTFhh2A", "zAx57syiqxA", "lxjJRWYulr8", "mzWqFyhMGhw", "SNuaxgAGq9k", "MYXMOBfhf-U", "1iG1sXaYhwY", "0QrZj_HSSag", "mJ7KaMmvzgI", "jsZvBd-34KA", "HYadvDXnSJs", "uR1jvZbtH7M", "oIQf0FomaJ8", "RZVB5rDVxBg", "LdCw5Pd8Qvc", "D_Iutn8O4yc", "J8yvD7xLgqA", "ajvQSoZiB8Q", "qzWouPxhezo", "5WuYzce1wz0", "5eb6lchG2Sw", "_5FO6ykDdkg", "AoBTWF3HRQ4", "UyrLgVPA-88", "lhz7rwfIKqg", "MXTGuouIDKs", "axZFQ68Du-8", "jOgTweRkbw8", "5ZEec33KzlI", "GmU5imPFf9o", "ifQv9ACk5CI", "Ghr9l6PNMtM", "d_ttuEySXTc", "7XrSj4sPPP8", "x5OtCngO5A4", "ru0_t4H1TLA", "8RXRucOWDJA", "Gj5wIHelvwA", "GRde7WGScrM", "PjF2QCpYw_s", "SfMO6GH1Vqw", "s7DbVTkaXn0", "jbu_PgQKbg0", "QRFFFjq1MS8", "ZeP7zwmu08k", "40I4oB9MEQ0", "DiQREN5YOq4", "u0EN8itpQZo", "ut2KhcNtnm8", "StLkSt92Vhs", "HfCYhJ8Qkfk", "63OqRL74KWc", "bsRtytiMpLs", "VAL5am0iq1w", "YIhzUnvi7Fw", "-e1_QhJ1EhQ", "TQA4iYEU1Ew", "n6ISdRkS37I", "rTiL9R_Q5PA", "sd8ivhpjI6g", "wXxrmussq4E", "cy5dANxZd-8", "h-pNWy7v_qc", "6_912xUVn5Y", "9aaE5BkD0Ls", "UAG_FBZJVJ8", "CbHeh7qwils", "q09k1EHNBHA", "-Wnp-OOZB34", "-7xvqQeoA8c", "BlOoO_NYlvg", "ScRetH9wxPk", "rVlhMGQgDkY", "4o0FZalxIYw", "7fYpWQq8Hb0", "FVzdkDLyuHY", "GZTex9XosDU", "X23W_8uJHjk", "jPOjDNiC95I", "cUnaTIYZjZg", "XxQiY1qKv9Y", "BjqmgEF7F04", "V6cHlaTVHoU", "_TXzYVkSYuc", "NK88iwkvjfM", "V7zVJWLXUsM", "CBSsL4u_nng", "_xgn0niHD-E", "WW62RWXMlTc", "5qHYqtQfYa4", "4T10LmwKxfI", "Rug_tOo7hdM", "1z6BBH4jL7c", "SQwT8ha1294", "aoqVGdmVlKk", "G-Fg7l7G1zw", "QZvaw9Nduvk", "fe3Mo_IzmT8", "veE0E79dEEc", "hLkEX19qD3E", "96qy6Ljl89Y", "i3cZCfTy0bA", "jlvY5r6lPX8", "tdKLnXONcFs", "tAIeAweFUBA", "Uv7td6UxBXQ", "LMGOrSDgdck", "P6savBixoYA", "O6BTpgIZk9o", "e5UlrlQwFvU", "dtEfBKJZrVQ", "BuFXa1378lA", "HDMYFNbRCqQ", "oLTaMPjAgLo", "m0PIfy8xFhE", "hZhiwppXdJ8", "CgUCLkBwAak", "By0zKAd9Sx8", "Qd-whbRDMvA", "zfXLkIwVbHc", "bvxCUClvB5E", "yWhu42S9yA4", "EpsiSc-IT4A", "P3VLdLgR4A4", "sT_-Vn6tZgA", "gxLzB5gb_3M", "mu5IoxwU6aI", "UAxFjiviZlc", "DR6uQPsAY9w", "3-nyl8AN1Dc", "85MK2GDkoxo", "d5uP3wjc3Tc", "438fndL6pJ0", "GnJsI6vq_9Y", "xTmgJ8-HCtI", "1TlOcjJodHw", "CeOOVTvj5QE", "fokk0u5Yr5Y", "G7EBiaDe_K0", "dkVNZY8hoR8", "r4fT1BeZDEM", "ObtS79k2NM4", "aLH0dIJeR5U", "AupFEoIkSAE", "COr4zRFX0Gw", "1Z7saW4wwSk", "28KtMUVkJuw", "iE-at9RW3VI", "LA9mX6uxgvM", "iaxkOJZxzQM", "TYhdezzyqPo", "34YkSVRW_SA", "mDGVc3Sc_H4", "0GZ32821pf8", "PVD1LNDxOnc", "rSmkCdmL3KE", "EMi3PCW23yQ", "P0xwiM-azU0", "2q91vTvc7YE", "zF5KPjyQs-M", "MVKLi_d9_L4", "SpeDK1TPbew", "DRUKZibTvlk", "9bRmg6krzeU", "My_j5ImBHek", "a4ap0R_OQIE", "R6S-b_k-ZKY", "W7ELWEKaMt8", "U-ZS68L2hRc", "vehYE1DfkZg", "QQzBACyX12M", "gZvGLn7nyYU", "Qyb5KZC7d6s", "y9k-U9AuDeM", "YJBhWVDArLo", "2tdnqZgKa0E", "tZr7lTJPQu8", "u1lU64CG8p8", "O0sPnYH6zMc", "_9xJ8mxsHfs", "7f_v6uP4qLw", "9dmu2sm0CJM", "2r8WSnF1ee8", "1Tc7i1_sZmk", "xairCL9m9ec", "KGH1mXZpY_k", "R5jCyP2Jcjc", "D-kIlMq3qmI", "WsoNMjy2TnU", "H3ZnouWQvvA", "9lYB6pGgaPY", "9gyVHI5MTD0", "GL0Pt6IboGk", "U6HjohDNRqk", "i7Din__CZQk", "UsHuDB8qNT0", "pyg-DYm7b0A", "IjxAEPh4DVM", "5yRUcbJ7EvM", "Ij-BvQEu1LI", "DgJS2tQPGKQ", "zaCuGBWxAHE", "MqO9XIvLeto", "UIPLQituTgQ", "OjShmC6Y_is", "ZzOM5HFBtEQ", "mVgFOEuN-10", "T1Qqy87vt8g", "SCvuYFpTuIA", "KJ4G1RtoKyI", "LDSLGI3Wa04", "NA9pQdRN3F4", "2W0T2qGZ9Dc", "rDZSIrsMi6E", "s3ii48qYBxA", "jgcXclSXnVo", "PeCBpI1hT2Q", "avg65oY7sj4", "SkB-eRCzWIU", "948AadKDg5E", "5XgBd6rjuDQ", "16d2lHc0Pe8", "RKSzAr4P9zA", "uulkiWNjpj0", "5-_bUD6oMok", "1tEtKMhoBIg", "AO0jzD1hpXc", "T_SF2WuHvgg", "7fs1i7TAMck", "QlWKQAh7MKc", "AOGPtRYaYPA", "uwAqEzhyjtw", "oxuRxtrO2Ag", "Xhd7uh_keio", "AMKv44oAwEs", "sWbUDq4S6Y8", "nR6AOqk1YnQ", "FXu428tLhdE", "dzHscTzpAME", "p3QkwI4-cLg", "n0Cjk23QcZg", "JE6PtW4grWE", "XST3oQUoJSE", "3Brr8QRxr2k", "6Kzr94YGiwE", "cd1OJjUMkMc", "VaA9-sRZo_A", "xr7C8YHWoj8", "i_5XdNf8Ssw", "CvateNjBjrc", "w3pTGZDKqwk", "37Mze7bISF8", "sH7gyg9ket4", "WwA_7QyqtGI", "ZFjUMv-7kqY", "gZr6-fgroBw", "khSJX44_s1Y", "HU71WwY-G9I", "j1SgIoROS7s", "PVzR8v4ifHs", "yNB2hFFMajY", "89eXmPfDimg", "2Zg4g3LZdWY", "whD42TK0dYw", "bAQoaOs4rHI", "HkfO1alRWoM", "AiAGuRxEEmQ", "8KfjoLx9LyE", "qmDPEZ9aBLg", "haK2TnmVoT0", "AhgtB-TqS3w", "A7n1KKxocSw", "XJJuj1frLSI", "Dyl5NqrT5P8", "hsGWV08fv2g", "F6dEKdUMVJc", "aROzzEIlM94", "_YJjA5uBGig", "j_8jAq17cSM", "nVbhmfKN9kY", "yHtBhMrKnOk", "VK4tPNmOcUI", "tDd0dDgP1OI", "9xNr4BCuzps", "Ez1-pdElb8w", "5WSKRA0v3D4", "NGziXjCfTmM", "S3WERANpWcI", "dWWhfA1uiaY", "6A3L8jChSfU", "Y_7sgIGuTFo", "KEfzk_sj_zc", "H4XL8s1BEdk", "xBLVPuNstC0", "gL2Awc8MwXc", "_Y_Wvucbujk", "wz7TtXaCyKs", "ZqgyS9l0-_c", "yCsgoLc_fzI", "HD3k1hgbUXQ", "jIMihpDmBpY", "IcrBqCFLHIY", "KENQs177TIY", "5THOUSvpCKk", "2Vrhk5OjBP8", "c_e1wITe_ig", "K-Fc08X56R0", "n5xXdF3fCSg", "pXoZQsZP2PY", "6--w6aAdqI4", "xZB0VxzLrs8", "VUgajGv4Aok", "HAMc7NhJ6Hw", "1oT8WRbwnXE", "U2g1H5wPmUE", "2oDXbFcHliM", "q-_7y0WUnW4", "BickMFHAZR0", "qz0aGYrrlhU", "Z4pCqK-V_Wo", "gT0Lh1eYk78", "1PnVor36_40", "wRNinF7YQqQ", "D3iEE29ZXRM", "-8ORfgUa8ow", "tfzGsCxutWk", "J35jug1uHzE", "i1FeOOhNnwU", "lSZ9jKHs4oA", "cZHp-Oozg6I", "qKoajPPWpmo", "Dfj0B6aL7Hs", "Kuw8GJEVH0I", "vlDAQXqOqKo", "kMT54MPz9oE", "D-h8L5hgW-w", "9XodQrV0egs", "DHGhFJZLKMs", "ylbPGQh1mks", "3DqCMBJiSzE", "Je92BEAZh00", "NqlrVgVYE8k", "-Np_WMM2lLg", "uXIsTszCjZE", "uYeYUqahVx8", "JX63Wyikl-0", "OakpapcyYEc", "ftv-Bz5IEgA", "dwj2ahYnci4", "-PvjOQuiTVM", "wTuW84FreAw", "QskDvSopAA4", "bltDXW4mYLM", "FXQkEsIExwg", "bSvt_8lpgos", "CW5pIEzyeh0", "UCHMTooaudQ", "5ACTYOz2Dcs", "XpevOKRFHIw", "ymgGUi0ItAM", "o0ueenNzBsg", "ajKJoHMqojo", "1J2oCsPQcJw", "G1JBaI3uLeM", "25S2eO9DPsw", "TQAWiaVv29M", "vlAn8p6UFjk", "EbSCkVXGz0A", "fByOLyHnd20", "fLwHJu2eGbs", "-5gz6imnITc", "IPkykBGu07o", "Mh8-vDc_44o", "XnRrTh-Okg8", "Ph6buc4aKew", "__6AKQFsxCk", "zSvLmFP0a-U", "rpqvy64SWwk", "dIAnor5MBSg", "4DKkueqcKmQ", "ubsBdWj2SoI", "u2mY4eFAetA", "u0C7VHX_f44", "emZikE8v84E", "aNjI4bpVfVY", "Cxef5VFmKlE", "4nvhVv5uNI0", "l0K00gRerw8", "tkqE8FxwWTU", "xirHlZaxzAQ", "D8nWf1Hk41k", "YH4M_iFU2k0", "3z2cnU8o6IA", "EICpmw1avR4", "P1IJsIqFP6A", "pObRgmiHZ88", "TLWUy_vgHsI", "7fkJl5tPjCs", "idhDz9miZ3w", "Wcs2PFz5q6g", "ObA4ne4TVsE", "KZ2cy_wsb9Y", "GjXY-l1EnhQ", "HXuj7wAt7u8", "vN1aRN5bQQ0", "EyC5yJVLlUM", "lBAfetmyqXQ", "EmUmOfl1WEs", "FSZyzhi8C9o", "-moW9jvvMr4", "wr6fQ4KpbRM", "vTaKV08ql9E", "8ZRu3K2DFE8", "TalIDzwr2Ps", "auFN0xXbDCw", "-vVOOB3Bglk", "AxClpbA6VB8", "zcdRIwcLXk0", "CxcN0Tq2gkM", "tO6HqJks3H8", "dcVAfLCF8og", "T4CrDEHdy50", "ni4U3pZoR14", "HNGbaoJ8Ki8", "Nyy1XMRDSrg", "We2dybc6TY4", "BVwm5C_ODDE", "nBrL0lFPI-g", "XXtQ42gEj1o", "2InyoyZanZ4", "eikiGGSFofg", "hZ8JLaxBLjM", "-4Hj-MP9vKM", "pBscvbtDFkI", "PItbvcEx6vI", "PxMYts5KCv8", "YnwqRKb7K1A", "YRtItrgCc-U", "3DAi3IkVdZI", "cUTevgY6ax4", "3Gioc3QAJ7s", "WSbwl3MwXvw", "W5SSv4dm5Rs", "zY6ZDJl_aqg", "AR1cSKxxSmU", "aXGKRW2Chtw", "1pMelD21sAY", "KtK9VGTvMfg", "72fg0n3FrYg", "ncUTfpRvykU", "KQlg928f6GI", "uIFaKFjQSUM", "ZDSf4itbZ0Q", "nqza3fcX1vo", "f3tcourbqQs", "n4GpwCrFWYM", "6erx-iRIC-8", "cEqAKzngMX4", "4gEoh3sk2AE", "CTuGXdyrWUo", "C8PUlZrngZQ", "DiI-1PF_Mr0", "BzrFfUvRlTU", "vsyjxp7G9Ic", "lBxBCHlf6IY", "QWiouzzCUcs", "Fi3zmrDjF6E", "epnjX9gn5kY", "ZGUV4S7drmk", "ALMYkPqgTUM", "Oaq4OPx4xlI", "s8dQ2hnYqp0", "-9Osn7JsP1Y", "XSczWjWOQBI", "m22Q6Dn_Sas", "coxanY_MmZI", "o9R79a4s-BI", "ZHm1aKxAsIs"];

function normalizeVector(vec) {
    let mag = getMagnitude(vec);
    if (mag === 0) return vec;
    
    let result = new Array(vec.length);
    for (let i = 0; i < vec.length; i++) {
        result[i] = vec[i] / mag;
    }
    return result;
}

function generateBaseVector() {
    return normalizeVector(Array.from({length: DIMENSIONS}, () => (Math.random() * 2) - 1));
}

function addNoise(vec, amount = 0.2) {
    return normalizeVector(vec.map(val => val + ((Math.random() * 2 - 1) * amount)));
}

function dotProduct(vecA, vecB) { 
    let sum = 0;
    for (let i = 0; i < vecA.length; i++) {
        sum += vecA[i] * vecB[i];
    }
    return sum; 
}

function getMagnitude(vec) { 
    let sum = 0;
    for (let i = 0; i < vec.length; i++) {
        sum += vec[i] * vec[i];
    }
    return Math.sqrt(sum); 
}

function calculateVs() {
    if (swipeHistory.length < 2) return 5.0; 
    let totalTime = 0;
    for(let i=1; i < swipeHistory.length; i++) { totalTime += (swipeHistory[i] - swipeHistory[i-1]); }
    return (totalTime / (swipeHistory.length - 1)) / 1000; 
}

let userVector = normalizeVector(
    Array.from({ length: DIMENSIONS }, () => (Math.random() * 0.2) - 0.1)
);

const CATEGORIES = {
    "Comedy": generateBaseVector(), "Knowledge": generateBaseVector(), "Lifestyle": generateBaseVector(),
    "Action": generateBaseVector(), "Creation": generateBaseVector(), "Commentary" : generateBaseVector(),
    "Narrative" : generateBaseVector(), "Wellness" : generateBaseVector()
};

let catKeys = Object.keys(CATEGORIES);
let videoDatabase = []; 

for(let i=0; i < yt_ids.length; i++) {
    let cat = catKeys[i % catKeys.length]; 
    
    videoDatabase.push({
        id: i, 
        yt_id: yt_ids[i],
        title: `${cat} discovery clip #${i + 1}`,
        category: cat,
        vector: addNoise(CATEGORIES[cat], 0.3), 
        seen: false
    });
}

console.log(`Successfully loaded ${videoDatabase.length} videos into the algorithm!`);
const uiYtPlayer = document.getElementById('yt-player');
const uiVideoInfo = document.getElementById('video-info');
const uiVideoCat = document.getElementById('video-cat');
let unseenIndices = Array.from({ length: videoDatabase.length }, (_, i) => i);
function processSwipe(Vw) {
    if (currentVideoIndex === -1) return false;

    let now = Date.now();
    swipeHistory.push(now);
    if (swipeHistory.length > 10) swipeHistory.shift();

    let Vs = calculateVs();
    let video = videoDatabase[currentVideoIndex];
    let Vi = video.vector;
    let currentAffinity = dotProduct(userVector, Vi);
    let affinities = catKeys.map(cat => ({
        name: cat,
        score: dotProduct(userVector, CATEGORIES[cat])
    }));
    affinities.sort((a, b) => b.score - a.score);
    
    let bubbleRisk = (affinities[0].score - affinities[1].score) * 100;
    if (Vw < 3.0) {
        ALPHA = 35; 
    } else if (Vw >= 10.0) {
        ALPHA = 8;
    } else {
        ALPHA = 15;
    }

    let diffVector = userVector.map((u, i) => u - Vi[i]);
    let Rh = getMagnitude(diffVector.map(val => Math.tanh(val))) * Vw;
    let isRabbitHole = Rh > RH_THRESHOLD;

    console.group(`%cAlgorithm Analysis: Video #${video.id} `, 'background: #111; color: #00ffcc; font-weight: bold; padding: 4px;');
    console.log(`%cWatch Time: %c${Vw.toFixed(2)}s`, 'color: #888', 'color: #fff; font-weight: bold');
    console.log(`%cCurrent Match: %c${(currentAffinity * 100).toFixed(1)}%`, 'color: #888', 'color: #ff0050; font-weight: bold');
    console.log(`%cTop Interest: %c${affinities[0].name} (${(affinities[0].score * 100).toFixed(1)}%)`, 'color: #888', 'color: #00ffcc');
    console.log(`%cBubble Risk: %c${bubbleRisk.toFixed(1)}%`, 'color: #888', `color: ${bubbleRisk > 50 ? '#ff0050' : '#aaa'}`);
    console.log(`%cState: %c${isRabbitHole ? 'EXPLORATION (Finding New)' : 'EXPLOITATION (Staying Put)'}`, 'color: #888', `color: ${isRabbitHole ? '#00ffcc' : '#ff0050'}; font-weight: bold`);
    console.groupEnd();

    let denominator = Math.tanh(Math.abs(Vs)) + 2;
    for (let d = 0; d < DIMENSIONS; d++) {
        userVector[d] += ALPHA * Math.tanh((Vw * (Vi[d] - userVector[d])) / denominator);
    }

    userVector = normalizeVector(userVector);
    
    if (document.getElementById('stat-vw')) document.getElementById('stat-vw').innerText = Vw.toFixed(1) + 's';
    if (document.getElementById('stat-vs')) document.getElementById('stat-vs').innerText = Vs.toFixed(1) + 's';
    if (document.getElementById('stat-rh')) document.getElementById('stat-rh').innerText = Rh.toFixed(2);
    if (document.getElementById('stat-state')) {
        document.getElementById('stat-state').innerText = isRabbitHole ? "EXPLORATION" : "EXPLOITATION";
        document.getElementById('stat-state').style.color = isRabbitHole ? "#00ffcc" : "#ff0050";
    }

    updateAffinityDisplay();
    return isRabbitHole;
}

function recommendNextVideo(isRabbitHole) {
    if (unseenIndices.length === 0) {
        console.log("%c EXHAUSTED: Resetting video pool...", "color: orange");
        unseenIndices = Array.from({ length: videoDatabase.length }, (_, i) => i);
        videoDatabase.forEach(v => v.seen = false);
    }

    totalSwipes++;
    let bestVideo = null;
    let highestScore = -Infinity;
    let isColdStart = totalSwipes <= 8;
    let injectRandom = isColdStart ? (Math.random() < 0.70) : (Math.random() < 0.15);
    let batchSize = Math.min(1000, unseenIndices.length);
    let candidates = [];

    for (let i = 0; i < batchSize; i++) {
        let randomIndex = Math.floor(Math.random() * (unseenIndices.length - i));
        let candidateIndex = unseenIndices[randomIndex];
        candidates.push(videoDatabase[candidateIndex]);
    }

    let decisionReason = "";
    if (injectRandom) {
        bestVideo = candidates[Math.floor(Math.random() * candidates.length)];
        decisionReason = "RANDOM (Preventing Boredom)";
    } else {
        let baseVector = isRabbitHole ? videoDatabase[currentVideoIndex].vector : userVector;
        decisionReason = isRabbitHole ? "RABBIT HOLE (Following a lead)" : "🎯 PERSONALIZED (Matching interests)";
        for (let v of candidates) {
            let score = dotProduct(baseVector, v.vector);
            let recentCount = recentCategories.filter(c => c === v.category).length;
            if (recentCount >= 3) score -= 1.5; 
            else if (recentCount === 2) score -= 0.5;
            if (score > highestScore) {
                highestScore = score;
                bestVideo = v;
            }
        }
    }

    console.log(`%cNEXT VIDEO: ${bestVideo.title} `, 'background: #ff0050; color: white; font-weight: bold;');
    console.log(`%cReason: %c${decisionReason}`, 'color: #888', 'color: #fff');
    console.log(`%cCategory: %c#${bestVideo.category}`, 'color: #888', 'color: #aaa');

    recentCategories.push(bestVideo.category);
    if (recentCategories.length > 5) recentCategories.shift();

    bestVideo.seen = true;
    currentVideoIndex = bestVideo.id;
    unseenIndices = unseenIndices.filter(index => index !== currentVideoIndex);
    let muteParam = isMuted ? 1 : 0;
    const uiYtPlayer = document.getElementById('yt-player');
    if (uiYtPlayer) {
        uiYtPlayer.src = `https://www.youtube.com/embed/${bestVideo.yt_id}?autoplay=1&controls=0&mute=${muteParam}&loop=1&playlist=${bestVideo.yt_id}&playsinline=1&modestbranding=1`;
    }

    if (document.getElementById('video-info')) document.getElementById('video-info').innerText = bestVideo.title;
    if (document.getElementById('video-cat')) document.getElementById('video-cat').innerText = `#${bestVideo.category.toLowerCase()}`;

    currentVideoStartTime = Date.now();
}

function triggerNext() {
    if (isMuted) {
        isMuted = false;
        if(document.getElementById('interaction-hint')) document.getElementById('interaction-hint').style.opacity = '0';
    }

    const wrapper = document.getElementById('video-wrapper');
    if(wrapper) {
        wrapper.classList.remove('swipe-anim');
        void wrapper.offsetWidth; 
        wrapper.classList.add('swipe-anim');
    }

    let Vw = (Date.now() - currentVideoStartTime) / 1000;

    if (currentVideoIndex !== -1) {
        videoHistory.push(currentVideoIndex);
    }

    let isRabbitHole = processSwipe(Vw);
    setTimeout(() => { recommendNextVideo(isRabbitHole); }, 200);
}

function triggerBack() {
    if (videoHistory.length === 0) return;

    const wrapper = document.getElementById('video-wrapper');
    if(wrapper) {
        wrapper.classList.remove('swipe-anim');
        void wrapper.offsetWidth;
        wrapper.classList.add('swipe-anim'); 
    }

    let prevIndex = videoHistory.pop();
    
    setTimeout(() => {
        currentVideoIndex = prevIndex;
        let prevVideo = videoDatabase[currentVideoIndex];
        
        let muteParam = isMuted ? 1 : 0;
        document.getElementById('yt-player').src = `https://www.youtube.com/embed/${prevVideo.yt_id}?autoplay=1&controls=0&mute=${muteParam}&loop=1&playlist=${prevVideo.yt_id}&playsinline=1&modestbranding=1`;
        document.getElementById('video-info').innerText = prevVideo.title;
        document.getElementById('video-cat').innerText = `#${prevVideo.category.toLowerCase()}`;
        
        currentVideoStartTime = Date.now();
    }, 200);
}

const keysPressed = new Set();
document.addEventListener('keydown', (e) => {
    if (['Space', 'ArrowDown', 'ArrowRight'].includes(e.code)) {
        e.preventDefault(); triggerNext();
    }
    if (e.code === 'ArrowUp') {
        e.preventDefault(); triggerBack();
    }
    
    keysPressed.add(e.key.toLowerCase());
    if (keysPressed.has('d') && keysPressed.has('e') && keysPressed.has('v')) {
        let devPanel = document.getElementById('dev-dashboard');
        if(devPanel) devPanel.classList.toggle('show');
        keysPressed.clear();
    }
});
document.addEventListener('keyup', (e) => { keysPressed.delete(e.key.toLowerCase()); });

let scrollCooldown = false;
document.addEventListener('wheel', (e) => {
    if (scrollCooldown) return;
    if (e.deltaY > 40) {
        triggerNext(); activateScrollCooldown();
    } else if (e.deltaY < -40) {
        triggerBack(); activateScrollCooldown();
    }
}, { passive: false });

function activateScrollCooldown() {
    scrollCooldown = true;
    setTimeout(() => { scrollCooldown = false; }, 800);
}

let startY = 0; let isDragging = false;
document.addEventListener('touchstart', e => { startY = e.changedTouches[0].screenY; }, {passive: true});
document.addEventListener('touchend', e => {
    if (startY - e.changedTouches[0].screenY > 50) triggerNext();
}, {passive: true});

document.addEventListener('touchend', e => {
    let endY = e.changedTouches[0].screenY;
    let swipeDistance = startY - endY;
    if (swipeDistance > 50 || currentVideoIndex === -1) {
        triggerNext();
    }
}, { passive: true });

document.addEventListener('mousedown', e => { isDragging = true; startY = e.clientY; });
document.addEventListener('mouseup', e => { 
    if(isDragging) { 
        if (startY - e.clientY > 50 || isMuted) triggerNext(); 
        isDragging = false; 
    }
});

function updateSettings() {
    let homeToggle = document.getElementById('home-mode');
    if (homeToggle) isHomeMode = homeToggle.checked;
}

function onPlayerError(event) {
    if ([101, 150, 153].includes(event.data) && !isHomeMode) {
        console.log("Restricted video skipped.");
        recommendNextVideo(false);
    }
}

document.getElementById('set-alpha')?.addEventListener('input', (e) => {
    ALPHA = parseFloat(e.target.value);
    document.getElementById('val-alpha').innerText = ALPHA;
});

document.getElementById('set-rh')?.addEventListener('input', (e) => {
    RH_THRESHOLD = parseFloat(e.target.value);
    document.getElementById('val-rh').innerText = RH_THRESHOLD;
});

function updateAffinityDisplay() {
    let affinities = [];
    catKeys.forEach(cat => { affinities.push({cat: cat, score: dotProduct(userVector, CATEGORIES[cat])}); });
    affinities.sort((a, b) => b.score - a.score); 
    
    let html = "";
    affinities.forEach(a => {
        let percent = Math.max(0, (a.score * 100)).toFixed(1);
        html += `<div class="stat-row"><span>${a.cat}:</span> <span>${percent}%</span></div>`;
    });
    let affinityEl = document.getElementById('user-affinity');
    if(affinityEl) affinityEl.innerHTML = html;
}

updateAffinityDisplay();
document.body.addEventListener('click', function startApp() {
    if (currentVideoIndex === -1) {
        isMuted = false;
        const hint = document.getElementById('interaction-hint');
        if (hint) hint.style.opacity = '0';
        recommendNextVideo(false);
        document.body.removeEventListener('click', startApp);
    }
}, { once: true });