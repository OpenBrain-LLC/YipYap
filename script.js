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

const yt_ids = ["idhDz9miZ3w", "GjXY-l1EnhQ", "Wcs2PFz5q6g", "ObA4ne4TVsE", "FSZyzhi8C9o", "83cKQylK7zo", "vN1aRN5bQQ0", "J-aFZYfQRus", "wr6fQ4KpbRM", "9wDE7h1O9yo", "9UafuoYvsk4", "PZ7lDrwYdZc", "0aZwqnn9qbQ", "-moW9jvvMr4", "KZ2cy_wsb9Y", "xUFSnSjJ9U0", "4t3HmqBupAk", "HrDvGz9OBxU", "EmUmOfl1WEs", "AxClpbA6VB8", "JmYAhy4mR9U", "Rdx8OZJ12-g", "AswBfKEgDu8", "oIQf0FomaJ8", "VMt2io3NPrk", "DitPK3bfFOI", "XfFFKeq-rtQ", "uX2cXg0vLrw", "uR1jvZbtH7M", "HYadvDXnSJs", "B35E8QleVhg", "Z4JmcQkHOkg", "Z3UcZ2509aQ", "LdCw5Pd8Qvc", "D_Iutn8O4yc", "lTHpxqNfeIg", "b9Oh5K6Mxoc", "Jtd-eFLk8yo", "HL-lxlnBYkk", "lhz7rwfIKqg", "2ZIfqLDG_Qs", "Sq-y-wiZduE", "jbBkOLjW1O8", "UVf2Yw7uFoE", "KtQ9nt2ZeGM", "2tNp2vsxEzk", "zwsAf0do-yo", "Z8JFCJP70rg", "gLvkWpnzba8", "BsVhgta2WAo", "b1LQSezKxnA", "uwfwBfrFHKU", "RtIdsTW_12k", "VXwGvLj4rak", "bC-BYhuFUtY", "IsWrnV6NnpI", "sjvXX9EfgUg", "c7xlTRW8ZLA", "KqaNXGVNXb8", "aYBGSfzaa4c", "XpevOKRFHIw", "aoCmWFusqRk", "H6OHVrQ5tcw", "JD0U9RwMe-c", "ymgGUi0ItAM", "1J2oCsPQcJw", "1_FpUJoxlls", "kWIqQFA7Gko", "sG19LuNEWFg", "o0ueenNzBsg", "FLtohZ7Z_-I", "YKIAwUyVF6Y", "PnhElL_7HXE", "EbSCkVXGz0A", "xakNow6NVx4", "-5gz6imnITc", "3en6Td8etso", "56VKkH5EV_k", "TKFYeSqcxh0", "SrS26mXQGiA", "Uh3fNYVwDXM", "im61iyNpimw", "3fnRU6jrL4s", "iE-Tx1JvNIc", "Jc7ogKSFs_4", "OQpCcQhNfxM", "ZC0DxdjTjT8", "HAhLl4xkt9k", "HA4_gVHBUXc", "SXWDW62h_QY", "mzeN0BXR4e0", "EF8C4v7JIbA", "woTi--GCzwM", "IKnXrbg_VoY", "hI9ESfdK-nM", "IF-Gj1tZnWw", "FmR14Yng9kI", "6NnLfbTCM2I", "oaJIkGhAf7U", "o_Zs8UdCArM", "9hwNCmp4jX4", "RhaepLsP5eg", "9FuwiKyDxfg", "Dpcmuo2CsP0", "CVRUPTwBGIw", "B-ukcWJzXwc", "BG8Lfpmb_mM", "b5BHNqu54X8", "XvUHcsZOhJ8", "zLAYGZeVTPQ", "g5E8dVk4XGM", "O18-FA83BaM", "1XkbjQxA6BY", "z410TiEj9hM", "xQuAUBX5xBw", "c5N8hRyHYB0", "q4pDUxth5fQ", "DLePx0dH2Tc", "Ac5ksZTvZN8", "bVt3jAlhV8g", "KT-d8MlT27A", "rn1mjuVXNEI", "HyRjuPP9S3o", "xMcOUyyk9Hk", "7yDmGnA8Hw0", "8xXslshomOs", "aa2Fmr7sKIA", "XkHJyqZqjxE", "nSbvlktToSY", "hYo64qPEGw8", "asbbhyHBSKU", "mS5eEhLN57s", "3viZhIumUNo", "a6pqpINjdRQ", "qsc3YZ2S924", "BSF9s0gbJ2M", "4peuImhJj44", "9uZ-jeZS8d0", "O7O-3NeXm9g", "cpwSGsb-rTs", "z-EtmaFJieY", "SAUeGtyLsrk", "0kZIGB_dG80", "E0Hmnixke2g", "QM0sYbEQSkM", "4qVRBYAdLAo", "PeMlggyqz0Y", "bmmQA8A-yUA", "a0_lo_GDcFw", "i_LwzRVP7bg", "n1BMtnBTjGY", "NOJOYcmyDhM", "juo5G3t4qAo", "NIwexiIjASA", "Fa_V9fP2tpU", "qYNweeDHiyU", "b2q5OFtxm6A", "nIgIv4IfJ6s", "72AHKztZN44", "VyWAvY2CF9c", "p5SygzMSLhM", "wVjMFU11hVA", "_ppedXZHhE0", "xCBOiaJEoFw", "pJDKp6IXtYc", "S70z4vC1mYY", "lZdoUgNTE8E", "g5wgXmOqcMY", "9sdZz2a_zPg", "-DzV3-1lnTQ", "jXqqd0ZBEMA", "2z36dAwcKqA", "IvwelqA4tLM", "a0Zif2aG0gM", "JmVEwSQNrqU", "uRdwPe3uhDQ", "DyTDa_Ru7G8", "6dSIf-o6chc", "bIO5zo5czMc", "jZvQzkFcKEM", "9B7aIULFjrc", "J19kTbIHGBM", "M1-CwC4oD4k", "t2jL3QP4hTA", "FyYgCxFFCzA", "jxxV1ENn6_w", "ohPa-SJZYVc", "vkHDT5-jzQY", "SHUi2ScKz-c", "7I11OfT2EzU", "ZUSEdRb3yVk", "j2WnzJz4DEs", "npBxoV3Zjns", "p3gqHqV_xI8", "CJJ8ht7NCK4", "3y_e1dzL61Y", "RgUiCWSull8", "cVKsHc6swsY", "bRH3c9RfXtA", "RuMlpv77lVg", "NIk_0AW5hFU", "lcjdwSY2AzM", "YSJY3DvnybE", "qJZ1Ez28C-A", "pTn6Ewhb27k", "Q10_srZ-pbs", "XKSjCOKDtpk", "yCsgoLc_fzI", "Y-W-w8yNiKU", "88bMVbx1dzM", "oI_X2cMHNe0", "MiUHjLxm3V0", "bHIhgxav9LY", "DxL2HoqLbyA", "K-Fc08X56R0", "1TKSfAkWWN0", "J3i3F2e4IYs", "HD3k1hgbUXQ", "6etTERFUlUI", "jyQwgBAaBag", "eS6a6btDK8M", "YtAL8y2lACs", "2SxXjN7WT90", "qvo28NUtwM0", "kZ_4h9UA7Uo", "RhVN3COuXdQ", "ydFZdu98oVc", "F6fEKVIa4AQ", "VDeQiANBFXE", "6mtbp6rE1S0", "sbYX4Lur4Yc", "Vrtbxvefnjs", "EzJqbR2rPwY", "pzlA9HDNwBs", "klTbcJX5ICU", "bu_HMyC-gPE", "py5SK4mXwvM", "6BB3YRtzRxE", "iXV1wLv5Qq0", "bw7ulS9D0zI", "fWjsdhR3z3c", "kqtD5dpn9C8", "ygXn5nV5qFc", "b093aqAZiPU", "QoIRX37VZpo", "_uQrJ0TkZlc", "ix9cRaBkVe0", "j_JuhAWlEaI", "m8DXAsyaMK0", "mB0EBW-vDSQ", "qwAFL1597eM", "Gx5qb1uHss4", "Ro_MScTDfU4", "t8pPdKYpowI", "mRMmlo_Uqcs", "Z1Yd7upQsXY", "rfscVS0vtbw", "mC4nyib2sfg", "St48epdRDZw", "WEm3EUdicDg", "TYLKPb9ciw0", "tk3_-EWoJY8", "rQG7O6zfALA", "JdU0gDDCiB8", "j-3zE1u6Nto", "Aqeb3gaNOgM", "EK_UM1-BG2k", "X_YHXdCcmVc", "S-bHuiPQ318", "24A3y2WLrno", "FGJ-gCuMCo8", "Fqx5nIw3YOA", "Avw0_VjiQkY", "M10wpAUndmI", "r1XE8ON8fos", "fFHrsYYPGdA", "OWyWf23LpLc", "4WCbjCyauLA", "i5NPnPE58qs", "aGAlGOUVXKg", "Uy60wy20ADE", "JFq2mN5vwqg", "QEbeBCArQaA", "mI1s8W6Q0gg", "AvElIS1ZyO4", "sdpxddDzXfE", "RCsLxEkLI4w", "7BhJCK0PCF4", "X-O1-l0gP5Q", "XNOAOQktG6U", "o0btqyGWIQw", "dc6q04o8Y6o", "fj7ADr9DJpg", "JHBGgUGmVG0", "R4PEwHsWdL0", "GeYcLGVzlgE", "N-WK-6Nx-zI", "b12JrM-6DBY", "Gg1laGusABg", "o0KpNY3S6ko", "PUAwDPUNyrs", "NnEUTYwTwI8", "DQfBn0Qc5TI", "-YCGK33c0xs", "8lf9f4IBnRc", "1Gic5nYiAjM", "dmgMKbHyDFw", "xPgPKRuFia4", "-EJKwJlWALw", "SndboQn_y4Y", "AzDhek7wt6I", "Ec9WcarGSTo", "G43vl3RKN5s", "sdtkVfFN2u0", "P6itbK9kxs0", "UJFkrJ_UQs8", "cRxSWtxbeY0", "O3hnW7Kcp14", "69dMLpXosSk", "Tllu3Qae9g0", "7mlYkYUPXAs", "i7Din__CZQk", "TGeNaBIfhE4", "cRsqjy-qqag", "fag_9LMMXIo", "zaCuGBWxAHE", "B2ImYGUhBgI", "pyg-DYm7b0A", "BLaMbaVT22E", "Ij-BvQEu1LI", "E4rdw34WHKo", "IjxAEPh4DVM", "KJ4G1RtoKyI", "M4d3FXu9-3I", "5yRUcbJ7EvM", "T1Qqy87vt8g", "UZas45Zn9zU", "L7qB9DRahIs", "mMZfa3Y5F4w", "Uh9643c2P6k", "QuR969uMICM", "B3U1NDUiwSA", "tsbCSkvHhMo", "IzGJw6daRTw", "RQWpF2Gb-gU", "Kv8N9alyYNc", "X8MZWCGgIb8", "0BtDx7W6HOc", "90za6mazNps", "-fttE1SzpD8", "U1MJMAUblI4", "aeDbYuJyXr8", "g_IaVepNDT4", "lt4OsgmUTGI", "HHV-P4_Xp1E", "jO5L1VYMhGA", "LM3rwbVPyNc", "dm6ux6d6kCA", "JRIPV0dPAd4", "P5cGeDKOIP0", "-UlxHPIEVqA", "YcAXleNRfMc", "JhHMJCUmq28", "JOJ5zihcd6Q", "pDj1QhPOVBo", "6wb-iQRtfVo", "j1SgIoROS7s", "wrKtCau6XX0", "cF6qaUftxlA", "auiT5CAOU4o", "6L7NnZWeW-s", "GJ0Hn4ywOlY", "q8dcnh-4I6g", "3sXz96MdKzk", "XUOWuwd0pLM", "86Uhj0Ql2CE", "IMrzluLIPgk", "eYyFP3rfcGo", "EdyC2DmHA6E", "AhgtB-TqS3w", "Wv5mdAHynKI", "qo8r1oFke00", "_YJjA5uBGig", "whD42TK0dYw", "HkfO1alRWoM", "m_QhY1aABsE", "NM8z7j7yUHE", "3NTbrREnxH4", "hrv0sDACB7M", "34F71XqvOjg", "ZrQFmiRJAZ0", "9cLFAI1_fmU", "tneMHQrGz3U", "1qvK1T69uKY", "l1UHEkJKnDc", "IwYx9hKWoGw", "JllVotEWslQ", "_QsVJTRnmbM", "DeuY9jSYpr4", "bgHoQ_5dT2M", "b8K5zFZ-8k8", "mReIXUi9zJ4", "62dQkCRZhP4", "IesXO-rIbDU", "rhLGh5bB01M", "1if8QYtg9Zk", "sP_nGy6d35Y", "s2JFnnE7osw", "uhoYIRJGnpg", "wpacThrQl4s", "1i4kJkFXBKw", "jw_MlQ9VGyY", "4gBAjbeUrjU", "7OS44cPz6wA", "27JRVfZYAfM", "7v-bshg-yOI", "hgxw7kO49xI", "S8AIWblEDqU", "CENDrJsXIp8", "5gv1E6tpzdY", "Z4877fx2hwg", "OwvcU3qGjEQ", "QO_V3h14Fyc", "W97RjIvffSk", "zqANjUGarAw", "PVD1LNDxOnc", "rSmkCdmL3KE", "2q91vTvc7YE", "1ehpgbb3XD0", "U-ZS68L2hRc", "MVKLi_d9_L4", "exUCyp8PbD4", "EMi3PCW23yQ", "My_j5ImBHek", "SpeDK1TPbew", "Ggymc5_pWyA", "9ShgYrBkTRs", "P0xwiM-azU0", "QQzBACyX12M", "L2NEN0ESVTM", "a4ap0R_OQIE", "_3uHJKDfkZg", "_51tSnhDha4", "TEttd0Qkqnc", "_ajq3avegMA", "IRjuAemfaQE", "IanqpvZsp_s", "Qy_BpaI0CUY", "BwdMT-OiARI", "EsQudPqDOQQ", "MPfZhgLiK6w", "oGJrnyjDbsA", "aGfTiczYsmo", "d1reryPOMX0", "M-3YqJA6UlM", "qnFfPdaZJO4", "ufD2IvYem0k", "hMmBSCQs1H4", "wXKlTwGMUQQ", "qtJNZg0_SHU", "2X23aw8qUOk", "QtIvKG8q5iM", "QrCd-oNLGmY", "EAUcBiCydRc", "EOMVXqH9DSg", "I44_zbEwz_w", "tF4DML7FIWk", "UNorxwlZlFk", "-e1_QhJ1EhQ", "fn3KWM1kuAw", "sd8ivhpjI6g", "MG4PPkCyJig", "TQA4iYEU1Ew", "ptYDWP9uTis", "rrUHZKlrxms", "wXxrmussq4E", "ll784fIsQew", "kHBcVlqpvZ8", "n6ISdRkS37I", "zFUHi3_oiXk", "YIhzUnvi7Fw", "HYwekersccY", "6Zbhvaac68Y", "rTiL9R_Q5PA", "LMPxtcEgtds", "5TZtQAYOtnA", "f9jePqf6qms", "1uNpjqH-mQQ", "9Pd_9RuUY8U", "WwBkiyhp3rQ", "pthRJjGZJTU", "BU5m7APWnb8", "0QidJypaU2M", "G4rlHY27sa0", "IVI5L18mmzQ", "hrF3jVppfr4", "hUYtDA7j19c", "PuK3SNa6_kk", "jHeNTYivwOw", "m-95TPuupsg", "EaLlFrlhT98", "haNKd5i-u60", "c64QhXOklDA", "qXkGEjM09QQ", "5H-UoFsohGM", "CLPkVvI9yFg", "QF3ZZeSoufE", "ZIgxsMtjE8Q", "E_rwyu6cdmc", "IMb-URlqV5Y", "jZkLydH49xM", "fhdUNSUx7Ms", "10o8IRxb1Lk", "N6gaZ6gS_NM", "y6SVkQmposk", "0_OUZH7hh3w", "NxlPfrnp9OA", "A4O9xk8aRTo", "JJLARldtq4c", "hl8UAaQpC8k", "bCEC4d-KaQU", "sBtuixpCZ_A", "B4QxoTQ-rrk", "uy8bQaW_Nnw", "q8WO_Q9simo", "iCkBphvuLKw", "uFKcSL_IHgg", "2b5F22wL1K8", "E6588DlZW-c", "xQXiSGDXknA", "9Y_Bg1kaUXo", "tX8DnJojCuc", "Y4xaiu9N_i0", "CsgovUpUFVo", "-u1ZROC2o6E", "vmkVPVT97vY", "f3K8RW1hl30", "C84pmy5e4lE", "npLGg7Z4vO8", "BgCDvhoSVx0", "ZAqxyLRa5Uk", "WQemp2fbYK0", "UbOjG4FNN5g", "o_XVt5rdpFY", "7cCW8Dddvjc", "IkRXpFIRUl4", "dX9CGRZwD-w", "Y8tiCArU5pU", "g8Qav3vIv9s", "RJsAqqObj-Y", "jciQNpAc3Qg", "vuvckBQ1bME", "bor0qLifjz4", "B2482h_TNwg", "52GoRYP1les", "9RZreu5z_Gc", "Q5paWn7bFg4", "F2KcZGwntgg", "nkwJPIJJ3hM", "1JkzrR-hznE", "B1VFmpxUTFM", "qQS_xWsU00I", "i820xO9VADM", "mpMimSbhcnE", "UssG5h_ZoCk", "Xg1ro-zG7AM", "yi29dbPnu28", "Rsxao9ptdmI", "P4gNS0Iiu0Q", "86H4NwOnASE", "TtdOdUi9b_s", "QW5L2fMriZk", "Twn_4AW0M6U", "9e9D7ABgHpU", "pLtHyLlLt4Y", "wM5NHC97JBw", "0XgcOz95hTs", "9c2NqlUWZfo", "1ekU0_GPi-g", "SrGENEXocJU", "b7zWwo9dbiU", "M7-h3FO-KKo", "DOWDNBu9DkU", "nBfK04-QPpg", "Iyp_X3mwE1w", "CMIzdj9QNmg", "mNOYS-duUJY", "XU2xd2b-GTs", "MicJ46YX5Lg", "3SAxXUIre28", "kzsyJROQOas", "wW95gSLJkCY", "1Za6jRiTTF8", "RVRyFhpCQio", "ptI6BRVC1Kw", "tJfERzrG-D8", "T7fGDw7U2Wg", "RMxB7zA-e4Y", "h5ysddrlXLw", "rIpiArAYQhg", "sZOuz_laH9I", "VPFp-zqjbMA", "nE_-wilGupQ", "qIfjibyt6pY", "x5OtCngO5A4", "o50N3-OaGdM", "P8frC_cLLD4", "fKsrERSd_Lo", "Fvgo56zZkeo", "j38Fqcnfz6M", "TNlEtPJPjJk", "o-mL12t8sE4", "mmLrPy5LdLI", "ru0_t4H1TLA", "GRde7WGScrM", "DB_YPensOPE", "ut2KhcNtnm8", "5VKxXKpr4kI", "UOr7wlJItPo", "SfMO6GH1Vqw", "NGmH2UQ-prk", "i7pXihbC-Ww", "PjF2QCpYw_s", "QRFFFjq1MS8", "ZQvfHyfgBtA", "zYMzE4xnjtc", "gqK3dCpwzxE", "DKF5dKo_r_Y", "Tpyqgc4VqoU", "x70VqMrXrbs", "Z_V_Qd89Jg8", "1p91gmhlPNo", "-PDQlHwlXOA", "gaelXhngh5A", "ZSkB3zrU8T4", "X4PEVU7psMo", "xflY5uS-nnw", "ar_EVYA69cI", "JfOMZfxH4ME", "KZLygdpg3LU", "qeGQgPQsJJI", "FfTX88Sv4I8", "1s_tEvvPTBo", "Nb2PzGqIqvE", "FVzdkDLyuHY", "jPOjDNiC95I", "BjqmgEF7F04", "NK88iwkvjfM", "CBSsL4u_nng", "7fYpWQq8Hb0", "-gal8E_dgE8", "lHhqCyH_NP8", "XxQiY1qKv9Y", "69VY-yrxbX8", "Lrn2AONZyCM", "8VY0RnxaZJc", "_TXzYVkSYuc", "_xgn0niHD-E", "bF4bp-lRbDg", "X23W_8uJHjk", "oEaMp5tzrHU", "kW140spadx8", "vE3Mbwhm0HU", "rsMsPMTkRAA", "GR9RFDPrHyY", "yaE15-5Ebvs", "5j7m5zuhejQ", "L1GYRZ2FXv8", "6jUMjRwKyOM", "NbFEgxve8bQ", "EVgVdCrJGgc", "An6cuIMTgxo", "mzqbGLAGJHw", "4KOnxMXGBaI", "OhGJGUKh21E", "adXmM-eqwz8", "pxOctVwE8rs", "sX6VAfICbcc", "DQbPQ8GZBo4", "Lj340AVd-8k", "koDI8Al2sqU", "mxBCnBkr4Ro", "5Jcke69GIws", "3zLvByt52go", "a6AsztRZ2Oo", "NQ1ikFaPGg8", "jO2T4KOccH0", "8i9SU1DSYJY", "Mv7tvun670Y", "s3ii48qYBxA", "gd7BXuUQ91w", "SkB-eRCzWIU", "zIdv2NDRExI", "jgcXclSXnVo", "PeCBpI1hT2Q", "avg65oY7sj4", "dzHscTzpAME", "I4EWvMFj37g", "5XgBd6rjuDQ", "LKCVKw9CzFo", "16d2lHc0Pe8", "hREnP0HslK8", "uwAqEzhyjtw", "ZtqBQ68cfJc", "RKSzAr4P9zA", "oxuRxtrO2Ag", "v392lEyM29A", "hcaRTx7DsV0", "AO0jzD1hpXc", "vh5jaFpbXUQ", "fD3bSb_dNLQ", "WvVxJx2RJJk", "rhkJMPIZGKE", "yJzgccLZvLI", "Q8CTrYr_8dg", "VLOrmGbfYj0", "hSuCJ7oaD6E", "8DFa73_uwas", "KmR7R334kTY", "uqvOlViKfts", "OVxe7q4GX6Q", "mpRoSoK0vcs", "t6dbC6wPyr8", "NPJY2K6yumo", "ONUg505n_R4", "E6JjyRhfjOE", "YdeME3lj-4Q", "aV5l1G_1hxY", "pYtDQLI2iZg", "yrgO3R8mgGo", "3BULT0-joT0", "Vetvr96NUjM", "bzNKQ2FkEJI", "aD47CHWgdh8", "G_8R4SRvfao", "ftoXQsJtKPs", "g4G8VQ194sc", "EH3oHMUQ3O0", "YPMwtmEisHM", "TX-RsNGzAEU", "iyPjVtjKba0", "amRtNe2uVwE", "EbMDV7yBjrE", "PwOVanOWdzM", "t7oYtETjl1U", "tbQ59djyxSQ", "Sj-w0fJfmKw", "ih1h72HkrnU", "vIuzrV1dwPs", "DC-Xn2C_L1U", "beW8pCezrdI", "Mho0M1Ns0Rw", "3vl1hd9vlqA", "PXaLc9AYIcg", "V38NoO2xiVw", "AJtfMrwmtZU", "Hj75_aDCpfw", "-8LMML_EiMg", "hiqQbO1-Vdw", "qCPIEYfN_hc", "ZDbHnRWSXTk", "OirozwewjEQ", "tsu0Rw3Nqi8", "KZjJXrNSrBg", "WNSgj3yPXTA", "wbXFbQIzHiY", "DEA0_upu4sQ", "gNMQFT2HAiY", "4FYqmK1Nrdo", "G1hKzCkywM8", "lM02vNMRRB0", "PgvRvgClMxI", "Ejwg63QtBAE", "ftlvreFtA2A", "fTn-XfauCPI", "8YIIZL2n8lc", "4HGA5ItahFo", "xZvy2CnVIB4", "0xhzwDXfLds", "q2_c2_WfJFg", "xJVhKNQMROQ", "HOfNYgvP3so", "x_tuPhtL2tA", "s8HVH6rILcs", "BDE9dERmaIY", "XkRFSnxXQ_w", "NoEIriuS0H8", "ifVVc8xTas0", "mOnWayInxWc", "Fi3zmrDjF6E", "3ye295CDlt4", "4gEoh3sk2AE", "QWiouzzCUcs", "CTuGXdyrWUo", "C8PUlZrngZQ", "Faj_Je5nZP4", "BzrFfUvRlTU", "UL6ogX38NcY", "VEtU4Co08yY", "vmb0wWKITBQ", "gTHKEOTF5nA", "XIyMvbaxR6c", "esJ2bTDeizI", "oidnwPIeqsI", "-JRSF-zDgvk", "-9Osn7JsP1Y", "HlJEjW-QSnQ", "2FVfJTGpXnU", "rrFd5I5TUMM", "DQx96G4yHd8", "0ugyzbjRqiI", "zFIWWM0Iv-U", "7oedD0KS4Do", "dFyxfMLt-s0", "YVKhcPm3T5A", "4P_z4vMqMog", "oB0B2kWq9mc", "WsCCYv2adkM", "gnkkvUATpnI", "3M5XyPK0OBo", "Huemt54sv80", "R8PCKNW0ypE", "b9Hq6bTBF2A", "EmJv_eOfrDc", "KJ-dutQXUtg", "j18ECUhkeY0", "jT_Jyiq1ceo", "9EZCpppRh5Y", "L4qDgsyFw7M", "8c4oI2hBZPQ", "OFCVkSQYTjA", "pSq_JvD9w0g", "Id1rwD0RU5k", "CeKnYi2vVgI", "1yuzuBqbEhw", "gW0y6K6c6Jw", "WLlo4u2HHD4", "V3aeiR7plQw", "l15PgmJXi2Y", "tNsTVJX3oUY", "FuiJHJz4f5Q", "BWSaIgoY38k", "XzrmWny6lss", "tSxb4dUDluU", "yAB5GeAN-tM", "AWhL4ePuPFs", "CNpTqyov9Pk", "BDWBKLGehN4", "KI_OqMwWCBU", "ZjuzJODdH8Q", "0StWrXoN8nI", "HGFUR7WmFP0", "avP9JR0N-i8", "FOOsgpHEe_c", "ECGb_jy1QE8", "TbblBA4oqTY", "RXXMJAU6vY8", "Al7DqK0f8lI", "Stkh4llwdQw", "k4H_WO6kNZA", "4yrYeIlk9ak", "rMxIcQtQW3A", "SPLTjaMZMSQ", "fPAWKKsWtps", "EvqCrZMAilM", "isWA00k_jSU", "yXiSWPGy_gg", "S3I1LIaPRzk", "ETI8p1-TUyk", "Wg_jwgmwt-U", "4gpTco1KyMA", "52FuKwsTXY8", "8Zx7fFFfPis", "MFSx4jWmDfY", "pqfF_uKgSy4", "eh3nC3acIIY", "8gXpZmQ7j70", "p0LAw31zUNE", "pHz8M3rPTMk", "OOg-4mtA3Zo", "zYS7RRyHAyY", "U8sJQje9sks", "qFDObDh67zs", "XmaQGYA_Yv8", "Ck3f4Rs9sr8", "hPcP9V_g3gQ", "MJxz-540WL0", "yBIqEBh7_DU", "LQb3na0fIj0", "yDAAlojz8NU", "MBRqu0YOH14", "VD6xJq8NguY", "Pj-h6MEgE7I", "Zpq1GbPqhy4", "4Stzj2_Rlo4", "uzkD5SeuwzM", "zozEm4f_dlw", "tRXy-b6_lBc", "h6fcK_fRYaI", "gtDKKJq9u30", "PaErPyEnDvk", "uqKGREZs6-w", "V4Z8EdiJxgk", "VB_GWz25B3Q", "ulCdoCfw-bY", "p_8yK2kmxoo", "Brm71uCWr-I", "J0ldO87Pprc", "71eUes30gwc", "Yutzg2NLwcU", "7rMgpExA4kM", "hqiVF6JMRZI", "Al4wxXnLqNo", "HuYJBQBB6II", "1U-9rB86h3o", "J8pCVyIRXkg", "HmPiS7oMXck", "p3VwCU3Srjc", "lISR37EWMWU", "9nNrsXFdNr0", "4tz4_i5-UAA", "F9PibJ_jdag", "Cmet3VIXvN8", "xA9iS08lx80", "EQZQEWzoVMI", "ZvD1viJFtZ0", "wzPZDhvQDQs", "yMG7VcfxhJ4", "wY63b5ZX-jA", "sQpqTNPA2WM", "hPge9W1emZI", "QSIMd-NjZ04", "D7gS9lZRRrU", "5muVFHouEcc", "JFwbgWHgr5s", "8BtwojtfdxI", "iT_1Gj5VPP0", "YXt3tBxc2WE", "OPAuvhdxNH8", "mcaP_6IVvKI", "U-a4g4U5aUQ", "aTNjaICaCyE", "LlqsCCa6y58", "QTViNHIjUUg", "bycGfO7lHbs", "Ih7rWA2CGl8", "24R-yNFD_tA", "ujF4wUaQLiQ", "Q-AC31I-Ea8", "OlbOOzX_fDs", "rdAoreF4k8o", "UTv3obzRXRE", "Ap8jTCMK3c4", "-Hw4iTB_Zs4", "wFWutlIUfjU", "r10g5gERB04", "Fd0i5EcziUQ", "ah8U0-fV6k8", "UHlfTBs5THI", "qeVl2-BWDqs", "wVd836vHl6s", "MiQe9ob9aDc", "av8j7p_6lcQ", "YpxhAJzuyJM", "COk0Sbbc_co", "VC2aJEE7R6c", "gc_BSpXl360", "Rpu4uREBeDM", "LdW3jRm4B6s", "_CGUwNzlXyg", "2QKARCPO3sA", "xY2BjDp5qEs", "YFjd-zI42U8", "Z90V0iQth8g", "oL-AOAOSTFw", "0IOsk2Vlc4o", "oqSk-MqDb3c", "UFQqyV1IQh0", "g7EFA2VE-Ps", "278bLXejs_c", "XzdaSX3u30s", "wdCFzekN2Kg", "HOLfhZc9Qr4", "qzv_wQBkSvM", "9-kYEGjG92E", "Dyf6b9qdqzs", "HpRqlehZ0X8", "9wJCltuawSs", "GUuveW29ndI", "GUXa-ByKCkc", "8gQbgyTlS-8", "XNwPhlNeC9I", "orV8GebjuaM", "geUKI-2uWaY", "TV_0GudS3N8", "xWwRpX3cfX0", "axnHz5iPYCk", "9jeYLvhzTB8", "zQQQ1W-ELCo", "ojOeHGalej0", "257mEsu8lXg", "Uc9hQGqV-DU", "JWYQ1FnuS5s", "9D-TPe_KlM8", "AudPmaQe9AM", "U6DG9dyvvJQ", "1mlN0yuxoLE", "oLsonHQJOUc", "gOkCJ57IvNg", "QYiddvAhffI", "XgDuG_sE06Y", "HW-SWsVeqLA", "xsFIKrJ744c", "VPJW9X7Agsw", "Bqj2Txnjvfk", "PR4FPvzSBiQ", "_hoGpYyn4Bs", "B3HhrYdzkiQ", "j9xO4dMuS0U", "cknFa4rEbZE", "0J1i3l9H8jw", "jYXdUMgygSM", "hNcG76DqOiI", "-tmTS-ODIME", "Oegbmuhs7D4", "2xw65Eniif0", "ezpqDi42pRM", "AerTH3Ez198", "F_WNbjt-f5Q", "7rUMqRn3wpw", "qw5ONnkBbvc", "34zPJRh_1Cc", "HzCGF7BgH9s", "mPlSTrflPvI", "oj_mGjxuItU", "kX9nB5ld4gQ", "_DNzTCd7-jc", "pWqT8i4GaMo", "XyGfxCxnZW0", "MB7YIYER9hk", "gthG0_KqniY", "g4OwUsVp9jI", "Nq-SyxUvXNk", "WA0scznjjW4", "fOi3_aKNWoo", "Ie7YceFux3U", "Vd_nLf-Kz4Q", "Pok6EN3cfA4", "J6Flw0Hyd_A", "3_d3gt8JryQ", "xFsJYuyEgCY", "a6A5S30I97U", "yrgm7z-z6eo", "euKM6-V_yKQ", "bUL8NQy-3gw", "TIjz0NpfpU0", "F_ALDLJHi58", "d3gh9l37Yt8", "wL6jh9thk8Q", "bXjy0pnEDCc", "jEcNIaQ69b4", "YL4gbYh2Dfk", "yiaTqfE_qT4", "X-jdl9hcCeg", "enuOArEfqGo", "Yo98PdmGzvo", "L0DN5myCP7I", "QW9sxtRo9rI", "pm8AF_mLk_A", "Msy1HHpFN-4", "G-MVReDrRwo", "M-mAFarwU18", "p5_4Aqt7SWY", "3pCGU3bIPEc", "YrHpeEwk_-U", "G-Fg7l7G1zw", "hLkEX19qD3E", "fe3Mo_IzmT8", "QZvaw9Nduvk", "aoqVGdmVlKk", "RTA54NITdLo", "i3cZCfTy0bA", "veE0E79dEEc", "nffGuGwCE3E", "20gwf7YttQM", "dtEfBKJZrVQ", "yJ44SxiemMs", "Ydc_SaQ_eRQ", "Gl1wLtpdpKs", "jlvY5r6lPX8", "Q26qCZBcPhU", "37d2J40rw7I", "1eL7llVPuJg", "m1NR0uNNs5Y", "f7As0yBCppU", "56nQjJZIqoU", "yvD3gczib-E", "JE6PtW4grWE", "Vx5uUjkbzTc", "cK9WA2Od_5s", "khSJX44_s1Y", "nmijQsHxXuk", "RWm1VYvtPsc", "8ibgkwouP4g", "u-TDa87W3Bk", "i_5XdNf8Ssw", "xr7C8YHWoj8", "jzhUBqapT64", "w3pTGZDKqwk", "acWXzUCM2Qw", "3Brr8QRxr2k", "ZFjUMv-7kqY", "WwA_7QyqtGI", "jJLSWygShfc", "LEF1nkKYeVg", "Po8xRixXs4o", "kOeX5kuW2gQ", "MDwPXRy9IFc", "FSfQF07YxZ8", "W9gLi96pUj4", "AAsvvzQK1cE", "DJ4hDppP_SQ", "CMx1YEvLm20", "db90YDNjnWM", "_bf-fUEjBNI", "0Sx9wOtlARU", "yCn-YTti1M0", "kUsxMXwCW8A", "MuMeiN2Ordg", "F-zQOAwSuHg", "gqK2RGBhel8", "KagPAH7Jt-M", "b5nd9RGFKjM", "7C7d3gXhQR0", "5BbUNIAPbK8", "KiLA6Bk_ivs", "Bt2JUZPdKu4", "FgdXRnHj0wc", "cV70nR-OCWI", "MGKrKvwSd4M", "LULEvE63lNI", "oxR6I-KRAug", "e410afWOESI", "FWu2rkffYvg", "zChIOobv20k", "JBgmGJRhVes", "4wCFw8HoSWM", "F7_zfPxn-JE", "HNohZ00K0IE", "qoivze00lAI", "A9WS99pzeOo", "IQHQVOF3Mls", "K3_oQKAU7W8", "m8o2GrbR3d8", "dx_Ruw8vufI", "TLVatigUh1k", "nVyD6THcvDQ", "0yCJMt9Mx9c", "1aM1KYvl4Dw", "006V3t__xkc", "U2hZFMVNSE0", "pc1_v13nnuQ", "_6R7Ym6Vy_I", "zjeBGkS4LAA", "Yq0QkCxoTHM", "-sB12gk9ESA", "ODjqvSDsCJg", "_j1eODrkGS4", "Ok-xpKjKp2g", "FwOTs4UxQS4", "cNvxNOMLS7I", "UdE-W30oOXo", "1C_zuHf6lP4", "yNeprtMyAAg", "0_0HJbNzGb8", "RC4NUi-VwLY", "lFiOZqyymUY", "Pu9DgOvwZ-w", "dC1-qgR7YO0", "1Ul2tR7qxqM", "40oRN9TrL88", "MRfU9RR95A4", "nmMRMIE3MGw", "1TF22jOGsww", "ZKJ85w6y7bY", "9EYqAhb8rF4", "fn1bNrGnjPY", "Gs1pTsMhhDw", "AMPNvMFZCVo", "AvioLeO8Weo", "hJJrDbZzui8", "OzLtM0gY8Rg", "O9M1UMj-vwE", "ZcsbhQxhFqU", "0-OOW3TCBRA", "isHJaetjxk0", "S-XxKVxZ2fU", "8ZD2S_ufi6E", "z_qWsQNWSVI", "MCb13lbVGE0", "HkMgp0DS1-0", "fC5MKJDW6sc", "3kwyt3DgWC0", "OBDJgW-TJKc", "VfKwPIbycbg", "-sKjdYceH04", "YFbno_aPm0w", "p8ThbaAuIrg", "wUi4E4IACfQ", "TkqfUkgQT2E", "29rCBNL9IVc", "SQpPDAGTgcw", "XNEHP6qFeCs", "qD0_yWgifDM", "2tM1LFFxeKg", "yhYU4ZbLmmk", "eEWa7cpiyD8", "9iMGFqMmUFs", "ZQUxL4Jm1Lo", "gVXoAbeB8QI", "idrbwnWLJ7w", "iNyUmbmQQZg", "lEXBxijQREo", "Jsj-hDW9bS8", "_GI9-J-sE5k", "H0-WkpmTPrM", "MMmOLN5zBLY", "R0JKCYZ8hng", "iCBzEZek5cY", "CxC161GvMPc", "WIdWjqZsGgg", "2rvLEJrQm7g", "8rAe8RuICYM", "3pGu42-h3wc", "IiyBo-qLDeM", "GtPqDPhx-EI", "K9w8I_YD29E", "awBbfc46rZ0", "lyN4jj3Vd1A", "d7Mcsgzl6ls", "ecAHSt0Xneo", "ZYiWIKnm8_A", "syfBwAfdfWw", "M3ofTRxZHqI", "o3UkIagTVSQ", "4H97gsecWC4", "NJks7JfGKxM", "h1mnlGOXxF8", "rjnOtuVY4vw", "2h4MQ8zA_Vg", "ANdLOY4rW04", "UFz_qyMOwsA", "E00dUXXQtoA", "_sOlSA_qZJs", "h-oVmlwC_IQ", "g-NUz0pQC0I", "TApeW5USC1Y", "HOjWt9mu09A", "QxQhi9Ai4Bk", "Q-jjZMMxbZs", "ZbGi5zC--jU", "0VclWzlhtFg", "DBFWJNX2gHo", "JGnsG8q1OZo", "bCiwg9QJywU", "a1d5aAx7R7w", "h0m30qw4g6o", "m3s-mnx6bzU", "fAJC8iO7zxQ", "zaAuPjM5Y2w", "WTmX420cb7A", "u9DM5gPobOc", "7FbcYYsMrcA", "jzpQIlxp5Dk", "SSdsncLXLYs", "zYpKWBXhcik", "mcFXeari-o8", "gT0Lh1eYk78", "Z4pCqK-V_Wo", "cZHp-Oozg6I", "dC34rfY8Eyk", "salY_Sm6mv4", "1PnVor36_40", "9z8FP8ear2Y", "qz0aGYrrlhU", "j6nOnIT-T1o", "_GTMOmRrqkU", "J35jug1uHzE", "tfzGsCxutWk", "X4sClFRMJ00", "G3e-cpL7ofc", "i1FeOOhNnwU", "VSwaoQ3TFkQ", "ItZN6o0ylao", "DHGhFJZLKMs", "D3iEE29ZXRM", "Dfj0B6aL7Hs", "dU5Mcv4eLUU", "maQBzXkWQ8M", "UXt8z3djUak", "-ECO5fkxGMs", "P5d9omYAk40", "02iAzakZsdQ", "53_cuLhObr8", "ilI86d20uJM", "YI9uI_x3Y-o", "xuqZF1ofkzg", "Oq-zPBi2gCE", "Y_43_u9u_Ag", "eEWIuyeNp2k", "uk8PQJaT7qA", "BcGGh4jQQ1g", "bEOu5YIzu6c", "fCPN1Oslyw0", "cp-KXqJqvsQ", "Gw_Tk2GoX1M", "nJkyH6MHHOU", "TNQsmPf24go", "J8hzJxb0rpc", "O31TcSo3Unk", "95-yZ-31j9A", "hJHvdBlSxug", "oDQXFNWuZj8", "6mBO2vqLv38", "qQYiwmamq38", "g-SL4ejpP94", "Zc1tZ8JsZvg", "XZmGGAbHqa0", "xPi4uZu4uF0", "NyZWSvSj8ek", "kQrVg5mb-iU", "53q3gscB7FM", "0eKVizvYSUQ", "SbWkdMdFGNA", "LlhmzVL5bm8", "oIRkXulqJA4", "u0C7VHX_f44", "ucnDvLrlUf0", "77-TRPzqwh8", "max3bL3bTbg", "QAl50i6wXkk", "dIAnor5MBSg", "l0K00gRerw8", "h-WWI_QpS2Y", "4nvhVv5uNI0", "lfvht4lAjBk", "tkqE8FxwWTU", "Cxef5VFmKlE", "7fkJl5tPjCs", "Y63zsGX0Olk", "G2_rbDSFjqs", "4DKkueqcKmQ", "aNjI4bpVfVY", "3z2cnU8o6IA", "u2mY4eFAetA", "EICpmw1avR4", "TlhHMVgiIeM", "jRlOT_zSw3g", "oHPy7r2RDVE", "Hm5jvVVVgDE", "rGDxkIXKQ3Q", "PqzRuDfy6iY", "pHj-zUDbZ1g", "X86b7Km8S7o", "W2zK9q8N-4s", "sOz0KkzOJws", "4FTqjHMLskc", "fMK8F5Rb-1U", "rFrtS8M7lOI", "PeBl_zlhzm4", "YA30UMZYhIg", "HsKSAEf7h2s", "54KJQ-NUMgg", "FuDC6a_rBag", "kvCKh_V7uBE", "y7pkbQJb3yo", "mbpLpxi9rJY", "z6TOQzCDO7Y", "LmyRZR8MaJI", "_dmW-QDG5Tg", "gfH-NLo8tRk", "m4gBaZcBHkE", "q7iIeQ0XiSE", "Sfzy05M-nzY", "7uTs6e9BvfY", "5Y6eInX7H-s", "u0Ec_sX-boY", "iBTzh_aIvvc", "ZhAPpor53K0", "v4rP8ji4fgo", "er-pFeUvHWg", "0koCRLxQWZ4", "MYHKlsi02dk", "BXJs0n2HaBw", "uDqjIdI4bF4", "XS2Y9hM-GZc", "PfpsJE93kp8", "HsmKUwF7vrg", "DlMZro2xbRI", "PREzGuGjpc4", "lxjJRWYulr8", "5M8UThSVgKE", "tBoWuR6pJdA", "yx0HgMXnF1M", "OG9mr95od24", "55kNo5jVtB4", "Rddp1G-3lkk", "PeyTvhmIfec", "13VbzE8K-u4", "3m6WlNKlI9U", "zAx57syiqxA", "TwmV7absKns", "4e7j2k2SmBo", "lGpmyZx0xBY", "m34ZQCJ1cgU", "SiKlJIgAThE", "286SGzpUx9o", "XtQMytORBmM", "iqlH4okiQqg", "8fcy0_FQ_OA", "1x6n4ZqOFB4", "lMZun9SHv1s", "FiW69KIsQz0", "_tE4phLuGyA", "fqb9MfRqK9I", "9HCTB4aZGTg", "7vEyVcYUIzY", "97PeSdLarns", "c-aEBxGPLB0", "H_5u_DVTbbU", "mvdhOEsCkAg", "ewNea0F4DUI", "FD2OiJPSGx0", "RSJDDrYbEUc", "D7v2pjke5sc", "1hzX8qGaSEU", "t22flliJLTQ", "2REkZG-dhHc", "vvkY1AmKktQ", "Jo918IkVRms", "IPQSkd4rcLM", "B0pYDrb_nzI", "1fjhIWJSxfw", "Qz1VJycZcmQ", "68_7qPFH8PM", "pS036KpTis0", "ArqQ8Gn_tOw", "xjPi6IcSH_Q", "jhyANGHDDH8", "UiDZfWPYgqA", "NxClTxKQHNo", "CrvCSHAu8U8", "fvelEcd1rY8", "fyLrwS0Oet8", "oS2vixGSVxs", "NHhTMh0nURA", "7v9fNsdQUBA", "7DKFvrWDHMM", "sAwvgPtUV_I", "0aL5XdmU-sE", "yzpcyGJ2wD0", "lkzfwGsKp8M", "9TZO2zBovRw", "lxAKbWr1bwQ", "yyrY2mc0LX0", "aefO0N_DFWw", "XHu8j9_VYck", "EcYeWnFj7S4", "4hIKndS8D5o", "G3XBMG96-Qk", "7-Cv35UKbXY", "rahtTTARC_c", "WOKYgWlXwk0", "juUTjsa-bmE", "yI6qCTwmCTc", "f4LeLdgS3W8", "gxqPbGqYACw", "P3IIRiSTc3g", "LV801eQzUQ0", "QdCAtXENxBc", "DgGdlCOCK8s", "GXoEpNjgKzg", "QsVg3gZEi6w", "Wb_aruwUan8", "zxKPjD8urG4", "z3uvnwBMTdY", "46ZXl-V4qwY", "SYGaGN59Swo", "tPunugK7WqY", "SDpWXtXjlks", "xiAY4UJfplI", "XUXxMgtFz7E", "FGOkOYiNCy0", "WKpQRXdvAqM", "6moWz2TrGgs", "RVUy_bm4V1k", "Vdb9IndsSXk", "FcfWsj9OnsI", "Kmhozhk5WUs", "XkvlY7qDXcU", "zWlePUUnm1o", "T75IKSXVXlc", "Ia0LDGQqqSA", "c5rWB_fS5ao", "GWF1L1mYbP0", "oY_CIX65kgw", "oJDzh2mVBms", "XzBp6Bt503o", "j-IacGailU8", "d0j6vmDqamo", "4Q_-W0DAx6U", "yYq4Kp6_ts4", "PJ4DuumRCPc", "tlM3jzcvUK4", "W16WhFwtdoA", "1DEmFZvZ4AY", "oF_OAe-9lHk", "-vEhP3YlUug", "8tqP_JqzYPU", "UUR8rQRVZig", "pjgvGiEHlNs", "ChsJPFvjMk8", "jqEHDaKFZ_w", "KZ0pWiw5QOU", "tuPG_Qz3pyE", "RZdc_U6IvBM", "o8_chDNgefU", "63ryvQ4sGkw", "BASYwlGqXbc", "-HLwTwlAw3g", "gDge_Zgrm8A", "Pk4q_O1QJRs", "kpaga_3BWfQ", "MjNJFkWEu04", "_mN4gcKd4ok", "-WnsDHOeYPE", "mRiENrHqzFw", "HbC3COF33k0", "K39s6gtogb8", "FCUiYknWiX0", "Axf2hKLOcUU", "1DYH5ud3zHo", "c8hjhRqIwHE", "eHWb_ZBidF8", "Q9tSyGMnnqg", "3_Q-yYfjeBM", "koUi-AgsowQ", "ehUQNsyTKCc", "rt1bsoOukjI", "dPY-tTwjid4", "q8HTCO_lYmo", "EnlHd5xTts4", "M9VSpOiwwDU", "9YAIa9s0SBI", "LqXZ628YNj4", "HWGXf2h5YLA", "LR72KqH24xM", "TWkSKz7mdhY", "JogJf_8MuN8", "4UXFb7Cs3PU", "sWFmukKFf7I", "OLa8DQkKlyU", "dPgx9EH0e7g", "u1ojNgPCHGs", "Y_nr6AwAsSQ", "b5yGhEYaZzk", "E4Xb1DgmsQ8", "5gy3Ymax85o", "9YT9RMlusOQ", "c3_35hv8uME", "PU5PSjadch4", "Ctn4xMXg4-A", "DAOFpgocfrg", "LtBzmgItrIU", "XPi1dvJlA-w", "IflgXve5KHI", "-gdILnzYZEg", "anBtF96ckH4", "WBIdXKWa0WY", "43-Pb6uL1cE", "1QwyMWM0Jjg", "HhW5DLgwjTg", "74vIFs99CfE", "5uu7jk5jajI", "6OmJ3sKP2Rg", "LiRse7BEEKE", "6A3L8jChSfU", "VK4tPNmOcUI", "H4XL8s1BEdk", "kJ8HEsoI39s", "kw0QVwt7LVI", "yHtBhMrKnOk", "xBLVPuNstC0", "sBLWX5PwKQI", "tDd0dDgP1OI", "VeBq9oMTTaQ", "Cd6USEYp_UQ", "PdLr3lTSyns", "j_8jAq17cSM", "s9JDd9zoelM", "S3WERANpWcI", "X-D5FERQzU4", "6hM4oFNJumw", "einnVSg1lnU", "U3u7_9ouLdg", "iFDe5kUUyT0", "N6BJVM5tvnw", "6uCHVNdijp0", "tPwy8zb1A_s", "ppwqvcPJijU", "q8HW2tRK-Yk", "hX3Ok_zPW4s", "GZQejHVQoYM", "OD3kkgiccT4", "mtTMWxMBjHY", "fpqmy1AlfA8", "6WOoDH3xD7Q", "Y52WQygSrmQ", "Rh2YrIxk8bY", "cRSS0VBV99c", "WRgW-GOHw9g", "9ZWjpxI194c", "0UCm9ID-Iz4", "osuCr7zfyfc", "cHANzfyo5F0", "_354ufdgffQ", "bcEfI_Vp2w8", "J00_lsKLI3U", "kD_2jvnlkAo", "H4uZlJoSO4Y", "jJCJdsX0lV8", "E9lrZnbnvGE", "uOkEle1X7fQ", "gOFN5cqM8D4", "vZdYo_1Pwz8", "UFMukGqAz7w", "3ms0jTQD5GA", "NVm4QTepNUQ", "-sM_WxDpdqQ", "IfO8F8gswlI", "i-xMswfpnIo", "Cd1Tc2UpnDY", "aPiaIKTpHLs", "PbK15O1NF7U", "TFP1rO5ujcU", "sveMFL9O9GM", "DISjdfkSjc8", "aMNuQ1kyRGA", "-bdp9KYg_Vs", "xPe1jMuX32s", "rvwBcU1jXWc", "P_JuQCiKWUc", "5cFhx_myB0Q", "YrE5RexFDPM", "3l3TFieqIvk", "Jl0IDXkYKbk", "twLqddk-VEw", "A4yMqvIHhPQ", "-3v4OsPmsUg", "1_s_srKtFZc", "AT-ElP8uSTE", "jf2fm76S2eo", "j1CrIKtvRIk", "bA6-VEVAzCE", "75apltxdrCE", "iC-EnTZrddk", "N1zcps7nQaI", "lOuZ5iavrhs", "9qg7p-Ry4qo", "V0Y1EvWrQVo", "lrrnyt5QvG4", "5tabss1Iye0", "9NI4yO_3GxE", "0NOEPb_KuZI", "jxBSciHtHXg", "sLTPDP1RGmE", "wbxWFaIiiWw", "NebEKFEfI3c", "4gy9Cinu3cU", "x6Sww5Edc3U", "ElauLWD9USA", "bTwLdWjxm6U", "n6tXwUv3ZQ4", "69tL2nhtNis", "sPHbzCb5AUM", "0eSmYOrOTMM", "mNVwzUW2FJM", "1pwhXUChn10", "SjONVCcvOpA", "PEROLnZA6p8", "AUXIuYHFgBE", "pLFjw0zKcgQ", "hSaScGMPJi0", "imQGaX_ZdiI", "8KyNBFGU7MI", "1T0xpD7J8nA", "HA-iJ7sB7m4", "ewOA0MxJfsU", "oqY4QXwZ39s", "VlbkuV7mk30", "7O0Ct7yRI_I", "SFFiAcgeZMs", "ndTET8Y4GNU", "0iprbBK6bss", "-CQatuQdQv4", "GlxVJYJLTc0", "scc3kPIm_RE", "2eAhUmhmnD8", "VhL8cmfSKQc", "bZwmRtLSSw4", "8qMbtxMEfVw", "niHbdOYAzOQ", "ooikuULnNQ8", "7ILDnrE8Flg", "tKCEv49sW1g", "8K3di5HSz6Q", "6ghMVf4s6h0", "3_OSDb_liXg", "rLDm254jtZA", "VEMVIF6s7Oo", "CHcyMIJlCis", "zvMdDXxyxpQ", "rjsTd0yw1EY", "XQqae_KkF94", "m6OYfHzSMaw", "1J2V57pF_FE", "jTOfOew316s", "IuTDuvYr7f0", "Jd1wzlwtKJ0", "8TJdP1Uf9x8", "NXdTwcoGE_w", "_varCKahxrU", "F0AT_7uVbeo", "00ZXaXIABMY", "8lnJQKs2Lbc", "I_qaccjrirc", "jW5UQCyi8dI", "kEu2H7S-la0", "hBmIP9AMXaQ", "69lbtjgf6vA", "HPaGQzVtrqg", "CahOPI_0M8s", "67OCL4v_3ws", "71GifZQJAek", "epqX_EmrQbQ", "QUN_O_6BBbc", "nFFiqwKCZvM", "xf3ma1XFt9Y", "a55IojEy2Z0", "H7Vz9jOmB30", "DJmp2XOXtXQ", "TRVfJ6Lq66o", "hS9PA6SuyyU", "-BG7OQqCmog", "cXWk8MEq3LY", "cWNR-6sBlqg", "E59Zw8Hntn0", "26Lt9Bzixk8", "5BtnKe5ICKw", "lYaVkaN-eLI", "Bd7NC3vFl_g", "yXlDITfAuRk", "MY2Go-5eL3I", "C5TFqv1Vqt0", "4bm4RPvZLUc", "uf6n2q1qUYg", "nsgAsw4XGvU", "D9JCwkx558o", "XJRS3aLVE78", "56yLoF-PGbk", "ivTYfOWXLmw", "xCxT2NFCmco", "Y4y2e4rUxfo", "oiW3qIM0-k4", "e7-QQvhFvoU", "591E6zqWqA8", "Y93qFCJWygA", "JaUhrGPs9Gc", "U-2XmqZGA3Q", "Ql4wGGTDapA", "DdGSYKKJB3w", "utKvDXhS62Y", "bZiWZJgJT7I", "3Yt3WjbtkT0", "NtZqrbMq46U", "uRDy4M5jI-g", "xTmgJ8-HCtI", "8SJSS_CB6jE", "1Z7saW4wwSk", "z3hMX65Khtg", "rTN3zmcHeHk", "EWnjbhHXbSw", "dHPTV4AHUyc", "WBumqF5gwLE", "d722bGusttw", "iaxkOJZxzQM", "FskTlUZyF_A", "G7EBiaDe_K0", "ObtS79k2NM4", "Aa8VhPDbxbI", "EaOMsueW9v0", "zwDm6zeCw9w", "gUDSyBRhtUU", "S5SpyXCTyz4", "r4fT1BeZDEM", "VaRldHkPR3A", "GCtqKRXoTnU", "V6F9h12eUr8", "XxgIEeIBCFo", "YV_94RjG7bo", "ghgwnQcibBE", "1GyhWl1wS20", "AUSwJ_dWETY", "4xeL4Lpx3_U", "dtxrtKd-Vao", "HkLpAw9u-UU", "7D7gnOxAgBI", "QxmFVB6_ft8", "F6nppF38Ysw", "i7NNqidnpr4", "QwH4jgXyQHE", "6xf1Qwj7X_w", "Epx9CPBKWfo", "Mfvg7G5DReo", "vHHGzrFNFaU", "FnHJBl7pRjM", "9hqFwNuF6FM", "3cxt8i0PYyY", "hiW9dwIzfIY", "2JwCVbLrlWs", "kizI_l1fOFc", "-WUi1VhVFdo", "0vNzxtQVf80", "-DcKAUO9zuc", "sD6aOsAYqro", "4icFrd_o6cQ", "bQ8kE0ZgP84", "rewCL624QOs", "ZiO-WSHZ19g", "Z7wYp0T70KA", "RTTjz3w8PxM", "aVDVciiahT8", "2fCKBYgL6IA", "Im4Vg_TTbUE", "BSuEIMpj_S4", "IYtzR0npfq4", "ye99Nh-zCik", "kWobbANluPw", "Edp0NxL4ne4", "X4Nbvt29dj0", "MYWrMVWSxrg", "I8lW6buDGBY", "vaNLKW_vkEg", "ylbPGQh1mks", "xYZXTQX_wXE", "Je92BEAZh00", "sM34lfjEos4", "7idJzEPZq1I", "3DqCMBJiSzE", "zQlm99BajH4", "jXjfzMCbaBc", "QWaCsteIYig", "A0Fp0MCgYQY", "-Et4vu4lpPI", "YIi_MGNW6Q0", "uXIsTszCjZE", "0ve61wyppaU", "FXQkEsIExwg", "tVw8JZ0O2Uk", "LS3oyekMaj0", "E-sF_1FgpJw", "gFTYNp0HWTg", "CtO_XE2Nrho", "dGGU4rAkShE", "6UXjRCORV44", "HOkQYYJsJig", "HiqEBf-gn-I", "PQFZDc2UDMU", "Qa0U194FHPo", "Md78VKgefo0", "ptmtIPtGQvU", "mr9X6Fiic-s", "1QC7mroZ9MA", "Ub4jHJRleUc", "odFmJp0pEt8", "pX68qQRfNrY", "N0pWYJYYLeQ", "oucL2T9CO3E", "w7k8qVb3qt8", "gWZ8PwO0CkQ", "bImk2wEVVCc", "MZYc1pdNVe0", "BwVnPEMpou8", "Mt4qlqsjHMA", "jyDqEr9usxw", "PbhJgmkW4Wo", "LGNBp_wREts", "nSAZNIx2_KU", "UyRkTdewXVo", "1QKtt6CTf_I", "kKgIoroigLU", "pbFz38TfD0M", "zUsNjR-rhnA", "JkMWoHjnaRw", "dSig1z3vssc", "kUeo9tnPU_k", "xtHZKToMvus", "XnMZ-T86GP4", "r2TwpNQzMZ0", "U_tqB4IZvMk", "elcOxmCBr3U", "0GPGfDCZ1EE", "UO3N_PRIgX0", "NhKTP5_LfU8", "lmWLuHk_mT4", "l2WCrXc7J-I", "WnozP8OWeik", "RLLbTTmje-Q", "zrcpfwIkcoM", "_6ve5UzG4l0", "ZMlt-6XUW-U", "WFVLWo5B81w", "cVcMWuEeQ0M", "B13s_m2zXnc", "ZP_P5fqvnd4", "gCbxcDCcd0g", "WBKKXjNf1sE", "zvfzhFAaET8", "20UISl1e81U", "AR1cSKxxSmU", "3Gioc3QAJ7s", "cUTevgY6ax4", "ncUTfpRvykU", "3DAi3IkVdZI", "KtK9VGTvMfg", "seozVCJESmY", "kNMoVUWNw9Q", "PzOBN9h8k3Y", "6erx-iRIC-8", "7yisyMO-Xi0", "zY6ZDJl_aqg", "nKD8FGwDkiY", "GJ6B8LS92lY", "ZTuuHiC_X_Y", "kxlyvcK15Jo", "8KsWz6eb9XM", "7ZP9_lxJ6GY", "W5SSv4dm5Rs", "WSbwl3MwXvw", "2tdnqZgKa0E", "YJBhWVDArLo", "u1lU64CG8p8", "qf29pqPWDOU", "mhI7yw7W4HI", "tZr7lTJPQu8", "b3T5YUGZUdk", "5zSvOSYrUTA", "1Tc7i1_sZmk", "ByXtOWpDFls", "U6HjohDNRqk", "QJkMyCvjIpk", "AVidkRl7lDs", "kvVvdk4JRmM", "nCNZExX-Rik", "_5A6ahUP8Jo", "PjCvZ4vM0zM", "t4c12Tfyj8A", "3XYZYlLcWYE", "D-kIlMq3qmI", "xx032AiC87I", "b9_Vh9h3Ohw", "cRrtIildKDM", "nrdNdprcYls", "pUWvEga5gWE", "9QoMoU1HkPU", "j3RbnsHTuVw", "V1_h14yFkHQ", "qkQtKnLkt3g", "iKJ555L4vUI", "NBQsJUfkFyw", "nJBxiZoDSYg", "pUSgoysoRWI", "RxFaVaND6rE", "O9TssFnVaEk", "E5AlBaKemvs", "NrdBWSszuxY", "2FbHsapR24E", "vqeA8pAnNas", "IB_AEoUhk4I", "u7JJusUZQ40", "yzh2YCdf14s", "wgnckaNcHqs", "DP4epIVQOCk", "WIaWTESJjrg", "CWzGg4OLzGg", "Vw34wMAqWzc", "c0cUE-ePDEc", "E1UEWy_vKfE", "O8naj8idunU", "0NKtxPBQcEk", "PLrQJKU6e-g", "VLyJLp7kH1A", "RIuMdCnCFok", "dZpLa0lU1nU", "6mi1VfbjGB4", "XMqZq2g4R9Y", "oAeFUkvoWuk", "BkiTScinYOQ", "devB61GE8gU", "Gyg8V1vw0Ko", "hv3RpsjOQ0c", "fmMY569no2k", "D3Cxm_HIiMU", "iyGkACm4zmo", "5hyA0qw2wWw", "sT_-Vn6tZgA", "AvCCy2uYcCk", "zFh5KXEm_9U", "Qd-whbRDMvA", "pl8J5vBF5zg", "EpsiSc-IT4A", "yy3LeyJ8upg", "rS0aFhjBct4", "BdHCp62jC84", "GnJsI6vq_9Y", "Ldh6FKavxek", "CgUCLkBwAak", "MiS4dXOnqsw", "Lxf5EGVyjOw", "BPRE9o1cEgk", "wRAtVLgj-wU", "SvPKFsCiMsw", "ihba9Lw0tv4", "gx8Exu10Q0Q", "wLCUTTdOVfA", "DmBl9x1e3oU", "bQa6VKPoyFw", "4pKly2JojMw", "nNixBuJWzC8", "UxU8OCsNbYY", "rBfdsyk8UK0", "t2jel6q1GRk", "lKfICYeSurc", "aRVFt79LqCM", "BwlSjg6ESdc", "lxuTCHJSers", "T41mYCmtWls", "W2hRlGrgoUQ", "gWoBScE7flM", "-F8ya_7odyM", "_a1bln3lDAA", "a-DdW6-NRCM", "IjUPOLU5ZG4", "oZQrOg3Asxg", "Sk-dc9ybKuM", "f3_q0dXOtu4", "-6KtwaavHUM", "5hLAEq7fU5s", "tKmr4J-6FsY", "BcPTj_uPLsw", "dOe3n9eO6Lc", "6_amTJINPUg", "JGgpxiZnkCw", "kmdLNVHoZiA", "6bzDlH_XLZA", "IYKL7lvrWbI", "Onx5UQ8OVHM", "1mg2AYyyIFk", "WK1dTFF1_M0", "iuw7in7wJ5s", "9rzeUz7pa1w", "nRnIevWoPLQ", "XpWpi_Jitt8", "Kb-UENo9oPI", "4iuHnuM2LLo", "OO5BVvdEWTs", "jZ38C-M3tyk", "DMD7teNxxHc", "MJsAsPTa5V0", "3b8j2eYpjuU", "P1t41-Mx_JY", "ZKxB5zaTmgs", "OOLxOyP-2pM", "ERbTHQy_gOA", "y_eGi4jVYUw", "SwUvObWlRlc", "kiTjI4ra1DU", "Bhftnrq-9Qg", "-zg7uWW13YA"];

function normalizeVector(vec) {
    let mag = Math.sqrt(vec.reduce((sum, val) => sum + val * val, 0));
    return mag === 0 ? vec : vec.map(val => val / mag);
}

function generateBaseVector() {
    return normalizeVector(Array.from({length: DIMENSIONS}, () => (Math.random() * 2) - 1));
}

function addNoise(vec, amount = 0.2) {
    return normalizeVector(vec.map(val => val + ((Math.random() * 2 - 1) * amount)));
}

function dotProduct(vecA, vecB) { 
    return vecA.reduce((sum, val, i) => sum + (val * vecB[i]), 0); 
}

function getMagnitude(vec) { 
    return Math.sqrt(vec.reduce((sum, val) => sum + val * val, 0)); 
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

function processSwipe(Vw) {
    if (currentVideoIndex === -1) return false; 
    
    let now = Date.now();
    swipeHistory.push(now);
    if (swipeHistory.length > 10) swipeHistory.shift(); 

    let Vs = calculateVs();
    let Vi = videoDatabase[currentVideoIndex].vector;
    let affinities = catKeys.map(cat => dotProduct(userVector, CATEGORIES[cat]));
    affinities.sort((a, b) => b - a);
    let bubbleRisk = (affinities[0] - affinities[1]) * 100;

    if (Vw < 3.0) {
        ALPHA = 35;
    } else if (Vw >= 10.0) {
        ALPHA = 8;
    } else {
        ALPHA = 15;
    }

    if (bubbleRisk > 60) {
        RH_THRESHOLD = 3.0;
    } else if (bubbleRisk < 20) {
        RH_THRESHOLD = 8.0;
    } else {
        RH_THRESHOLD = 5.0;
    }

    if(document.getElementById('set-alpha')) {
        document.getElementById('set-alpha').value = ALPHA;
        document.getElementById('val-alpha').innerText = ALPHA;
    }
    if(document.getElementById('set-rh')) {
        document.getElementById('set-rh').value = RH_THRESHOLD;
        document.getElementById('val-rh').innerText = RH_THRESHOLD.toFixed(1);
    }
    
    let diffVector = userVector.map((u, i) => u - Vi[i]);
    let Rh = getMagnitude(diffVector.map(val => Math.tanh(val))) * Vw;
    let isRabbitHole = Rh > RH_THRESHOLD;

    document.getElementById('stat-vw').innerText = Vw.toFixed(1) + 's';
    document.getElementById('stat-vs').innerText = Vs.toFixed(1) + 's';
    document.getElementById('stat-rh').innerText = Rh.toFixed(2);
    document.getElementById('stat-state').innerText = isRabbitHole ? "EXPLORATION" : "EXPLOITATION";
    document.getElementById('stat-state').style.color = isRabbitHole ? "#00ffcc" : "#ff0050";

    let denominator = Math.tanh(Math.abs(Vs)) + 2;
    for(let d=0; d < DIMENSIONS; d++) {
        userVector[d] += ALPHA * Math.tanh((Vw * (Vi[d] - userVector[d])) / denominator); 
    }

    userVector = normalizeVector(userVector);
    updateAffinityDisplay();
    
    return isRabbitHole;
}

function recommendNextVideo(isRabbitHole) {
    let unseenVideos = videoDatabase.filter(v => !v.seen);
    if (unseenVideos.length === 0) {
        videoDatabase.forEach(v => v.seen = false); // Reset if we run out
        unseenVideos = videoDatabase;
    }

    totalSwipes++;
    let bestVideo = null;
    let highestScore = -Infinity;
    let isColdStart = totalSwipes <= 8;
    let injectRandom = isColdStart ? (Math.random() < 0.70) : (Math.random() < 0.15);

    if (injectRandom) {
        bestVideo = unseenVideos[Math.floor(Math.random() * unseenVideos.length)];
    } 
    else {
        let baseVector = isRabbitHole ? videoDatabase[currentVideoIndex].vector : userVector;

        unseenVideos.forEach(v => {
            let score = dotProduct(baseVector, v.vector);
            let recentCount = recentCategories.filter(c => c === v.category).length;
            if (recentCount >= 3) score -= 1.0; 
            else if (recentCount === 2) score -= 0.3;

            if (score > highestScore) { highestScore = score; bestVideo = v; }
        });
    }

    recentCategories.push(bestVideo.category);
    if (recentCategories.length > 5) recentCategories.shift(); 

    bestVideo.seen = true;
    currentVideoIndex = videoDatabase.indexOf(bestVideo);
    
    let muteParam = isMuted ? 1 : 0;
    document.getElementById('yt-player').src = `https://www.youtube.com/embed/${bestVideo.yt_id}?autoplay=1&controls=0&mute=${muteParam}&loop=1&playlist=${bestVideo.yt_id}&playsinline=1&modestbranding=1`;
    document.getElementById('video-info').innerText = bestVideo.title;
    document.getElementById('video-cat').innerText = `#${bestVideo.category.toLowerCase()}`;
    
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
recommendNextVideo(false);