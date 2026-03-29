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

const yt_ids = ["vjEWNLHV350", "Y4VETu9hjA4", "w5e0FHkmpAk", "WCviLuPKSCI", "uWsbu_X0cnE", "tJwznEcaLX8", "lMSoj7wsf3A", "iuz-_QXTZGI", "UBj7Xe4ZwG0", "i7ieuLxFuoc", "fikfMY8-ug0", "_HcznRJDocE", "c8j3sW4O_1c", "EgCKSPWjhsA", "ilB3saBAE7Q", "xqlvvR2CDO0", "9-gBIKB2oL0", "GXXM0nbJQ4o", "DU87NT1wCTU", "3bkQroIAQm4", "CLDRylX38mw", "L64D5vZVUl4", "J0AO8zTE7CU", "-m_nQT62B4Y", "kZ1vYBsR_sg", "lbZvR5wAW7M", "dZiJkicepzM", "gWEN1XoE5NE", "xbGm1CiyFw4", "lw_M5wnVWXc", "UW2GupoV71U", "4LhBA0CSU7c", "FpQTNu7g1jk", "YwN102tf-Co", "Wj9GQC_vdnY", "mhmJeMu8Lqo", "JHuVd39ciM8", "XBHJrzK8vNw", "S5qElKj8-jE", "zKl3j4a4Zu0", "0hcWtKddwAA", "qrax2U3x29g", "b-7xiIUlva4", "x3qy-4UT1TY", "Q8VE9tLgeOY", "I1JPJLxKz_I", "l4w9rCnNx4I", "Nc8v_dO-x_A", "ECYPZFl3lVQ", "RrG5X44-w1c", "egInBl9xusE", "naHsRbHafU0", "YgIpqzCoVt0", "y0anmMTzROE", "-87LFvascqA", "l6wqpZH0o5w", "gFRpBm1FAaI", "bORo4gDPi6o", "s86UpojSZcQ", "lUN_28uEa8g", "QF3ZZeSoufE", "CroIKXc4TqY", "rAZvIwCUU_A", "EBoPKjM7Pno", "RT40HbPYwWM", "HpLbCNafRks", "3TA5oLHtIpM", "UU1J42zI8sU", "L5RjHW61gnQ", "IMb-URlqV5Y", "Fa3zAGyw7Ac", "4dZbpLUtLeI", "BKio-LGWilM", "3D1voHYPewk", "no5obxtKVtg", "aILt2L0a5-0", "OW2TNrgRMn8", "zJ74567vKQw", "hl8UAaQpC8k", "0ui3dauXRcs", "I63o3HGKjlo", "fqjd1Zt8DIo", "0Eo_0TAX0R8", "bv-8kcr7BkY", "APMhb8woxGQ", "YNDrVE6boV4", "v7D34Dp4vbI", "u-uHSpC6RF0", "Kl_jL7Z-YAE", "eSDYzHNI7so", "vYl6WTEUh9s", "XBaSQ8hAfkk", "IfGW5TFJaJs", "rxhfFsAzjII", "teCBwO_vLRo", "BWUDCic6qfQ", "rtvByqEK0Xo", "ezQn0C6Zfpk", "HApRF_ME-c8", "NUjp6hVeCVg", "LNsVpjhXecM", "mTKtOSxB608", "jP2BZjV_A1s", "d2l-Aup2QMM", "DQfBn0Qc5TI", "FRGMABhv1Jo", "HMYbeWhWUvI", "PUAwDPUNyrs", "O3hnW7Kcp14", "DGvoJw090iw", "QNlwh_4CxGQ", "P2XzzlLA8wM", "Ccn0mTstOac", "xMrVtk0phh4", "CGz7IlotuOg", "bh8QQ7EqiBE", "gDT5gyJt6rw", "_YDa_-hRGEw", "VJEr0rIKzx8", "FtES7Gd5gHE", "eNtxs66z-so", "sdtkVfFN2u0", "Uq5Rvc8S3ac", "We_Firh7uwI", "FkjNbTCFY1Q", "iswNTWUHOZY", "JUlL6vqdjms", "2jJznk-pRVk", "OgYLRyu22v4", "zkq-7PmToXA", "XnyWaxukxYU", "ipUWRcrnatU", "grp9vjohWKc", "Flad4kPep6U", "gEO-biFgrNM", "d9izfWJl0Jw", "UfATeG9vRmg", "V9gSmiAM748", "oN-Ot4DLD_M", "7P02AihYkCU", "foCORh42CT0", "1gGQy4nxyUo", "5AW5swV3Lts", "Uq9VlGbYRYM", "XTi5cGnVTzQ", "6AAbFiYuQBM", "JLyk-psQRbY", "c3dm1oW8_9I", "bqfSPU7oo0U", "NXa2Lh469_E", "RN9if02iQHk", "S6ecoApHzMU", "9xm5PXpd6yk", "zlCUqLY8edM", "3us0ygbG5m4", "P5_if5eAgyk", "7f1d6JJJWTg", "u1MCwFHA9AU", "M59J_SfJwpI", "ZP_lHYEKBok", "HXSEuTZvBNg", "7ltyGlPMcSc", "172cvIWvPCM", "1gsZG7JU48Q", "Cw_wBTeb0D0", "NjaOwh4bSR0", "xUj_jT9ncoI", "2YR4v5i0PNA", "p1fnB2BWfVs", "F-Skxm4kM_Y", "rNCFVhDpLLI", "GqawYxoArJc", "m2ETsC1GkUk", "3Xjc2NaZ0Zc", "eeNj28ZMzkk", "Lgvxa-HBmXs", "WniTfJC4Izw", "FUyGWFOjsHA", "YsfCpZJ1oes", "9BmsOVEvhS4", "clZWQcxJZWo", "gBIzdRjRszg", "H4VBeuBFrDI", "Ed817IiD-OY", "1OAM9DOlt_Y", "4oGq0bnxN54", "plYw6mGcor8", "ZrTjkkZnEIE", "qf-Z7I-1Ql8", "mPFOEz-2a2Q", "BKt2caoBlmU", "rKglIIOEHU0", "J4JnzLDxkBQ", "dVqmhJ0KwW8", "jwtwrKh67CQ", "Uz_LMxNXJXw", "Aw5BMLLqNm0", "5HhKQHR8mSc", "fFpeT2Y-kNY", "WKtfKoZ-qNM", "7MQPZcHvEzs", "T7urakIisPU", "oZhxxKioRqw", "nGSQDse5_AA", "6QXSu3SZDAQ", "G_40HKYZPhQ", "9h9Ub_hAhTU", "hmemg87ic3A", "2Yj6-O99N2s", "JqiWd2ccU1k", "iGSUkRvdCXw", "nFAXIQZEVI4", "rGfGt9FZ23E", "kbkEQpcTtFQ", "fBrU3jK1lrs", "_egJYkSbvHU", "yyr51SskndE", "JjNK9S-uttk", "I8H3cCfNcwc", "T4FJNnQrz5w", "lraVa6gSWBA", "HIWEvLKEqe0", "VtYXX7mt-hU", "UdgQaRICEig", "vZpLX719WC0", "J-_KnNpZoE0", "9TwW0Jfkz3g", "vOJR3BXei7o", "8W3bJGflOic", "4ZUwnb6cSs4", "PT1gOPKe3cw", "KokBOdCQ0Is", "oUcwpN0h6ew", "JhU8BJvRL80", "l5mJUAotCe8", "gzMCejoZv2s", "6b-072VA4UA", "l9IKzbbcCs0", "g8p22U-5yVA", "x1WUi3yUpl4", "XLwQoh3XIWE", "sXtTWiMpkzc", "g6c-5X8ReMs", "2--CkDdAIlo", "bYa-VrvV5Lw", "qq_tSrkP744", "RMhlToMY_uM", "w3N6tm5ZzH0", "09Gfo5B0z50", "LiYeFffL7RE", "u155ncSlkCk", "i_TdiL4vUeg", "eJulxYIWhMs", "Uy9lnUooUQE", "TtQoj59ngFA", "iaEs8s8QZFk", "eM5-zFlDzwU", "jb7PS8r13BM", "OevbuYwXDw4", "B6MQYcCSWLg", "_icER9I-SMQ", "f63_Xyt_JCE", "NUZx9CTjoaE", "xa_psdlZmvM", "ql4Fhcdp8-Y", "kj1-rR3udNs", "cQvqIXCy_OI", "KJAdCyNNYsw", "v7lCneZ8bzI", "X5WjE469WrA", "sI_zBj_JT8U", "N5HtZLSCpSw", "wy7iG1h4bOs", "8wF3TVAUsp4", "menR0N5huDE", "NIUsHXOYJJw", "IMaVL4QHkC8", "zNOTWjIJ58E", "p7Ycu6a2liI", "SM7gsJyunvE", "5EMPSjfGw-c", "9Uc4MvmV0uA", "3SWmoZ8y-FM", "Qasv4tkoGeg", "JF8-n1VGbDw", "jUg4Wkty_E4", "B0SHliKERpU", "pJhgLB5VGu0", "uFnhbZUg7Is", "t3plI0uzf6Y", "HVFAE6UGcag", "hboP9EPftME", "MTgZnGUKTAQ", "oXr5O-WNJUw", "lMut9oLo9W4", "p0qf48lXD4M", "2PkBD14vWh4", "JkNxbHCVnc8", "yXnC8GmIL84", "hEGiKzRU_mE", "YvKLmwerfz8", "QpDZkqvHhOs", "xPuv6sgx6V0", "WnMoyGw2ovo", "izDg368pU9o", "mZyvw-t6MII", "43y3jeKjDug", "ZUebgl06aAY", "wqpK8toITxI", "opXqnI9RIuA", "Ogi-X4ENPcA", "FEUdYACCSwo", "oqjRN4O8LC8", "Xkv-hZERIBw", "XskoJ1BWSv4", "1_F_uNwoYHY", "DdJp8Wr-9Zo", "KKnjV0r5_dM", "YD7wHcgMVQw", "_QRb39LSIMk", "OsVqK_BaP-4", "UE32mKR9z5E", "optQMUU6OeM", "bpoJkJ2WLe4", "IuUO60F1Z8o", "r9PByTPMA4Q", "O9HwNZu733Y", "3TpzwKHz42o", "ZDR0kPbBNBI", "MfRzXEPcP9A", "cYCXjP4-RM0", "RpG-8YlJ7jM", "IF3v3dld9Fw", "Fr67LtzX4Ro", "_VyCY6RVdTw", "OW_afuMeYtk", "AA-TovqCoyk", "zbCHqYg70lQ", "fvwHzl3z9QI", "3rVEqoz8Ixg", "CrwhSDlzHZk", "XGZivz3plgI", "5eh4W08AyC8", "113ZWDFDnk4", "QW6oC2pb1B0", "FL8zpO0qNpQ", "h0pfQIx_Zzo", "m2iqGd88_s8", "UDem_frW4YM", "M2_JmjkSr-U", "_HcQby1iozY", "A_9-JKdIwEw", "Uy__pjeBoSc", "zMKPkIf_eu4", "QK99A8jaoo4", "s3g7xcxl6ag", "mqkYlqf1pQs", "7qDi4kF_wIc", "MBZukKY_MiQ", "NNJ_K7mAOms", "6SCrq4dzAHM", "tx3eVDbtN_U", "hUvfWhQmEMY", "KBsOH2PWjUU", "I-3gFKEnHLU", "tJUOHMMxSK4", "fXvzXWSLRu0", "g1f6CRtpZEk", "CBt1iiFH8mw", "hFc01bhwTEU", "CXFtO7waO7g", "B5j07j40dQ4", "BNt4QLFEl5o", "HQ5xDPIcXQw", "cfL_EcfYiFM", "ceVAMwSYu0w", "dnI7lS63VRo", "v9qnhrJAxdY", "N0iuSBQ-zj8", "bgFTEjhsZL4", "ZFmLrTpOAfQ", "Ey3c_lJygzo", "INb5dY-v9Bk", "0cm_O0Rr2Nw", "9eEZmcjY1Uo", "BnN4YDiUL9Q", "fdphzazNjt4", "gWkSEU9_kII", "n5LvB91Cv24", "vTz8ZEvn3f4", "9NAnorIMXTQ", "l3tTByEb1k0", "cGs62nWPgf4", "zt2Ucut81dw", "uvOBea1r3H0", "mxGmF-E6qXU", "Un-XseXoBuE", "yL0ZP4Y3ivU", "_vjY9lzkvm8", "5ZI2x87O35E", "8LNKaSDRPmQ", "SyZ6NcADrAo", "UdXk7Fal3dk", "fz2G7MZqgek", "LED6DIEjCFI", "zmFljwkROTo", "JaPMRej72Eg", "wmfhI2Hic-M", "dpQkx0WJ3a8", "7NsVm22cr6I", "3T9OPBu07jo", "PwkocmDMmO4", "-kC7o248GYs", "ri152pmmDbI", "dYtfrB3jIwA", "8UWRzk7Sox0", "M7n2H9uRtNk", "GF0ncKYJK9Y", "VxqMMrujhP8", "0VvPgrU-IJ0", "coz2DR2CIWE", "f1gxv4swl4s", "BzboSGEFDl4", "gdGzfIwYQ-8", "dBdXNZzLOPc", "WcXo45L3osQ", "7fOzPmiYSRA", "dvApS_uDFrg", "7uo9dwn-_Gs", "4VDroiGc5jM", "5yk6ziF-1ww", "JluOugqc_7Q", "iih82tdQX50", "f0BZFAO4yP0", "IVVUkUEFSkg", "AZzQ3fHuw_E", "siNQhsx1VMI", "74cOUSKXMz0", "qGHkVYKMggk", "ROzzIVtVVDQ", "mxK_AS933QA", "MFbfeuTjNNY", "1O0A_2Uo1W0", "vWjl07A3rZg", "cQe96Fj1qAs", "zQqKuvW3MQ0", "A-YudZ4It1s", "HrZxZbUJxmE", "3_q2MuTz4o0", "yYn-uHnLeGQ", "ITQpIItJ-10", "cpXD7--85As", "DJ_2TPySMYs", "RwvwEwd5liw", "Nfi-DH9u-7o", "C1UcKiILF6o", "7XHQ5zDpu4o", "y5bg39nxadk", "5g-VrShWcaY", "EjeoAoTAOHY", "ZAf7FXih-Jc", "Q0LAIWRYqkQ", "cDTIMmTu3A4", "dgXY2h_V8m0", "J5TJb-P4MjY", "afkR57WTQ-o", "YS4PaO5uDjs", "0g--4XnMyTQ", "sbSxxsb30_E", "W8CsTP9LYkA", "uFGWzuqHj6Q", "Ex0bATIFg3M", "U69u9gMIBWI", "wV4lQaUw0gA", "VKkhtN3Pg7A", "OVecYTeDHVo", "AAoXg5ePAXg", "bC_CKodHSng", "Tzt20JwQLXs", "zIjLT-hQ56A", "RUnvd3xVbpk", "egpkZq32oUU", "6Jw6CdoBy7s", "9ayKQjWgpg0", "lrQT4EtDGxU", "H4ijsDqRF2A", "jQiVSU3h_9Y", "-mgD5a34NYU", "ZjntmWLAhUs", "UEShWfdUfos", "RsUqmJcNTB0", "7WwGkFbwygI", "o4Cm28qspDw", "uAMSXqYDRwI", "VwPCjRZ8gok", "12szQobTj9I", "b5crnNJnkVk", "YlsTo-YguVY", "xBijFtsGqS4", "jl1jFIWfpUg", "VNKtMmYk0a4", "pFiWd5oHPHg", "5IqlpSZhRIE", "RrARwp3Cn70", "rAim4iX1_2Q", "yOQk0chG4oo", "QwLxvEalFDg", "HkgY9JalACE", "4uZ6SmEnjNc", "rohwyApZ2SA", "xngl4FjJyhg", "IFh4iR-GJ2A", "5rnxdoNBXkg", "PCM_uFYhHfs", "b_fU73At46M", "hnxhFbHi7iw", "HzlRZKrceXg", "crpvqb2O5Rc", "AjYikzxgpB4", "RYBDTDSjK4Y", "-sHpb4lyiOM", "yT0kuhwv6Bc", "TXtqj5qPKlg", "HE1QWWR3mbg", "CIW4O2vX7No", "ub5jKuIPNw0", "H9lfZncWCS0", "V5zKhEutZQ4", "ll72vq3mDXw", "vIjZoS4UVhg", "CP6HknysdaI", "NOyF4J5AGoY", "Tg8ubReGFXk", "damFcMNa_yE", "pv49maGVx3s", "n-A-qTl9D-k", "-J1SbTmnsE4", "nlONHjdUv40", "QYZRx7YKOZY", "XTka5ztYOVI", "ZbBcrPPsJIc", "3q0SbvayFVE", "ybtjjIgb6b4", "GygfHC8kTiw", "lb0MCssitys", "RB44-Chp3Rw", "ry1jmv-RTfA", "VPKo6PMdkLY", "zT-dbgVoA48", "M88vMYEMKIY", "ma7-AjcK1Cg", "Jn1iS_w0K8c", "vGr3AuGJl-c", "Yv6L8YjTgiA", "9XyDX2Pd2fU", "W0BhVK4aXY0", "3TuKioTDq1c", "mkAhiakmb2I", "zWL5KPGgljI", "_6SaaT8IyMo", "PM45X9G-g4M", "VKjdc6AQLtE", "NGCzCSihxGs", "Has_LGfDJ1w", "F7UC3KMhbxI", "DkeH1DD1J5g", "WIyBvpQ4844", "kb-uCvhRq94", "eAoj0bhKs3E", "_u6uJfZb2G4", "XGm6XRFN0Wc", "zhXsnqEXUt4", "CEFYvHQDu5w", "gqTnWsil7-o", "5u4fyVOoe7Y", "iZ-PwiH6v-Q", "_NiLXpkST1k", "YGTtORzpgqg", "hR47zFQ5020", "tGTxRL-SIxI", "3hGe0ANMAAE", "-DgigD_IQjs", "2ua4bG9VhhQ", "4evvxooEV5s", "dIJsdaO1DxQ", "23vWdSQFarU", "tFV_9HRUiI4", "hf7SyqftILA", "GTDYCSxS67o", "B-X1L_7C7v0", "k2vYf6Q6IGQ", "JY8-gP3Sw_8", "9Td-S0fTIGY", "saRsq9pe9Hc", "I-szwkhEfXw", "q7Z0yZhyz0s", "B-HF-wBwQsc", "LzKTncOTIxY", "URZ_EciujrE", "zIkr69UA3zM", "wZ4dxsE3ZgY", "w5uFWvqqVhw", "m3ufa4YHw0I", "cbSu2PXOTOc", "qNeNGp9tg4o", "07i2xqBoAoU", "J5bq6MTpeVI", "xKwONiK8c98", "VJLGtJp3CHg", "R-HSPmD3bg8", "X6OysxrQfR8", "9HNoA3hCHzI", "GTt7bEHZbkk", "NAAHfhR_XUo", "aiS9OJtzK5g", "nE3o62ztPpk", "HZdHHsmT8UI", "oLw0z6x6pZo", "wYV72YCSIQ4", "73dGwcHe1t8", "ttZv_i1kq94", "tBR2y2KJr6A", "qmkVIIf6VFc", "B37MP6c_EtY", "5VcCWKkMe5c", "JO6aUj3xb5s", "ViZ88nFdWQs", "pTMQz7r0ZAc", "OnOWALjtUnA", "BPxrAvl3Wr8", "NDXaaTAXS5Y", "xzuvdxXVYDk", "plEqIlxXcls", "BsIc4iVqfCk", "eq7kGgae-bc", "yIl0SyWsTkg", "0eZ1BLWzFnM", "wxKak59YV0g", "1eA1DzIJfO4", "9csO_7SGEDc", "hrfnmiSLvFg", "bzIrZseKT-o", "G-9fwEHahgA", "Obl4iRaUO70", "h4z-nECGaZc", "LDUd9h5miq0", "VHis52Tejeg", "y6im8x90WEk", "fZNdBxK_d7k", "g0S_Ce8vTac", "0YYg_pzFxak", "koEK7cabn2s", "3m8hA19m1iw", "2ssQ3ZnG9Is", "2xw7J_eYPBo", "m7EEPp0uMIw", "uCBd0vScQyw", "snwNf-6QXQ4", "F0OgiPD3ZtI", "pVunueiTrvY", "qLOk5b6beGE", "N6c9Z6Of3lw", "2u_0P_36XVM", "fAJDi6LIenQ", "-8EfLO___dE", "28bQw_QDUPQ", "VPGx1y5C4YY", "K_3MptYdZSw", "3ZXQRuf24Oc", "TvP0Aq1nhW0", "CQ52JXkJNAA", "cFWZjv4BYog", "iLIJezhD9r0", "IEJLViFTn60", "dhEuml1uzas", "LXwQd2bjZRo", "s_uT9o6pQ10", "0s8CR_Q_RXw", "iNqaJ9_sNj8", "K9hplPZN8Lg", "lfWxMg5SOck", "UQBUP1dpdOI", "7FsJ8tj72zE", "814H0nBr6DU", "bSgXrNvw6rw", "7lMOgKkG0e0", "5KsP5fZH2Sk", "-cADURllBZ0", "wBBl2xmBHiM", "_WqivYlFW8E", "OcDZjgrmn0w", "Gjzjbw-nSnE", "ReacPJGrfRk", "m2xQqD5641U", "INawcyle3xg", "73ufNVLWXK0", "1Ah2gVurP38", "Ia-bxFyRbjg", "1O5H3TVaqvM", "pYl92OMJWRI", "WztHpjSR96s", "gQ27F8mN6mQ", "gPuNDnUefko", "TD580UiMcHk", "UTntObJX7rM", "ln4lA0sMsY8", "LQmCK6P3NPw", "ytmN21JXDh4", "sHYDr_a7nOw", "CIrSnA4TsRs", "7WYHf6gWQ3w", "ZVuMg0pBvdM", "66MJTef_LMQ", "rnOYMnMCdjc", "wos1ZRsdKXE", "O820VnIUtFA", "kVx4VIkFR0s", "B3VO04yr_X4", "ypIY9WEnFcM", "I9YT46e073Q", "F0fA3x_75O4", "3atzuzjDUSw", "KJ0ZhArTvtI", "J7JQkdvCQYs", "8oISFWCPgoM", "y14755f2chI", "aMymdQrEhF0", "xWC8esvVYPg", "2gIU28hYh1k", "AROzj2wUgJw", "JFzK05s3LFc", "Mf9O6Lb-muY", "4ozgRhlg9Fc", "IEhXircfhSw", "huzcNg7ONmw", "nogtja5IfIU", "_1b_qPL_Diw", "lJlEvdn_jFU", "15snsiaM52E", "2DPiNW9VPCQ", "G4jlmCcYrRw", "1ic6zB6VEBE", "F1vgtdIHtqQ", "7veH5G276rY", "fb2giFnE_58", "9wyF1jnHBxo", "KsPYKvdIh08", "4WBhtPlhM9c", "13VbzE8K-u4", "xmb3nSYKZBQ", "-3zbILm-9pI", "wJ7nBf9R6Hs", "vi4HT43kg5E", "LZxdf4ChJ30", "GnhDaXcZnnY", "T0kKomUzdoE", "ZV9Mb5iRCno", "bLMYF2FLcE8", "DYWHd01HUlA", "aDpLgZUb1uA", "byw1Giqg9VU", "RngwH1ghFVM", "7-XZdjgokXc", "p4Yj_YPhw0I", "0nJ084dIMuI", "4XctgL1V1xA", "hNZtCN5fKMQ", "7Vny0nB1zkU", "IWKoqm1jVo4", "CAR0pFqm1vg", "Rxwkkd56lEM", "zn_-8IKvpx0", "NkXLP3VtMS8", "yK8TxCuo42k", "_m0FZa3g2lc", "6xKCBBpoQko", "qAWBAtitsNU", "C5TFqv1Vqt0", "ux5Ek0iXojE", "VLkPL9DdmYQ", "-4h-nXLGUVQ", "9DfeBi-9HUs", "eH9y-V9z4pw", "6WNTMKFLjZQ", "uClZ-Jfmgqw", "SFEIiyJdOsg", "4C3JGejYgS0", "HNLKCSdr9XE", "fLcNOjkniJY", "RHnUYzks4uA", "PRr1QRmAt6A", "CWzcdUfJGu8", "qEaEweHeg_M", "FgtxKoB690o", "VLMMLfPs05E", "v6oYjoBWaRE", "955vKdUdYuY", "CSWulYLwuvw", "_HVGE-t2l58", "Vph33kEkIa8", "TzIRuvXZAL4", "mI1aliPvff0", "v0KfinYm9rI", "o9SUHlqdKa0", "V1oJUCqMaDo", "hdatSAjZnpM", "nXSjwRI7gNA", "rN_wkzDqNSE", "NTPOH4Hn2hQ", "J86GJuY9ArM", "2jJ7BkXGP4c", "rfbb4yRBH64", "DjAo_9eSPWI", "pPrK4-pZ-mA", "gRE09r3fAtQ", "f5YhaOtIS5w", "FXgsiAydAEc", "jRm6JIgdaYY", "jyCmnvBbm8Q", "9DC2T6Jh3M8", "nVfaOvaW8qQ", "k3nFJscJtnA", "psgR0Upv5ec", "Iu0XA53WQeM", "F6qhsC5MEcQ", "e3WIeTExUQE", "Sdt58ySvuXY", "IP3qh6Qym40", "fs0KLgNzQHA", "DAY5TEfwfgg", "7aop01CZLAs", "fptlCh12gNQ", "7RTCjfBAUbM", "7gn895y4wkc", "nBlnhZWmqBw", "rkVridLEmFk", "LzK4sC_ZYgc", "4HmbDRsSuXY", "3n_1MqGsOnw", "_FyuIo2VGO4", "NFgctTZ2XII", "6QSqKeNxLQY", "W-6T974xnuo", "rU0PvewKg3o", "TfkYUPuvNoQ", "gyF2mdfF-1s", "Mulrqztq75Y", "fseK0GFFrE8", "BbFERZ_Mxzw", "P_7XTSTE8_M", "pfoegHxzzm8", "VYZ81jIhVnE", "uNiXvO00Sio", "e0fIu5RtWwI", "MbiekExF4Kw", "UiN2ZpAiU-I", "WLbs-Af8vzA", "xzidtSceePw", "zjC28RXW0aE", "FrPDo8oxrr0", "xKpoze03YKw", "WTd_zucOyDA", "Ko2BzpAiV30", "kgf85K79WIg", "DF_UbvsaDS4", "66bxGmRzooM", "TD3OM-TvASw", "L55Bst3FlYc", "UgVlRo8KzsA", "lA9u6YKj4Ro", "M4E57plNtTY", "lcdl4d0f3c8", "N442CYatL3A", "UBjPxQI_M5c", "_JF9dXWKuJc", "VoRi24Ep0-M", "fnWFdgmNFfs", "feWMeXIYJiE", "lpVE-ktjqN8", "eJHmXLt6qr8", "pGA8Xi4QohA", "ONPQhiwIevA", "SFLazW2T9kk", "vR_nAGe6nDg", "iCZzpHDpoWI", "ItwTVF2E4Ng", "WI2_qsW8uUk", "6kIAI_hWiIQ", "gVBB0UG8vew", "0PgndwJoDB8", "L8Of3Xlq8LU", "4qeY7dmrsR8", "A4MU5BXPGcw", "CNXJp0lhcHk", "vnAPwvPW_rE", "zunX7g0jS3I", "z9QUq4x0pJo", "-F8eGigDNXM", "kfDURh93PvQ", "ZumxU1gs1C0", "vAtIjozsxO0", "48S4mhJ3jdI", "zoV3NTAsqA0", "UmW5d0RBxBc", "yaiwt0r5GNI", "gCJv7cqUUnw", "kGbsV9mwzSw", "jdIcMe8GtV0", "RBTz53-0zZY", "XXycT0mBHMc", "l9RPVnQ48lw", "IpZlHBD1sdc", "hdcaIfn7EIc", "b0Kcj2Sy1zU", "ADXPcls9Sec", "fP9Nl9jpEzE", "GYzPmtriDkY", "0IqOBEejMus", "hZwKC3Ej_JA", "hD5JeUnEjgo", "1Z_59aOnwq8", "f1e3PDWeq8w", "FsYTDIN5G48", "A-Jhyq4sTKM", "FmkPtcr3q_M", "2VCY4vME_3M", "_SfkoT-FC_Y", "DsKRmOgKFYM", "bBjNkukX9lY", "hjftU5SU0tU", "RCKtEX7DVWg", "yyoic0jJA_I", "MvJVk_BMvnQ", "VnAXAgR0xvI", "2P7AGPiTxbI", "OgbBLBWCOSs", "dBHrKucNazo", "od6D06zj0cI", "VWgT9xfka-c", "SpQ6XI8e0LQ", "2g1qFfKEEbk", "rHXhszPt_-o", "j8SytTltHto", "uAl2h9o9XLI", "kIy379XW3zU", "6JupSwdx6D8", "Z1l3cxyeC_g", "cZ9MEQtqQFc", "JDb7ARKHz6c", "-O3idZB58TM", "zyGPX7A2wrs", "bFpsMHjdKos", "yFG1LYVgcM0", "GsEY7nWDJW0", "rQ5dW11UUz8", "nfHPrPfpHhA", "z--yO5Ko2q4", "-XhkMucueiQ", "16miHFin4Ao", "5_olYwoZnc8", "jXtbhmKkxHI", "xg3nKA_sOno", "G_nnN4Lq3q8", "mY__AIiwBOc", "Am-nKoamoPA", "FeV9AYUQ8h0", "5Y6GluNKbuI", "xxNWmeAMSJg", "NMeUB0hEPd8", "TeuRwyev5uE", "ud-xSgYc5qc", "w5imX1_O9Qg", "Nvm3x3tp1iA", "5xFjEw7o-3Q", "HA8X43M_5jQ", "7GLvlSXTMtQ", "wMk2uQtolAU", "j60kVMAqxiE", "-l7AKHhrZt0", "4yFGBinnmTU", "F6Az6l_Xe1w", "diLYNZEy0VY", "OgeENKSmHGA", "8C1oFp4BKLM", "nlpYroAYGMA", "HX9oDGkr-4c", "DoUxl4tE9-s", "xLiwQC-7OOU", "0WMzEtwDxgY", "jKtjg_8sHJo", "8Op5CgBKHdQ", "DR8YKzRZPXs", "WSKCKZ67D_k", "frWQjPlTScA", "BEmfgg2oQRc", "tkcsDEn8OqE", "qfSk2qj8_ig", "dG0GyS3affA", "W6qYGifQrwc", "wVrvThO9W3g", "mcLsS_idliY", "sHA3ZNWVFRc", "f3cKAkVrpjM", "kioarSf7Gb8", "6FBTtL33yfs", "3dU6TevwrYI", "pV08tEMP8qU", "nvGrTgbp5fE", "zVjyfWn1dxk", "t4Le2Tn9WQE", "8aIVFOxPl8Q", "a_r1JiMRnok", "iSjgv2loPQ4", "qUHYpX-zUMM", "JddWuq_I1rs", "eWHnHBGhK10", "GbOiLOApRfM", "mGFZSMacCAQ", "wvC8Pt8XP90", "cKZYBSs84Io", "uI3M9jrk9w8", "iVCcuGEpTlM", "f3dN9ypiFLY", "ZVMxuVKi8Fs", "kPGGXw9JSSA", "4qUWbal6n2o", "-PPaMTTQ9fI", "odz-zcfXhsY", "jJw9qjxD8rk", "1wS5r9SNFfk", "iATGj9y_OYU", "geiawpxYuF4", "Bl6Bo1S2ta4", "6AGpPh8mH8s", "h1tb3jSPWI0", "wEehPwzezWE", "sRxe_JHv9fQ", "mZJXTUEUbxM", "FOBplnwppiM", "b01puo1gfBM", "BaIt953sUj8", "GdLomV9ZAXk", "QzK3YZgOG3s", "WkyjeA5XpEg", "He3xkp0nLy0", "h0WbtfpnNcA", "oomrwo7S5b0", "LXNuus8Rt7U", "3bXg6HzDqOY", "x3YBxU2NNTQ", "bA3paLj1_TE", "wo2SkTSDL3I", "dDI8iSnsnms", "DXQ3F-H6OsM", "X7SJxF_JsNA", "oMNurWzrwPE", "7nrJLbgbpo8", "PlEOjJAOnIs", "DVjG9ZBf-84", "75RCQZVB9MI", "EG9AZIcAFEc", "-svq4_AgSTA", "xi_Jw-do5Fk", "4ALXMYMKxHY", "w7yiTlRJelw", "O7dQrWCWqu8", "-8GM7UIRc3I", "lC8XZWC6khc", "pXs_qMElmOI", "xWsO5DuACoQ", "svXfvPRBMyg", "OzzVTYSsbfg", "k_yeSORTvDk", "GIX_I_W4IPQ", "Kli602xoAUs", "J7IWAMpIAMI", "R9zKXsSh4M4", "x2tLmADS9mM", "QZTEqoJQOZ0", "oSkfUF2-0lI", "5dfO65hPWp0", "Ca3UplsZh_o", "AJXiiwyxwE0", "tJmDfArZQh8", "1dMlThVPhS4", "HTftmbvtGZE", "gh9eAXbX4n4", "dsAHxmibZFM", "asAKjlZDSFk", "Fqz0RY6VsS8", "w13f4p0YnqM", "GA3NJXFjwxc", "YYnIzyoHN3s", "wnE1hYu0NDc", "HbOWkd71uE4", "7dAkjVDwsqQ", "Xt3UkvgWLbo", "7gs1gAxOCII", "CmaW1t5_MHg", "1nSWLcqy0Ic", "0sxxZu2TqZI", "jXcLM_5uy44", "wlaQazA-UZo", "EbLDzrIF3WA", "XnURPQOA3qk", "2kNovbTwrr4", "4dgaoKPJSEQ", "lTUSJx_Ygo8", "tL527AUYR4c", "iH47bnHXKTg", "PFI1VAqmqt8", "CHWWIOk5qe8", "YK2-ayHnj2I", "UROrTDbIY80", "WVCkwqirUJk", "rP13JWdj4EI", "TWhLoM3lYkA", "ugvbtMIUU8I", "ngngU0DEsxc", "7XdUFJBXOa4", "LTDCzwE_uQg", "EE6ig1FR2iA", "l_GMwGkOWqo", "FcvU24jl5pk", "lL3UnWdX3X4", "TPNW1OpmkzU", "NqjihOFUxrs", "S1aSRjyHYTg", "y7Yo9gVlW-s", "0knJr2eE2Zs", "FaPRcC989Eo", "eVYy4Hk4OwY", "iglvOa_HpbM", "hvg29eKdxr8", "dGN19Qzcfh4", "6Qk-ErtGwxw", "O9JdI_d_u-g", "C-ogG9_KzUw", "3p3-QKhoa64", "hvTFhyow0BQ", "J9_YQTRxBG0", "CzME_PGSUu0", "q2mdxYXzPIk", "gmHg08gfinY", "kJFz-gGd8JU", "Tegi1v6iEpc", "6c5OeNPMdP8", "Cr-tADbzpTM", "eJluoT4vToM", "o0i341WufHI", "DyxDi9NyTGI", "6Z-wELDFwTc", "gint9GY6oHQ", "5oKpdNnrvDY", "lYySLwmexcU", "skpuOVYkQ5Q", "SZA6vWt12w0", "1HkB1pTi-0U", "D2qMSQpFwRE", "MquCYhO62hk", "cIyozVQwhog", "ii8ftqVq4Wo", "CL4QBU4-ZIY", "6jEEhnW5nRc", "xgs9o8tucyw", "vgd20co9vp8", "XJtZGyoa8LQ", "hrURDrferXM", "8rqChhJ4GGw", "VJw1XoJlmvs", "QBfnd_voRSg", "jbdJhndzwVU", "698RqFEPxOI", "1bTBm2TvSuY", "OgfwVw4qNoE", "9LaJZGdJLeA", "y8SmMWBY5Qo", "n0sX6AHhp6A", "B4W6MDfo7io", "PYiTG840Q_M", "FJWx8Fkf-wk", "uav_Fgkpi4E", "XbCsrCd4fts", "xmQin3gaowM", "iOfFP7jyzIg", "TcfHXTP_1ao", "omMrVGcWa8Q", "D8QS0G3tcqY", "TrtDy9oISyY", "wV2zQ07kCbo", "Kt1gnJaNj1Y", "nen1A8Xwx3Y", "Yw4EMHSoFv4", "dA-pZbsX12w", "rdJ0uC2iWAA", "zoMY4fJN1aU", "H0LYAx4rTDo", "XLXENKUiUHo", "bIK9RFFNYXY", "Oqh7dcLIKyU", "NwvbJg3jnBc", "aKw7x-xmkg0", "Isr9mvLEDhQ", "nyB0ngkZZJQ", "ImU84SpTFIg", "s33dpJPiuxQ", "3nJ2a1dDda4", "Rh3hW0__nsw", "_yrFgyMgLi4", "IoJOEMKk8R8", "BmlzvTxyWXI", "5Mri6Mkp5U0", "_LL8eC8NwNc", "LkJnbKgjL9Q", "4Wym6_lXHk0", "h251ZMpcT5Q", "9hJGDZKElt4", "_c6R2Z-ni4Y", "I-BBMHhkavI", "-2Ed-Y9lZWw", "wkzQ0ZyuK08", "VxxR7uhSu9w", "cvva2i1gP00", "MOX80R3Dpj4", "jv7Hwrcu3cw", "hAw_rQ5_mjQ", "hOhzdPwL8sw", "lm-823PuCKQ", "rovh9LlznDk", "SZedWyx3FXs", "sVq6HDWyHvs", "pIPmYZjCSgc", "c3LD-pPNG5w", "iskVguU_RMo", "U2W7fjuXOgc", "zdBiovFWNV0", "f0Oi4qDVjBw", "4In9JDO-U54", "h_X67vZ_DkM", "eSxf8JnTmqE", "t86N2vEQWF8", "92V0BfxsHJo", "Thv_qVR-uMM", "wDFHuAIxznc", "fXeZeU2yFXM", "i-k-H5PA_sU", "IvAJ8fioKFA", "ZJ0S7qNzjxA", "MfCandIB9Sc", "0HKEhsWWZE8", "QnQx7j5T5As", "mRx5kwevtO0", "X5zRQAfZrrU", "aGfuAjHuMTE", "Vfg_ej0N-_o", "E7Bskr_Aji0", "O6aju9scF3k", "u3khl2bf6UI", "Hpv1l5kn4gA", "UXXOPag8wMs", "CAtLu3J9Pac", "j4gVMqlHO4I", "rpMm26kmzR0", "nAU3GEQpjco", "k-TadwZ1jUw", "YEeqle4Xjts", "vJQkmiXzmoA", "JMKCD3aYWtM", "KMiAyOD3_w8", "piTDeVDglLo", "aA8r3x0kOO8", "mi1qkq8LnQg", "bSQrKiN42Is", "gue6suh7ZlM", "BXumwfCV1As", "bbHGWIwPSuI", "e-dci2DsB4o", "dmcLm_AqTYY", "DwpGx_yEmLc", "Gf_TN-CyrwU", "QC7yJdhf33k", "sOAgmWrH_bw", "O_mAuuFe2_c", "CdVtZOv79H8", "npnW4vwpp-E", "4SuJEaeAKnU", "ayCjixaP1gI", "9at_cpPvIPY", "60IZYNuMv2g", "9j3CHng_Lsg", "0raso9t-C-Y", "bT0dkb1s8Lo", "F9iuKSZBmLI", "pEp_-HLZmaA", "z6VF0CjKM2o", "wb5TJP_Kl-k", "Zg4ika7Emd0", "faj4JXwUkCI", "byjN50rNfwA", "Ixu3S_dwogU", "PhcmmnEXpSk", "DUkvRfsDVfw", "vA8uNR9ke08", "0A4jwPE1SdM", "tRqjC92Kzv0", "pjnF0zG3HVg", "0QLQ1q98U3I", "2ona3OZWeOA", "F8ic6-DgX-U", "_d7zHaW5fJA", "bBSj4r6272w", "FauGCnkH2hw", "jT7vrkVcsz0", "d1ThKPbTbpY", "pvtuKh7Zeqk", "zTsUIVkUHLI", "fCltTx2L07A", "xBNIBSNW2ps", "Q5fvEb022sA", "PPBtyHhhHfQ", "EMmvX0sZ6hI", "yrdCcgpMKe0", "UsMeg2fuqUM", "4G9vClY1Te4", "Aa7FIsrJIjc", "JQVxUuEsNvQ", "bRoWV1Ne4_I", "-nBTWsXVTGQ", "EHlEeru-R7U", "MWH22pwQCpw", "BuHJshS5rxU", "qdEkwtj8dCg", "1JihtZLYlcM", "kD9qGqBrcpU", "9eqXUirX8Z0", "c2xNYJQt1xo", "LBAvMRuJ1E4", "e2oQawPvKlY", "WO_3Kll_utc", "vGUdYAi2moI", "q5vtFRTUkN0", "WNjxk--MUTA", "41gjJ4GLTqc", "LcWTWYK8b3Q", "643qYVF6yXU", "2w2_NSQEvIM", "ESDt-yZcPlw", "577NHr4ryto", "TIwv878yu3g", "QwHCCxwzKtY", "3vXW92POacc", "pY5WBaYmHMc", "0yYVJjxqFD0", "GfosUdIG4V0", "DDpEtNhISXc", "ISrZI2LI4F0", "pE3Oua66JWg", "bAFcKI-uQEY", "aERxZ8fu2pY", "HM9NfkGOZWE", "fkCBlR3eJQw", "2QlTvlLaBx0", "mgaryK1Y0qE", "WJ3BAP28K0E", "wqmvsmhB6yU", "yE-gfLBw_zc", "v6KAgCRppnk", "ZF9rH1IB738", "qlJT4zNV340", "hg3TbrkHKNU", "jJ2dRCF9ioY", "jYBC5Fa4Das", "G0mpqKKIoaM", "qyGFvZ0RxE4", "D1e38c_xvIs", "sQ1KoHtqejo", "4yn_13JHXXc", "OsCj9GSygWI", "86CQs_QkL-Q", "M3CuO6FrFzY", "SF0Ewo5z7c4", "fbaocJEa1cE", "qs9gKVL3HZI", "cOrFXi3SD2c", "Qgj-eGuV5Fc", "w0hVv0eQquk", "cq_9rLMdz9c", "kGiCS0oeV-8", "ad6OV6eopR8", "5MM5E1VJmKs", "PDpnubSiXyo", "_ZJgRQmKOjE", "fHQxyZCNn9c", "f9o-TsNOX5U", "dFY9aWwo1Mk", "72TmsXTajt4", "g92HL07NSTs", "wCgGX6z_2yM", "97q3BgOlXe0", "Ov-N-j8x-UE", "xvITnLgBSUc", "UsimjGy6XKU", "AuoTR9rtgaI", "oY0iRqz32FQ", "fKWjC2niy-M", "WtJl_qJBv0Q", "9wzAJggOgPA", "V_IG70NNGhw", "B4iZKf7aFAc", "dKrECvTeHpE", "SXPPakP9TTA", "N4iiUSnlUbg", "0UMjTE9BdSs", "GM0ERR2oJlw", "Ow8PmO22Vck", "rQbM8b19Tzo", "1Mu2Fp3SeBo", "FA2zoPaLn78", "lfocB3EdBXo", "FHzLpTKZWsk", "7LLPLGZwpFo", "xWcuJGlD9_M", "1T3fJ7f0idA", "_K5W0OThgHM", "q-56cZvgDwo", "zb0kdGbZGLo", "9rH4xqyl5ns", "HQ8ESNqXung", "X4_R-qj5QiE", "hf5feoLpgDA", "kg3BFD1HDnU", "qpg-IWbR-nw", "acEiCuGfNL8", "NJLpZNs7MIM", "93lNLLR5B1w", "bDciCSFNkxo", "z3Ja68bAI-M", "ltjUQlObJ14", "vazBBtcUZ24", "qNLCe1ugMg0", "ufzLo7Vmzi0", "6bRaZkK1l6c", "YSQMi-lMQvI", "spI_8HYk3fM", "FEfpXG8G6e0", "jqH8qdqu2P8", "onKNzJj_LxE", "Mqr16RSj0fE", "lhTx-xgPHlg", "ZSujTtAsnFg", "sq1HgKA9gjg", "17sn0i8IaE0", "UkEil2vpyGA", "NMMA1OI0geU", "lqgyexEE5cA", "j20Gsx9rxT0", "jjHH5yoJg8o", "F2yY8ItTJGg", "pATdZawWenY", "KaqZRlmamQQ", "HSGF6lk0XbQ", "NYsKFMELtY0", "b3b3jWqAX-o", "7iN7GG3oXbA", "MMEmRZywK9c", "GvR5Zt_rVQs", "PjNjiTNazCE", "Ao2d9z9W6ec", "kUVkXAIJAME", "bEiiRPshRkQ", "psxKcsO1r0Y", "FSUSiodezwU", "hwwe370QOso", "lnaQ1KP272Y", "u0SDjA3gyZE", "f627dlOT3dk", "pd8ZKxgDnEU", "uzJKFX1Jxi0", "boRy5UAF1a8", "IcB0Ner74GM", "uc1bYBvGy1Y", "fqA5ilqv45s", "wJJ4O5WJTRU", "TZuVGnSTV_g", "2GxBXu3nGVg", "MvZRiAVrqzY", "vo4pMVb0R6M", "WLhqbtkGHK0", "Ii_TvOpgtzI", "vHrmiy4W9C0", "uWWEodOlDGk", "dK31gK_Te6g", "Nkx3gG7NtJY", "7snnRaC4t5c", "WsbkYVZpJA0", "DcxL7hhVruk", "Qwp6wDfg3Vk", "_qqwq8EmTY4", "iwdDH0HUCsA", "rMHus-0wFSo", "Xk2zGvKfrhc", "Wtl2hmHZCLw", "TkOxdINRO9c", "x5NZx2p4JRU", "qoBU0r7pT84", "1NwvCj9CMuw", "pN0V-rxk9kw", "0Bqs-oHBBQk", "Bfh-qNXukvo", "FyuDBDtHQZo", "qTBoCqq-KB4", "JUQ2Aw8W3BI", "GIUpfBKQJH8", "xHWqlfDZnmQ", "ZEYYVAKU-kk", "ZePgOTqXA2g", "yrkw-1xSTH8", "z5G2zQ_3xTc", "Z_V_Qd89Jg8", "Y1zbE21Pzl0", "OF4-w4ZIkYc", "d-rm-GvNqsA", "P5P0fGOOfwY", "6MPAKoU_214", "HOUQ_k9HMY0", "htGGc5tT-VM", "5UJFTRWXDPo", "NMcOlmNCGvc", "q7JKAdoZmmg", "35R14SRKFl4", "4RtL7dqADd8", "mHZx1QFzg7A", "z1S8s4fiQv4", "scNC4qDe9lI", "v3u3XSuq2Qs", "RCgxopRDjqU", "dhQyT6VIAxo", "w5QxiD-YFEs", "9frWzYgcM9c", "L5LVxjgHxI0", "7ySfzAqxJjU", "b-AXEaznmYk", "Z_Dmk6L9y_I", "uG1xF7dA-Uw", "f24puIQ5_Ik", "tLy3sFkofjI", "Yt6EhE2y1wk", "Isci2fXckps", "Q1gSUmR6jkM", "mAp7Yf4mAJs", "mo7-bQzH5oo", "wtO5xdANpoI", "3ebtkCzZECE", "7NCrgw7SD0w", "4o2rTD7nd5E", "hZZr2f1EgJo", "cbxINX_APks", "DzfFVdD1sDE", "jQh2NtSVXTs", "py5p6nSG-z8", "SbPcCCbIH8A", "B8m32zrSgwU", "3GlaFUL7hfY", "TofYjgiWxSY", "SlHteISpLCE", "uAYCJyhcHj4", "r-qOqws_1Tg", "XFcTPI2RdB4", "36dAowY663E", "Tl5Pyxq5ePQ", "afaHfZPbxA4", "LOAsvNx1WF8", "zBgXNjUWyOk", "_HeYeHaQuqo", "cRMho77OGEg", "q2pBtx7nPyA", "k9QXeDi1c94", "SBJ_rrwXY60", "QaN48cO9LeM", "sRy9lsBcPkc", "GCGVTn3fJ8E", "WkubTRlB0M4", "AMoc-M2fne0", "rER4v3alSfk", "kEN8ROWGRi8", "szalLL2dtjc", "WZs3jzakoi4", "FVpqieXJgIE", "5kkm6mLJaAs", "-CQGQp0Bi5o", "-aRrbDsui0k", "H2nxGvVUFAw", "5uR9pb6j8qE", "CgP5NosQ2Vo", "mx4R67oZL3w", "VyrhRUIC3p8", "L2s9bJzU4NA", "7waNEY-effc", "GmP3YGluIyc", "ktSFW3a6bas", "iDr4PJvPS1g", "VtgB2pCC73M", "zJukf-8_jfk", "3Zc1UJ68wSQ", "E7B2-jfGkzw", "_BI-Azz96oo", "lIOjk00njxM", "DKB2WUKaxzg", "w-hzkrcD98U", "m4TFHn6vkrI", "oSo_6ADrhns", "05siTn0pOok", "q_MQR-lfavE", "21TxMdfqKNw", "F6fzGD2aOmg", "t3Cb6vUW0_s", "OaaqZyBC0rw", "OBqtEVGDMGE", "HEhkm9_Le_w", "fDUhLOuGT4k", "IEPI1W0Drsw", "jRYVuMfUhus", "cXo9YczQBo4", "O5fzaIUfbi0", "06JPjeQaZMA", "Xg-FtXl26sY", "FGyK6SxGfKU", "AzFgnAYLlFI", "615HaIYr1RU", "FZV5UT8goV0", "uukpny_fDws", "wrG4tIgFbbs", "g7dujTbr5ik", "9GNZx-CqMrw", "LAzBoG8_XwA", "Xj1Fl03TUu4", "x6O8xE0oJUg", "6J1VTMaR2kI", "vVda5zXnMvc", "ru9oYpGqzoc", "MyxaAzEJvtM", "dgdLB3ycqF4", "Ug89vsJ4psU", "X4uFVqDMAOY", "z0kj9fLQYx4", "q-b3jLZSGYU", "EjsVJdHVHW4", "reF_RAOE6A8", "SXNakSZneIw", "1snAr8MhfWo", "5VGRRNLnyQU", "QH7OjqZtGFw", "mgaY0LhrVRk", "KEPufREzfNI", "R-I_55mLcNg", "nxxQ4lXM6hk", "DuaGRGMLnwU", "u6xAmbTAprk", "CG94CKNiZoI", "RtP_zDln4So", "Za1DGMdLkmo", "f2XsQkuAsaU", "O5oAxxzTG34", "ExElfOqn5B8", "GG8M1Huo_2g", "nTkjQ083G4Y", "qmvOyENC7kI", "dQymfKW34XY", "gt4PQ66_7lg", "M36w2DgTzT4", "HqxffqEDVBg", "1IXuyM5JkEk", "LDPpz_dF9Og", "p0NlX54vKCA", "XxyfZT_EC_U", "mwM1TyzJhc8", "om18CcEUO9o", "xrVwQEg3u-M", "fkZTf0Ifxwg", "zm36D7yxw2w", "NJ_ONAcIZfU", "2kkCFyT-Xwo", "PMz582fwCHw", "nPfwvVll4BY", "PNDiZAxDr-Y", "JdNnKRQcSeI", "ir3tLIBk5DQ", "1oslgvxTXUo", "GH4DpvL6EUc", "plRmMjwH07Y", "mo2gIoVK_z8", "b8npdce0TuY", "gV09REUKQ-I", "1_k0stwxkkM", "-9PdwxbPNeQ", "f98UPX2CFNs", "rvCSvQTHDkM", "l806yMynMHc", "_gZ1htIuHSg", "tfby9Lup0eQ", "9-jypICibWU", "gp1yfzpXhgw", "kSrkoCDvSqE", "fFehkK0vVzQ", "49HCJgLfhg8", "_FUcgieiU8s", "u4NNS9ebvyE", "41ileLnCiSA", "qMQi3XI9Vus", "czebPdAgTyc", "VaQwG3TmZMM", "PC5TVh4bYzc", "RsMNg072OqE", "3c7XtGzrf2k", "YiYKpJujDRw", "DHUmU34CkmA", "IUwQmfh855k", "RnU1mb8nvKk", "RKC2n-Oh-U0", "L7epvsNlfsU", "UIo8DcqdZ_I", "9T3U4UfcJb8", "_clss4RgGYI", "NJarUttN9cQ", "8MR8glHrDkw", "jpT1f745G94", "sfUEhfkmOKo", "XZRa8jP6bHg", "tkLW11WSIvY", "qoxjpz_nvDM", "Jio6X10Rv8Q", "XQR893xgxp8", "JfeXw7Ty6iY", "DuJpXZtUhgQ", "1olBYBqTAYM", "fvYFWqf2qEU", "FZvdzArX7Bg", "ThCvbsETvIw", "2OfiTGaYoHY", "YK3PXFM6YWA", "9OrxYk-UpBk", "PcutJGIywq8", "2Frw3Ji52nQ", "o3zC6QkPRpw", "jfJgw7hgBNA", "XmCp39SvpiY", "sZCHw8zJ4Ig", "9mQYhyMEZlI", "0TpgwYogpI4", "rkDr3t5dyFA", "Qk96EsMCk3U", "EprQj4qLkjs", "fQmPb_ah8dE", "ymVkv3GFzN0", "r-WRsk_S_3c", "Olc1Wo_vo2A", "fMfuKCi255c", "HcudP5OkARw", "xLQL6b8IuQs", "bhb17HI6NnQ", "B3TRzX9WYMU", "DrPth2lxeGs", "1txZ0BMqEoU", "EFcRHOn8wEc", "DQtLx4MfreY", "1ShreeGGdAk", "Xbm6nldyFxg", "mlonSS210Qs", "y0nK8VK_l9M", "RiH3l92Bpyo", "yzXjWakwpPs", "nzkiJTVvyCI", "XopP25MVFwo", "aJ5CJOMzEmw", "SJkBdNAsKYY", "I1pQM3HwZbU", "42bWuYfWOYE", "jmxqvW68VHY", "PDbCJHYJMP0", "GpabMl3gVkQ", "c6NhdkggbI4", "bWcG_XvqUlQ", "t5cJB6JL0_k", "40LTKSoi5Xk", "PJCwEISzYl8", "2U-z35pM1Ks", "DTeBTi_9_70", "1ziRPg0NkIQ", "XzdBnKKaA7I", "BLsdIY16hls", "M_fefBkcjRQ", "I9FQ25pnWpw", "kMTow0Whs0g", "hpf1OehyiPI", "Nk6ZrFirnnk", "1Tgf9qsOW4k", "fT6CLE9hnJ0", "EM2w8l3AbUE", "CPLRtpwd6OQ", "Nu6TcXKNN7g", "fVtxSk5J1ss", "UF4O6RIcsPQ", "k5qEbgOVyDc", "XBR8SHu7LwU", "4a_VyclNaJ0", "4jF0b1E3x_E", "l47Y701pRAs", "tUmy3Y8b6p8", "1Th4NrWO41Q", "QkgAEOiRWj8", "zXaMpxSNV2Y", "1wV3lLGftsk", "SI-ZK2R07WI", "nq2WHDnzdaE", "muPRO77ZLRE", "LY0BE2whtsU", "sgUrtp8W8zw", "e0fVJGtQeiM", "9KzOjuOnOC8", "vXX6NkeJI6Q", "rrDerbW0veM", "66punpspdts", "zGttw8Oh5gs", "coq1qNO0C6I", "LhBH88mzDAg", "bIdV7bbhRsI", "bDP_1etpUSM", "_jx_WlFQE8s", "WNMyABsgK0Q", "Z5tQSlzyOcM", "pKiL1s6AoYk", "5-QqtPjNOn4", "huT-dqlxkMY", "bXArkv-g5LM", "Hl0Sof4w8W0", "P-poZe4QheE", "A0NvtlMzzEk", "EN-JC34-U_Q", "Kf7VzC7mkd4", "G-K_OP3EpcM", "IUAbcjLG6ks", "zk-6iz0ZKoY", "vjiTcRWAKaA", "EGw75OhJgrQ", "-LJvkAe5XHQ", "C_WTowAoNT8", "GWoc43OnAP4", "NHZ2OTo9Yn4", "wiFqyS3cGyc", "CFPFP-Vahig", "iFXKyr0qMw4", "iXQtn4aAe0c", "_KnvnASkPbg", "ykrbtKt_vS8", "QjuWqBzO7qY", "PiMnhy_5UXU", "PGLRQfMSP6s", "LUTQJrL_XGA", "NsogJw5praA", "--F0YUYsTYM", "iCOATujz02M", "flypv_xYUYs", "AVEqjhLK8Ro", "VXrmCZ5pnJM", "twYDi025qIU", "WhZ0U3ujKGQ", "ifIAKxNSLoY", "e-VEj8QmRIs", "nZEXNJP--EU", "nMeJfn3pV1o", "lMocd1nAlro", "z6JwDj329rQ", "bNn_o2_RZtE", "7h8-3kCOmFg", "jxut4i1ESOM", "JtvrJaNLGG0", "H_aKtGPN4BY", "8MlhsimUuBE", "eBltYCrvPkU", "74rqx_IdXuA", "TMRwi_SBLw4", "WCMKWVeJsRY", "GVWbJ7Yagrs", "0vvkG7kYGuo", "euAwezGt0GI", "_wdzbS3ObE4", "VU49JjBDZro", "UxJazjocRgc", "JBin8ziCy7A", "skyd33yM-SE", "AtKTrHyOlDM", "mYtcu18EulE", "ONzzJz8R8NY", "pmKxWWvFNvg", "BEmOw5TriEg", "ei23V5y_ioU", "7OYdJhGCCEs", "qOsI4PUuS8U", "BXQHn7l8b88", "C2empxvu4Nk", "Tm-gHwm6cLs", "MWtFQJ8Dd1k", "6SydzoVx1o8", "HDkQUkBUk00", "Ctx0C8Pp61s", "7J7rFLbQrUw", "U502MlZXK4k", "rZfzz-A9MfM", "hYQrb7feGMA", "pgAM5-hEsp0", "5RWK0btar1A", "XwoxHiSB7lE", "_SQYTr23x-k", "dUjH-nL3j7Q", "zHRghiyL9Rw", "KhAQ_ATMYbc", "nF1bllsRRCs", "QDhpXd9_9I8", "lECF-1WLfk0", "itA-webg8sI", "jc2O_gFDh4U", "Q-nuAC1EWgI", "H6jlqTYgB-8", "AScPyutzSAk", "sCbJYHneso4", "VFbzLMOJdN8", "OccTvOlJOEE", "UE_rqr3hzkE", "-od1L21qXRg", "ggn1bRnxAnc", "IO18YZJr__8", "xhRY7MoD-fE", "ekUAZnEkb3s", "zjq7HpQPcdY", "bahe-cRT6Sk", "fDABo4GCgwQ", "VS6DLn3Gq28", "iux69YiqDag", "ykzhxJxtAwE", "Nk2pHmLnTt4", "opTupWtHzp0", "3KP81K76wRU", "AxeaQwuF38s", "dm12K07vsmY", "cqFkRkS_vM4", "SpssJ7Mn9EU", "jdi8aEnYAzQ", "R03oMy5tzgg", "3oqV6yHj_x0", "BWWpscqf3LQ", "3AqawmcxKLg", "69YCmRT5m90", "9MyIOtuIQJQ", "xEwUlE-z9n4", "Gfvfek0HIiA", "ZcEPmO-gYTM", "8qhy5Kt4nhA", "9p6JNldfLnE", "cZpzf5Ll_L8", "SMWk3M5fdkI", "WAy8NttOfd0", "cDEVhKWVzx0", "cQj2VZJlBn4", "jGYjoiPUYys", "nTjC3oWsXz4", "5vcbN42hiyA", "CftHwMTrvqM", "2gXi9cH9BDk", "5bkbEA5NxfE", "TSIChCCjwII", "eu7x04rpwYU", "pkijzUq81mg", "ojAYqc-uytw", "Q5Leunq_jm4", "ouoqZ7CkFBo", "j75yL8vnvr0", "VnDbxNDa9Y0", "K5CTKyVehq0", "gGf98KB5t9U", "dRVUVBd8FJo", "7oJ0qB142wE", "P10_yUrCnYM", "jjthdxSM9Qc", "cAuZ7uZLiPY", "AYNDzQ8oBao", "jyosSrYanho", "NESqn7OTFy8", "IZQTWChSiMg", "8tAR039py9s", "IKStxVBswSA", "t3KUH-wJtXA", "Wi_jQ-DJ-qk", "gsVXSCD3NXU", "yRaeZm24ACU", "AM5EOwakN4c", "y2jauH3_OQw", "G3XqBbJRQm0", "Fv6FdElLiPc", "P_t40ANQBh0", "KC4Pnltq5aI", "XBUhyTpWk1A", "YRDXmDMsEjE", "FJO6xrZ-vrc", "n189wcXdg-c", "A6NWWwOZe54", "OTNCYaaV8wI", "YhkYQX-mHvM", "jZoHuMwZwTk", "EjZicBu_2Y4", "hm8f5Kj_CrY", "8o0agVNwtHo", "lJMCiCb685E", "7eKGKPms6ik", "7wHS2bwg-aw", "vkWM6mz_JVo", "n0G7yGIMEYw", "dV800MMrseE", "JA6u-sYhFi0", "r47W42iYPZE", "qNHl9RsHrCk", "dUkQTJO2z0o", "jGjeP6K6Pyc", "VasFcOcwYxo", "UcF8bK04Ufo", "TojN4FgYiPE", "d-xD9UxYkno", "0ctXYCb9fmI", "35rdDJ0Wa34", "4qbV9cSMz-8", "gb-T9sqg6Jk", "9ZsdLK7-F5A", "ZE04aMHEeUo", "or1Ey1QhlzE", "muQpWzG6bW4", "CD_QOUUfn4U", "qpNXpZr3kbk", "Ybio8qM42NM", "_bb7BuBzszo", "BwPke4lJK7A", "dUgq7_LXjLM", "N0gequcu6bE", "qwTax3SokfE", "AzvGuGnZ7aI", "KtOK0IgUQ5A", "OHa1BlgO-xk", "fIwnpSioZcc", "6A-FSaWCcto", "SuEyR3SdbZ4", "cZvwJ3OkjzE", "bD6gzvHuXAY", "CH7tlyvnKLQ", "sj81x2jrA_4", "48EY6dkwQII", "8pTdnXEn9ik", "iHX2lZ5x39s", "OE5mboRvSJg", "GDPFw5d_RmU", "y1kyCw4-aIc", "ZOvVoIKfglc", "bVMGzlOm3dA", "UuyfKmTpZEI", "hFfNL_EjyfA", "larPJyMbFcg", "jHu9AQxGefY", "3NsgMhLsuoo", "09fNvoQMlGw", "DQPcMl1knyM", "14Wte33lAVE", "TouCxOoRgjs", "qOsfw4VJW_c", "c2LjmkknaVA", "Uu3mDt-glAg", "ipB6P1uzNYM", "J700sLKkn4M", "3FtPMI9_uBE", "bgJ8E6e8rko", "xb3IxAr4RCo", "8Xl2xUKSGt0", "D-V4-w9pptU", "g2OurULdW6U", "RN-vzamHLGs", "fpbypZW3gSk", "8C00-hnGlRw", "mvOQcfDgfMY", "2DcpPiZHZVo", "RA5ja3G4ZeY", "DaJ0JAsJEAc", "FAJy4wUIjtI", "oVsQINCMA9A", "ehFpymQQYx4", "gTngkMG3EBA", "qnUQX6vXbek", "Fp-59oQng24", "Rh1xX5ascMs", "3BUoNJSPujU", "u7RrHA6lDVE", "kxg4s8BKLUw", "znusY6SObQA", "kodVDVtBr7E", "pcnBrS6lIhY", "Lz6bXo0YcE8", "dZSrLIKhepg", "5jMJf59wBJ8", "1xxlhyjkzaY", "ngVWupHJzBY", "3AsvcUn3XQc", "HZpyTTsx0xw", "hfD3gevx48Y", "ZbN6CtktnY8", "_cs7gv-1Zr4", "4ySCf4bl94E", "c7I8kdzH2LA", "FIle8g5gJKI", "yAo0HBBrtok", "6uzk91Vm6_4", "r8drWJPuEio", "ltZkOdmGLc4", "VpaM7Klh5jE", "isGNQILKM0A", "BoR_k4Go9W8", "-uVmogHmmWw", "Mk6JrUYLyWw", "lQXsOeBKlCM", "y17y8hhDKfw", "O-To1g3uJ6A", "wZbrwnP5XRQ", "NEK7lMTEDaM", "nzIT_7Ls2yc", "9YPbue5bfgk", "y0-V5na67Sg", "IS2TkdConpM", "odVRmclMi-k", "7JfhKCJ8zcU", "8725SBRTZfc", "4eguDQMWEo4", "zKaka9iHuco", "JBzFzm1PYwQ", "Qtq3Z_Vj0Qs", "mCZfxF3DWdA", "iCs-9iEr01Q", "iyKdPoD4-FI", "4ZMoKHWAf8E", "ADaEi6Hym1E", "H4vEWZ5x32k", "vVxxR31vRQc", "xwmlj2Z_uhE", "pwBC1FYZbkE", "qSS9KkfTxmA", "mSSo3od5HHg", "LqXu4nRzlVk", "NHUdOVW1spI", "P9ESbVztel4", "FfpjR6Ze-Wc", "d31uEIH9oHM", "vP1PXT93jLw", "97cNBCJtTSk", "LWsL-_pgmTc", "XxnntE_0T5Y", "JXrqqCHkAGo", "6DPB0tsNtOQ", "UEuw2G5usMA", "mfI3MIbbkgM", "vGBT95nWsCk", "Z-BIL6p1Te8", "MJF4St32-wY", "ZA5qRm8nfgU", "yCn-YTti1M0", "r6XFKqxhrFY", "SKm2KYe6JDQ", "Lo8-AdkZ1jk", "opFHZqGxe6g", "hxkRd8T_wV8", "VF-jgltXozk", "2og3_YYAv9A", "JvmXVeem2lI", "EHrN-F7ao7g", "RCfGVHgfMYQ", "Xa-d1flPPsI", "8Ej1NXdkxo8", "BiDeorIMMmc", "_ofgNkFNV-4", "WZF201ld9X4", "5nsFtRFJTjI", "iRLfL92_vlk", "DH9U77Wo7nw", "88KPe5zEWdo", "m-D8cPccxQs", "Zq_hD25T9Bs", "he-0uIBAioo", "kUBgsVJYpls", "c65HwDlL-vo", "tPrvj3Ha8jU", "nD-tZlOSrdg", "xttvdfpHhqI", "N5E1XMTEPCg", "amwp6LmMPKY", "TpfAHJmVNrQ", "6hAlskSBx18", "17yIhaEMisE", "MTH-1GnhKgo", "Zz1QKdjryYY", "_unzChWuJEE", "fZdI3G3qqsk", "MO3-3NJRdOI", "OhKT_PHl8hI", "-3uKfIydFiU", "IUcFNtwo9JU", "y1Kc0dNoDQg", "L5-cpqQv3dI", "YmiB65Fdk9M", "i_J_nUUcAzc", "wVgVx7JoEcU", "4kIMyPmjiOU", "kZJvCaNXNsE", "CxWvoWGBiT0", "cOhHcDN08i4", "qVOrKdsrO7w", "2CGxOVBGzBA", "cozTa6csjdU", "CxB_n60Qz7w", "Rl91aG-jtF4", "OXndUEt-Jsc", "ZMel6h2jywk", "FlRndHxsL7c", "z6EchXyieos", "geuVEpcvwCw", "cqz4Qb0pPOk", "dfpBqhAeBAA", "z0NK-WtJNSk", "TSyA82rgZiw", "xQYJ8aTRDqA", "dliYDM7vG2Q", "aa3nJY3nwrU", "ak4-StAUtAA", "bPmSiv0TT5Q", "fCWg_R7RkbE", "c4N0TUyIC8M", "v9gXzbnZoMk", "bSkVh5JM6IM", "2YvxqtzNZxQ", "b9uOmdN7viQ", "-aB8gzIUsG4", "pxeTesNQWoU", "EPzrIHAwZtg", "Ho2_2iMIv-4", "GwED-ZVbJkE", "c-oWC23b068", "xIzfktBYCD4", "uK9vTTerjQE", "j6MTUJI8KPg", "G7GjHX4p53s", "DzO9c1Zb9AI", "3526qXn7gF4", "T8eMNte_Oaw", "RcnDZ1YjH2I", "_rrgmbWAwGg", "6ntqeNTlzIM", "thA_RbDUqYI", "7jM8YUz4ZBQ", "5zGXA-VrY0s", "yR9yQ_MZBkg", "JTe4HzZ8hf0", "OpJEV2gQvjw", "1Nt11gbRa0g", "Tnp_ULyfiUc", "AeL5z0NAuHw", "aMDV2tfY9rM", "bfzkfI-GTaA", "WLww1veqMdc", "O6PL-AgQYzU", "ACjGjKzrfak", "g-qp35Hyuy4", "dZB3JZjk9lI", "l8z0yYzFgaM", "QnDc8PLpLZE", "da985bydxFY", "bXs459-pGAk", "8TVXkdtW1Y4", "rCzSMBh7KeY", "1ptpKt1jBgo", "nxicxiYW88c", "5U2i7yPiajU", "7YzELFnyDvc", "XaTow9FQ1iY", "SdyV2pkoNoc", "M9t8Q2GWwvs", "ZVEEJ9Wf_XU", "ynAHOJ4k-1s", "Tz4WYhMeQF8", "X3I-vwfHWW8", "PCJ8K0-4DAI", "mWn3BMDMrLk", "9CNyBw5DFJs", "-hNcYFIRRjY", "QGcEEgaZMRU", "uJnKTR1uYQY", "6ONX3GtnYy0", "If2uE48dWu4", "_0YUz-bTybo", "PCA8oUhyehQ", "QQ-yqEEQRt8", "yDqPUzBwNy8", "LLagLf_AIqM", "B39xy0Ub6Kc", "DeR-aKWRIq0", "WozSzwcpYns", "5L7zCkj8UDA", "x1Pzs-IJrBI", "HOTDR_cfz08", "dAH909odp0Y", "pBPae5hdJ8U", "InDCccHtzPI", "jZ0WI4Rtpfc", "Dn7XbTYAkRk", "TuY6UYkSHsM", "Rfgo87TeSeo", "gAIhWzLffho", "wPVuAfzSAoA", "ZR6e3Bh91l0", "Gzs23083xqw", "lF2g7otKYYk", "LLBXB3dOiOI", "jW0q2sP7zeM", "4Y8c_Yh120g", "n1kKrRBzvBo", "JJ2j1tuVmKU", "hW-j5r19sMY", "PiAduEOe_kw", "kZlrReK8sHA", "D1PZF-Q8NWM", "aT8oJfqc8Kk", "7SePW2oR6SQ", "57PTq36PWg0", "0YhbQvsTDi0", "crODRN1_gOw", "N4GTxSgaCjE", "7kgRa6dfX48", "9uBEKCuyd9c", "O-4CrGI5uHI", "t69CB4KxBC8", "JQmZ04EcoAs", "mt7lsmpkpKs", "L1bd16AwvMg", "pXOYNy7hAPE", "-cgKBl5UBmA", "mpEXbH0d-GM", "ESgLJc1pWCE", "Bg5ftqK_SL4", "OkOs2qXJQBI", "Dt1Y0rg42gg", "RH649D66hEE", "b08icQbeAZA", "k_PTXQ7lYpo", "LoKj5RAPuyQ", "Y5ap0Warq78", "apeXdreZfOM", "QtjEKFLkkWM", "PTfqWBLfaj4", "X_93H_60Pls", "tOGSnWvrpYI", "H2KShkSLoho", "HBlXuwiwkFw", "6y87gtGcZGo", "lzX2iv6DUoQ", "-nCCekrgWH4", "Ty43ImWJQUY", "TYPFenJQciw", "4DBVJDG4nfk", "dYz_rsWvV5U", "Msf0PyowZm4", "RsGeBCkcSjc", "FEikMmRRuL8", "4XYwFQhUyO8", "XdQR_gGUVf8", "8Ou63nR_kmM", "SMza6c-B66U", "vjTX9iXgJ2Y", "tJgC9LYul3k", "pyc4gHZO5OY", "k1nHACUnAUo", "ssBq7orR-4w", "SPDs7QxrWHE", "LurWBHf0r5o", "XhN9n3kVj1o", "-quFMwcatRw", "J6R-nGj41JQ", "y_N11-fcO1M", "5FRL9_zxoeU", "n85-PxT8hZY", "JDqKVmuaMLY", "KXq-6pMFkJA", "nsJhhQxKSJM", "KEB0W5bES04", "SoOoeL22yi8", "JqsRjzfrv5Q", "U9FLUE1GkC0", "2BLjaU7SD84", "yF5sxD-qzUo", "7o6wuGlPIDo", "N5cjj0EZtl0", "l-R7cVmpOok", "Awa9UyI4834", "OUm4fmthPqg", "omlIQnobeOQ", "7OWO2sy9ZLA", "9Vds-Zl0vNU", "2vbRj1nAt3w", "cE9PjI_Q6HY", "Kgn6cgLydLA", "rEzF0zLKI-Y", "c5b2WIe7uiM", "IqNHPUfKFYc", "9aBCx9CH5D0", "B5QZi1wdqgY", "HZUZfB7r1pc", "nlVhtTW5CRg", "2dD7Ik1HLOU", "TrJzoxPPoSc", "lZCjrJtImKg", "yQjMsqDk0hg", "k_s31N02ZLE", "l5WXAoADH5c", "F3nHI5QsjeE", "KOzFMfXs_mU", "lmWVLg8jwwo", "ciWkf7mzShM", "N_7P8KVXdIA", "kJyJOTOdyDQ", "z_EFWz-zlZs", "CKjSrbYZJMg", "B8-O6n9m8Yc", "ZP6A7bCZ_NY", "gq9MBrrSBhc", "Eh2VZLSE4Xw", "VwR_QoDON0I", "wsbEJDay9YA", "3AbNxDX2pjc", "JN2doFDCmt0", "o7lrwGnJWM8", "2LMfSTq4JIY", "yuhuAT-gnZE", "pW6RN2tbgyM", "XMjkO72KVjE", "-66p6UArhno", "9_yuc8bakwU", "gwGeH9O8Rx4", "hhzja0zBoNw", "wVLLmQqRulk", "Z74L5UpIU4I", "EIeP9utis7E", "IEyUtgUz5OY", "8M-yhumWv6w", "gQqQhZp4uG8", "HYxMSbqULpA", "etAPY710JWM", "b6LUaGy1ChA", "2pbV8aww_IM", "t_ad-rfvtIA", "3Jbd-8iH0x4", "6ZKF-rUyuf4", "tC-0mctDDJ4", "-d58XREVVXM", "i-F-4OcyrEQ", "NOlEk0xyMCI", "76OBWygFQlk", "jEmbjiaA3E0", "liptxN3YhPA", "iJj1n2HPyW8", "kI1ui5VVjXI", "7qrOQjOewhk", "G4gJ3pX7WQ8", "c4_6LpY_qv0", "SQlv6z5BU_4", "NGryKpteobs", "cxxp1yfnlsU", "Fkxgtb1HL9c", "vqnMkSypBOQ", "6V_5FUJbNGU", "evtBr9-3SaI", "1Am0oGvbKD8", "OSKD-oGh2Dc", "SA5eW3UiRSM", "itqF-D0Sd-s", "Px_TzzeQX4c", "-q6xHjtLlYQ", "n-DXWQby888", "tOMtgJ5resQ", "pf9wwSYjuS4", "HDrxFhzcc24", "EZAaM2jl8vc", "PzkDxhmalvI", "QBQ3wbmj-AM", "7yklI_NT3Qc", "67F0SFNkQuo", "C3ANahn2D0c", "eBfMZPd8llQ", "1OtMq53QSFI", "6kpGl8LvxtU", "C2R11E9-ctY", "FgyTPNQAkoE", "gpYPQAVJ-xc", "KvNzrold1kc", "K53Dpgw_wF4", "rgr82JwESj0", "dsTlVQL8B-M", "pAzdTDFqyjg", "E7X36ASL484", "k3Y2hPau_DE", "QqvfdGTtFpw", "UX_RdWMjK4c", "jDV7S0V2Lm0", "XP49qtpOtkg", "JNmY94JXRUU", "s6EEsFqRAA8", "vFkMEeRJ-lY", "JvXi8l7aAfo", "ZcMZaT3fDAw", "BxE_PHh_mGk", "CnRmFDBarn0", "w-7tO6lPtjU", "zuIOt1u2iOM", "3ZvkS3P1zWY", "VqLKY9widxA", "OlYVz7qMFr8", "lQnf7gD5eFo", "VjA9svzaEFI", "vkrfZSSO9Xk", "eOB19fh9i2Q", "zZPxcJ-W23U", "UHIGBFlfX4g", "uaVFzqNRfpA", "rzEi9NmGOlA", "ly3Bbsk7PhM", "v-aKjLybdpo", "XUmc55fp1wQ", "KR6DybjM1Jk", "CA9DBwYFdSs", "Q8q3DZB_l6M", "ACGSzBXKONo", "6AKBgJUH6I8", "SMi8Pz8m3XQ", "y3-p8Jj8n8k", "ABCS8Ya7sbA", "pEvlWs8w0s0", "PLrvgKNF__k", "SZ7zbP5h_NQ", "xZih7Lgb5_k", "aF9lBewJDOQ", "Q95d5Ly-Buw", "nR50KlOUXBk", "3I97cdAOMy4", "GgiOqF7PgRU", "7a1T52Qip6Q", "NXdauQOTdVE", "IykVvtZcJAk", "gJXOf5iTVl4", "VPbx6N9pcf4", "PLZpdFDnp-4", "mDiH7ZMHcUs", "PXYXYc1MINA", "FIU3IUbD0dQ", "IRJ6Au1IuGM", "BQloTowdyUI", "Esm2_bL4LgU", "VxoK188n1k0", "OkzFym_S2YE", "OyRV-7gw4fg", "gCeRIldeHW0", "gl4b8soivtU", "eKV5JBh7aY8", "IJVHYfN0tSM", "LCUOykr7uuw", "URPKPBzmbcM", "MveFCK6eCxY", "CBVonAQUnr8", "qjN4_8WrbSk", "l_eHPd4i2oo", "2Yla9OJgGRQ", "kAg-7N_y0go", "DON_VxZIuhY", "j1ycZVMk7Eo", "CBF_IuSDS38", "Yv_Bs5GOBWI", "dyyEvtQbHpQ", "fB3MTSo2pr0", "L3iABk54IKs", "wjd5x-2mkJE", "IuxY39iKHdU", "yysyZtKYE4s", "NEyXF3f2xIw", "Hmh5JnVqDe4", "eDzDJ8Ipd2Y", "qmzYSHR7m_s", "wefXl0eV-1Y", "kDEqSoZkE1U", "5WBSoYIWQKo", "7bWk6LK1eUU", "DAj6buuG0n4", "oEJbNm1Zjko", "lcerdNGvhQk", "wNstF8X2vvs", "-vbf_IsynfA", "IsRbMGmZ3Zo", "_jPTyKiM8nQ", "W3vYaQOxBQ8", "wuv3WakAmJ8", "DWljhO_vNAA", "WZa0942yj9w", "E4wntypg6CI", "UXq0sP2o_2M", "onjGjWlPfug", "u38jK9972VI", "1Mt4eSfari0", "twtBEWRrKnA", "kA1QimNuaq8", "9avt25HcZss", "A4dEvuyRFTU", "X_vC_h4G_mo", "kHXxy5ggB_0", "8Cax4iKjUb0", "zte2gDKXAPs", "g0UKzmk6WRU", "ooSjzAXuenE", "nELkuZ2-lIs", "CzRgH46A-4c", "lrPzVHFlgL8", "kipW8Kg4tgo", "NX1SxFAVF1E", "EJwNO0EhoSw", "jg9JRLzdfyo", "eFRrL_BszDE", "cpX6x09Lg88", "sDV3mGLQa0c", "aj48YJrT2-Q", "ZddHRCWhEhU", "cHKW_Ki75FM", "Ipd7KeuPTYs", "bNnlz_4xJD0", "1qOzXoeoCCo", "YM7hL9wFFcg", "hWkiDqdSYjo", "AEXOjd87log", "XfeInUiInMQ", "Ms14CHWyg58", "5qXa9T-IGsg", "jANVg0Pet0U", "raH-X3rfAt4", "kBhywpTw_gQ", "Zz29BFXpD6w", "ilFTM8Gxv_Q", "YT51A0IgwVs", "TKXfNyC76Tg", "MXZykQeuIjs", "vuOhrbkrFgI", "GWoJeZydjYs", "4heDMntnqYY", "LCRbkpyKjuk", "Io8V3QnaU5o", "WqIqxWZnrjY", "1K5dsoCagCU", "FAHh5Z5Go3s", "0VTbEReV28I", "UpbKxXnIlmg", "4_3OGEEuwBs", "KArmwjzv09I", "Owh_zayM1l8", "YsBEW0C-LYQ", "OMN0OV88o28", "ipVD9flV6wQ", "ww_FN8aHqDk", "HxKbV2OSPHc", "bh8j_N0OUSE", "hiSrNzjYOBk", "UGFsC3edM60", "TdPPp3hoGQ8", "ySPwjxvG6g0", "MQs1DK849A0", "q32NI0zWGvM", "3nUpHYmqkg4", "AWxU7rUup8c", "091fhkFic1M", "vB-eQ0Ijm_w", "Zwv5m3DXGL8", "eR6-ZWYFRsg", "5p8p0PAW87c", "tA9sA9PEwSg", "ImbN3ayoiEc", "zHIIzcWqsP0", "9ZyvnNpYtqY", "3nQM6KHB3iU", "lYuYbGBbIvU", "2DUqjI0Nkhg", "ZGAMC-G_Dpk", "fvEsrhNZubk", "QF1j7_lHKac", "ER2SV-vEqdw", "JCu3izp-zMU", "3uR4LPHMwkA", "a3PmQNzgf4M", "qfsjoPzbAxQ", "7mFPi2ydtMg", "MN-56oRZsvQ", "G7sHwcyG_1g", "L0p71-YVYS4", "Cj9JYSJiUrY", "VJWqs8jTaSQ", "oa7YoQvbK7k", "Kko4bSYJQ5o", "jvjehTb9aBY", "g6qbweT0hZ0", "wir47TfMlE0", "qGc-ELhhIy8", "CZZSeg0gY7U", "GABNio3g1_c", "LIO5T9VKhq4", "jMzXnmzTtcY", "PDuGUa2LUUE", "8wM_1wmn2Hg", "Wulsv08awOM", "_z76E30Mly8", "rinKwwMiCzU", "2nFtl5X3aJg", "16IpbGIYKm8", "QTXurPZyTyc", "14iM38oreso", "v6Oz_ZCcrSc", "CxPvi6CqzAo", "Y_-UluAzH5c", "wsAE3TjqfBs", "tVlSedchqtU", "nPIwq3frmjc", "HOWWopHzywY", "bqY_UTbV0Bg", "TIYjKq4pbm8", "90lYWtcoGKY", "35CwjiK8u-g", "O8lf2L6TxSU", "kvRV45mvbTk", "RgZ6pkqphwQ", "3QKcXYNvJPI", "NxfeuYyokd0", "yyDQLSe-Cfk", "_oCoGRf-Fug", "QHorzBmHl7g", "sargwkHeMVU", "VMrc6WFlNBw", "hXUVWNP_xc0", "MDdXCPB1rZo", "5Vzc8RvJc50", "uGEIi_W9-9Q", "5ME4RpbvkEo", "3DUdHkMMAu0", "c7M9lGChgBc", "IbUFHNxPGR4", "3b3PQtVMShw", "pxM2vTue1Lo", "BiQqonPwmko", "le1MvaGnFQg", "VydTZwXnH5c", "fg7z1SINFCw", "9kPVqfQOTaw", "cGe863fMhvQ", "lF94R_qnwJA", "YAg51hgNDNE", "U1tAzTrhn8A", "_TNzRs86Y0A", "_nllrOond3I", "L-IGDOaW1io", "p0SmRkFTCac", "y0X_vhPscGk", "a6mm-yaYPf0", "zMndeAG5ZYs", "vx4tv-AGhKU", "fF5OXdh1S-Q", "UZQRZmRHnYg", "IeYDNlia8VE", "0EDF4g7xpEM", "Go9DsrB4C6c", "lfqbXzYdEcQ", "lqZMlD9RFSI", "krxV49KmGsc", "ZwiSUkmRXho", "RiLLzVOZ_Dw", "4kiiiDV5teI", "tqJG5Nn79vo", "hOSITiTpVeY", "k6S04PyZ0EM", "hFxDYx8bnkQ", "2HJIprj64N4", "bf-kebDRs_c", "Z5DcTdVqqTI", "GpkNT_qDAuc", "0xZuTRnGdtQ", "TYwkSMw96DY", "xY46caoQVC0", "FfXdtJXZ6aA", "5yYYFEhvBU8", "_mgknQyfI5E", "taLkaGzrLIk", "xM6yArDkr2I", "Is72VJgdmgM", "xDuaY9GnbAI", "zpnIPZtpq5Y", "TYicgkdcDJM", "qd4vbWaB9Ls", "Y2AuOfrop_I", "uFh2BMV8LhM", "Q9RPkm9NFpM", "mj7zGMs8kew", "pP7PZuburDE", "JWiQkuBEvzY", "sJcywneHL5I", "8UWmmGcPCfQ", "nfpeORbJhoM", "0Qno-XJwPKw", "eWmi3lDtTfM", "YZqnQvNeB9o", "pHk4J-TX_M0", "ulTkiBOCplM", "sgkFnWhKnFY", "sbqM20SSkT8", "wHYTYavEHAE", "IpkQnOOzMbw", "KRfdvye7lQA", "sOXLXJ5B3RM", "DG_q-4-BYxs", "UJlCtFvjY8Y", "S-9CkHgKnJs", "bg7W0-hAFhk", "cflYO1A6R5U", "Gisgm_DqO2w", "FDFrQkbdxIQ", "UI6N9bswdB0", "Nzj17eXgvO8", "WgmVMXpQjWQ", "P2TJ3KCjCbM", "1TdsvnFTQK8", "zMrhYXOLS_o", "SBeFwj9_39o", "vAUrn94Rre0", "UgnXPR7Peh4", "OkC_OO2ki9s", "B7h9VLxTayY", "xPqb4oorsYo", "zaTfknm2CKE", "ZN-CNXUKE_w", "Z3X609UxyZo", "Io0yiaQOOjs", "dM1zGGTNZ5c", "Xu5KNNRP3-E", "aRieDElisQo", "fx0aciOZMzc", "xB5DubLTTbU", "sTing6uOpeY", "pZf2PyJMqPQ", "cMpfnbeI_8M", "JxEkXWSkBAw", "N_xaGI9Whtc", "Cs-hL2xV8Ks", "IKL4v4ZMbug", "0KnB5NBB3II", "UaLM0rL2ZOg", "NZJK8Dn1O50", "pcPkA26y0kw", "EAsnWjSldQM", "-Yjj1ymE5Cs", "CZFSLlg6VHc", "jRPV4Yv8N80", "r-URMPp9WpA", "L5uQAUre9CY", "6y1gQGD-kZc", "9xmyC-0yIdw", "PzolAJT2o_M", "4PKXa6_zL5E", "uSGsf8QJYPI", "I1ZLeUKWJoI", "weIbdRhvm_M", "lYiBgjcUDus", "4SHusfuB_u8", "g80SC5-dal0", "XFd70hGk4V0", "5AA2AsK2ewE", "W48_PEGJPi8", "ISbls2bh7S8", "2T-1x3F6buE", "Kepp9g9Ccqk", "Vown18LKNPQ", "hbh60OqlBvE", "I5v4hfQDT9E", "oFxGQtZdizE", "SyrTVgeCtaA", "r0YfX7IWxWM", "--fRok2iLGo", "tBQyG4y44h4", "GkHVsT8qq80", "R7tlozYjgFc", "kILmct7lvnU", "lJWlxyg8YBI", "fT1XzhwpmAU", "0PTZDQMIHPU", "WNuL_I_PkuI", "8tBfSe8jxpY", "yWlFk07f-4M", "SQ7m0LtgyWo", "qJ09rYFm57w", "hoc42xegVt8", "PLvILPgpb6o", "FXnVv5Q8c-w", "jMyiEoErVf0", "zAQJj1ZJRcI", "wEtw7suhUys", "Cg7ba2VuomM", "ma-wIR00MRI", "koZzP7CINZ0", "seO_5ub5fak", "P1ru-_caUe8", "LWiLzdP98d0", "6vgQ8E3Fgxw", "6fWd5KQflsE", "ySdFW_870G8", "YniwRAsj0DE", "TjwLyrOnLTs", "ERfMt2rH02Q", "ddD_6s8M3sQ", "Xy4zg1HE_GA", "qHIumJABhTE", "hg-bLzMNezg", "FTVJyUUXZSc", "ihUw105fNfc", "se3-hQB9FaQ", "eJOMGVBN63c", "gl7MpXzqgQ8", "9zLa-o7ZeiQ", "IE1NVNBWynY", "xm1A4hRoFT4", "J4DbkhedF3c", "Pa3eEUWTqwA", "ykG9kFINkwg", "9iBiRrpVkGQ", "6YI-gwBcnXI", "zcaTlSmJbzs", "aNU4AnLxK8c", "hYCFeVDI_u4", "LDzKBWs3nMs", "Z1DzqeykBi0", "b5w47191Fdg", "qp-zmbti-T8", "LchxtZKcLuw", "pP1Ltw-lrN0", "CfdQ6J95JE8", "p1FZyF2g7BA", "CHAvgrf1I7w", "nH04qUS6nLc", "v1eV0zmUNus", "OsQAStqmmH4", "jtp_s0a3Oyg", "MxemfHKyO1Y", "b27HgYv61JU", "zwAfX1K2o4s", "QmUtx9zbrZs", "Ba9pCYbPBjs", "8eZU899qo9E", "urIdkTPnEs0", "xfsvHei6mRw", "IKfoge01nYc", "lenwwLn3PLI", "U9wddpCgQAs", "qIE-tF-AqnU", "WDOq1l1ad8Y", "-cXwXruom48", "DBjawiL6lwg", "2KsvYpukY6Q", "CZG038ChgT0", "3bEyMlyK4kQ", "g4XTeGctvUs", "v-OkNbIRlXQ", "vsU8mjHikRo", "COK9nIcjDZI", "7xsh1qjpnq0", "UoCP0YVxejw", "AHfepF__j4M", "_Pk1IaJpg8M", "wR_oyioOdv0", "MZNmz8pB4RQ", "1WNIz3wwyLI", "48HR6_HS1cA", "d8bLaqtscKA", "jxJadvdrLbg", "rea-v16Lm9Y", "NyQZbC1GZ6U", "7pSbcn1WutQ", "VSneV-RYajY", "75DNIlOwDPM", "AgD4gTpuYd4", "R_82xijGaKA", "P0M8Kv0vfA8", "IOe5Xws9iyY", "cut3BgxuWwI", "Zgh2cUJQQ6I", "AW1vobBivFk", "Uq-C6ItbFCs", "DYeN7CBdfjQ", "W3PrW9qoCnY", "BDFaP2B5QUE"];

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

const uiYtPlayer = document.getElementById('yt-player');
const uiVideoInfo = document.getElementById('video-info');
const uiVideoCat = document.getElementById('video-cat');
let unseenIndices = Array.from({ length: videoDatabase.length }, (_, i) => i);

function recommendNextVideo(isRabbitHole) {
    if (unseenIndices.length === 0) {
        console.log("Database exhausted! Resetting unseen pool...");
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
        let temp = unseenIndices[randomIndex];
        unseenIndices[randomIndex] = unseenIndices[unseenIndices.length - 1 - i];
        unseenIndices[unseenIndices.length - 1 - i] = temp;
    }

    if (injectRandom) {
        bestVideo = candidates[Math.floor(Math.random() * candidates.length)];
    } else {
        let baseVector = isRabbitHole ? videoDatabase[currentVideoIndex].vector : userVector;
        for (let i = 0; i < candidates.length; i++) {
            let v = candidates[i];
            let score = dotProduct(baseVector, v.vector);
            let recentCount = 0;
            for (let c = 0; c < recentCategories.length; c++) {
                if (recentCategories[c] === v.category) recentCount++;
            }
            
            if (recentCount >= 3) score -= 1.0; 
            else if (recentCount === 2) score -= 0.3;
            if (score > highestScore) { 
                highestScore = score; 
                bestVideo = v; 
            }
        }
    }

    recentCategories.push(bestVideo.category);
    if (recentCategories.length > 5) recentCategories.shift(); 

    bestVideo.seen = true;
    currentVideoIndex = bestVideo.id;

    unseenIndices = unseenIndices.filter(index => index !== currentVideoIndex);
    let muteParam = (typeof isMuted !== 'undefined' && isMuted) ? 1 : 0;
    
    if (uiYtPlayer) {
        uiYtPlayer.src = `https://www.youtube.com/embed/${bestVideo.yt_id}?autoplay=1&controls=0&mute=${muteParam}&loop=1&playlist=${bestVideo.yt_id}&playsinline=1&modestbranding=1`;
    }

    if (uiVideoInfo) uiVideoInfo.innerText = bestVideo.title;
    if (uiVideoCat) uiVideoCat.innerText = `#${bestVideo.category.toLowerCase()}`;
    
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
document.body.addEventListener('click', function startApp() {
    if (currentVideoIndex === -1) {
        isMuted = false;
        recommendNextVideo(false);
        document.body.removeEventListener('click', startApp);
    }
}, { once: true });