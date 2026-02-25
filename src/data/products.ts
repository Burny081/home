import { Product } from '../types';
import { HERO_BGS, GENERATED_IMAGES } from '../assets/generated_images';

// Verified TCGplayer CDN IDs for authentic booster boxes
const TCG_IDS = {
    surgingSparks: 565606,
    p151Bundle: 502000,
    rebelClash: 211756,
    battleStyles: 233041,
    obsidian: 501257,
    twilight: 543846,
    temporal: 536225,
    stellarCrown: 557354
};

const tcgImg = (id: number) => `https://product-images.tcgplayer.com/${id}/400w.jpg`;

// Consolidated Assets from PokeMart Home Variant 1 (Stitch) & Admin Dashboard
export const POKEMART_ASSETS = {
    // Admin / Core Inventory
    upc151: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxsSSCkmvethIR3xYPQKbUvG4r4rkZs93nL_U3GpN4IC6mE_Def1p-y8B3rpQqqvtgQFQV-iJ8rd_JjoM1rto5ytNArRhHINYQ7VME0fQzV9_GcrSx79FrQRDKVv9pkX1I4UbQDmmV4VVh-SsyrzUqRRYPSCOCnyKd5f4QB5XVhGoguYivGKwM-ZERnLSyhGG8X5o1DuifMwLsODnRUxFfiWII_Lk22dlzfqQXP80reXKw1dphluvZk1hG2qMtYXbz1UvrN53uI_u5",
    charizardSIR: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIEnrKf5UkQEjyfHdYZ9nf1vJDw-Xtq8sxSJbZ8CpXXnwRADJemnCK7Ubd5XBKdMRg2V5UlJFR6qamf_b_r4J-yYZEW0apEdsFFjBUdDha2kKdiSgKyRs-UhB7-dIsj89RNKZ6Uj1rrI7XJEoEvRoGhQ6BeE05VoC8mUrfPGiWiBeadwXVnEIQaG9zfA86yO8I0aOnCX7B6SySD3S9Mx4FaTVLs5238HmAXaF58XjybU43nJO4PgEo3jzUZcPKkb5vEiHL8hUsOPyC",
    paldeaBox: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRGCcd3jNzv4l0UYJtVfQMPEPe-fjNA6JJ0FWcNNiuESMXPahuDuo28drqbaxBn3p_5zrh6Ro39QYp8dQp8Vx5KKIqWCYxllqUrmnzS-fhTgWHaQ1KpcnGJrpkFkfu2KR7Fh5_nLkbcop4292iOnvf2f0Uh42X1IML_fG1KbHUtkmQmBVv_bIX6DOAs8YPMt5ao4KR8FQiUT4lKVpAiiNf4rMVKQB3ELgSyzjkn4CFo7T_I_P6n9Z5YiHQEUWdI15W9yeTQb1bswlc",
    zapdosSIR: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8Mo4fWXKxjhfdlU1aWs-XyCdTbPToPNlSOyLryAqoJUoHIh9dLtDS7W5bXzCJPACCud-i-UVvUioTCePQtTUITODzCrG3qxz3NMZOiyAUomN6gIZlezWMZ7OpE8G55i9cv_sdhYhWwSxGOsptAnRSPuJDOfhp4d_-AkIdHdzgBoPSor8fTnyavHChI5Keor2Y6citD2hSx9C7weGGpwXazL9rQNrTnpNb118L5L5GI36v5Zril84FVdj9EpZViHqGx7TbnFxSNw1B",

    // Premium Variants from PokeMart Project
    megaCharizard: "https://lh3.googleusercontent.com/aida-public/AB6AXuARX7se7s5FZb0Yk08V-vpFvHFxPtigxSaLaBok9rNdj6etHNb16vis9FBKr8MeSSEB8j9FqLkZ5VVSdOOr12cq6j4JT1jF7MGSgvGnf_Unz_-cuSZ1pyjPgu-TPP9v9hi2FWERYyk79kJaM4m9vFKvMU9bs-fpkhmra7Ir3slycuI4MkrYbcRBBmhUJgtuAzftM0Zjg8076vSPXSr1OAX0xJdstsshrsbn4OAoAw8C40OiIjj4hdFRCCPm7BHik7ZCOIhUilF4_ek",
    temporalForces: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtDU-4WRAG9dJMh0S2SfXr-Pm_RuAjWynDpw1U9pif4kvLVoyOUkuGomVLRtsoRBNDAn9YwgitmKaxjBV06BChShJit2nH-6fpOFziJTVmMverYiK4hnJ0Bin7QxRcHO3seVlL7oIg3MzXIF-faYnCeXJU96O80pNLj-ufQV4JRC4N-fJbmDuE2wxQEssqqhfF_43Lxs-bfNdqIu9lLTQtRSUhP7Wx59bnCV3gSVh5fVQGr9Qf_o99rsd7LEWCeHf9w2lQOVnXTio",
    teamRocket: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9YJbamgpUrQ8gUE3vUpPmR2cE7HmZCsu2_KZE6SZsFBcDnYQWxO1leacsJ1ZYwKjxFMZHVHyGq37kABqvBPqP54GnoUzrgHFHpeSn1ZgwsSUsF5_eIs-OJ3F_-KNfDjrHDtpNb9iP9rF1Vfc8VX2vfierFG52UP4qeszccGe_1uvmxcZW79FeB2ELAyuJUt3b5w991-_EiPWlbsFxicEo0wzi2qGbwNgtvwHCujtp4UfY8jxg5nZ1CG_0ykNA1--5I9HwQarQk7s",
    mewtwoStrikes: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj2USPIU80QUcEnTX49rtvqtavW9NODtlYl_cYN3M16aql6Tq7cxN9Ihfp6Oncy59quudIkApOHaecx-pr-4ddolP8Lzf8sl1d5DDJBsXmazfxizOSzntXSUG4OKltSOxAmcPMOqTN8IE2GMqsvJd4MqYgQxCqqzbqjsTgWQfigfhy6_lzMlSolUT-WIFAOLKCZnUSlZSGiSAuR-zSpSMnmO0nPIAEDggQ8HsWhLHdBC5XFy9UMfvuuyjKsGhC1D4obQdwzIj4LgA",
    psaLugia: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbTZy44VA58PSOiqKSP-oDKtthk0_EKY1XbUlwU_XQyXdi7gCvz3H7kK-QQJhK1mbBr363f873DUaPZaIOUsR8BZ5pPsHpcTRjwRf8asHU0S_8pJbBtPdWkJTXV8HtFl49Gv59Gvw58ApF3c-ZEaJNZkuoXEL76hm8NHWp2a7oCAHw5vZPFNHCXv4RWxGwL05QqaU0QsQq6qH1mEmcJLN2xxRC01W9ZinmX3zRaib6z_qu18I4PuF5tZjwzvQJkFT59x8ji8MNmUI",
    stellarVariant: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2mxJfoC0LB9kxJ8L0CjtT9ma-ncjwvin_0X2Jq2pGN-ATttTJWH6ltnfwSb76t4jy03vwyC7PD8HXws_Z6oxpGs2CGjoV5n-PviXQrfjZwV9m1o5Xyjky_xabtI-o7IUztRtMAQGcJ0enQgmb5-JqdVy-EVbsAdXLnCz7pTpJpfXruOcqkDPYTDF4dacc7zWldmvXrdpmPm61ZTsLYOewCMDliE44Pb6jTD0FlKkPyxPevVQ8sk7kCXiVcLjw8Exsj5YISdZ1MM",
    ancientVariant: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFQ1chZlefhjPf8KHvq_BI0UrRA9zqcM5DOJfiM3NH7g8XD83Jgy-yclrXepmtlITdwFnQ9hAr_3hNQ0FJdsR6rszO9O2RMAV3ePegrTSbmyPNsgpqrv-JMRHgLtryensit4S8ItbVIwYIJFRsb1Ip8XRWZ6fDGXCrt4UgNStInZ8xNmIvVwJuP1DMtT_x1tEeSKXT9uow13dukshskRjTenef2dCvfZR0mBGztSqxEXWZImW1ybdVbCQI2yootvlwntlhhC_9_JA",
    galaxyVariant: "https://lh3.googleusercontent.com/aida-public/AB6AXuASuxP3_N7XeoPvnwY3Nw2Z5I9zVj_Ei37kCRkl1rbRUxLSB0QBy88uf3WQUom4MUf-IPDfjtbBlO-coZQGEEgrp48PABXvW0cEktFX7rDYY4uYBPbA-edy2ZHOoDXhNwt6LxlNa8Z_FD1fMC05EcYDdmZDS6s6tMhUl3b4nC9w16cO6U3axmOo7JUwgjab9KCGAP_YOmk4joAJ7CJCdmdn7OJ1e5Q9h19CwGzG9i5Ns3I3Fh4OKsDHeK6-pSXTkC6Mpt1uMrmURjk",
    shinyVariant: "https://lh3.googleusercontent.com/aida-public/AB6AXuB73k57hYy7KAPSZVm7YPATMBmR4Ar0SGSueN_7f60pXW1vaqn677SvFX0YrKrfEGBWcxAQdlu5ovIUGmcZldRicQ10XWxATw6AmYYMvLoqL62_W8KALr52rCcBWBv7-akEa1tSmlDOrk7LcGpIxGLJd-QyqL4vdP9RR-AbG_oXvxz8J6dB29XVAI7_N4tMaJ-vyicuK0xsonDB440tkVib_Ln3lTzUig60HWAdattI_pJeSOQ3BwPX1Fz-WpkGLjrlQewtNnGp4M0",
    ultraVariant: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_fcO04dRUib6ELASPyvmuyyVoVvgM4B75fdCJnbFM5z4ZTZXpc7QJNreYAI9fTKe203Of8TQ6FAscErbC85smSFjIWZU7fHVUcvAHaFLPbn4S4tbg3Lu4cPobn7MILCTou0E3wfFqyeMEvy7EjQmcDLFdYcUfRUwISf8psUEC-TyJeBx_VBN5FsGLdeSqysgNPmzXdDyVvhM0EOuX_3IQr3WwnvneYo2P6_Qwv3Dtko2_mM1VmL08rbxgwPVrlsQKzCIsn_iZqnk",
    deltaVariant: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0zNUwmRHpTOjokAWeJ2EHaQYJ-gz4AlOnGd862dus1bSpVvps0XwpV_tt9kBMSQdt4kdAP3FYblmEK7xrfjmf-rbcuHDMuk0MbgqCdH6K0HzHotngUJ3bhGYuRQdfY19G6M_VIcF2GzvicC5KdV-KpqbWl3SbxifGx2PjjrCfrZ_CzRyYPZd1CHRJ-eywqo9zy2eAiGmOD5bSXwYSExVIpjEYSNvwKmGw0BfPx46EUwomkhx4tsALNCF-EHYa_el12WQGZvDOllI",
    // Consolidated Variant Assets
    surgingSparks: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFQ1chZlefhjPf8KHvq_BI0UrRA9zqcM5DOJfiM3NH7g8XD83Jgy-yclrXepmtlITdwFnQ9hAr_3hNQ0FJdsR6rszO9O2RMAV3ePegrTSbmyPNsgpqrv-JMRHgLtryensit4S8ItbVIwYIJFRsb1Ip8XRWZ6fDGXCrt4UgNStInZ8xNmIvVwJuP1DMtT_x1tEeSKXT9uow13dukshskRjTenef2dCvfZR0mBGztSqxEXWZImW1ybdVbCQI2yootvlwntlhhC_9_JA",
    bundle151: "https://lh3.googleusercontent.com/aida-public/AB6AXuASuxP3_N7XeoPvnwY3Nw2Z5I9zVj_Ei37kCRkl1rbRUxLSB0QBy88uf3WQUom4MUf-IPDfjtbBlO-coZQGEEgrp48PABXvW0cEktFX7rDYY4uYBPbA-edy2ZHOoDXhNwt6LxlNa8Z_FD1fMC05EcYDdmZDS6s6tMhUl3b4nC9w16cO6U3axmOo7JUwgjab9KCGAP_YOmk4joAJ7CJCdmdn7OJ1e5Q9h19CwGzG9i5Ns3I3Fh4OKsDHeK6-pSXTkC6Mpt1uMrmURjk",
    destinedRivals: "https://lh3.googleusercontent.com/aida-public/AB6AXuB73k57hYy7KAPSZVm7YPATMBmR4Ar0SGSueN_7f60pXW1vaqn677SvFX0YrKrfEGBWcxAQdlu5ovIUGmcZldRicQ10XWxATw6AmYYMvLoqL62_W8KALr52rCcBWBv7-akEa1tSmlDOrk7LcGpIxGLJd-QyqL4vdP9RR-AbG_oXvxz8J6dB29XVAI7_N4tMaJ-vyicuK0xsonDB440tkVib_Ln3lTzUig60HWAdattI_pJeSOQ3BwPX1Fz-WpkGLjrlQewtNnGp4M0",
    temporalForcesETB: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr-0nF_DQaI41Jg9R8KvZoo8xQXu_gVCmroZxjNFCPJffcAugLRjdrnHpOdGm7i6ThE_69QIzu3k-eQ15GkEhueunnaLjV9yqAmN_Y_J32LE4tmaDWlthm1sQZIEmgpcfimz8nEnRbnqvhsP50tXgtvHmFy9VY2wmm3IEi2qq-Y_dc6QzRefSEl9wpnV3VLdwjR9Rs_UTPe9btCO3gMwcF_n2q023yn1fbZqw0zC0aMqxARZYw_IsrEqu_db_qq7mSGv-1cBwqmHY",
    charizardSirSingle: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_fcO04dRUib6ELASPyvmuyyVoVvgM4B75fdCJnbFM5z4ZTZXpc7QJNreYAI9fTKe203Of8TQ6FAscErbC85smSFjIWZU7fHVUcvAHaFLPbn4S4tbg3Lu4cPobn7MILCTou0E3wfFqyeMEvy7EjQmcDLFdYcUfRUwISf8psUEC-TyJeBx_VBN5FsGLdeSqysgNPmzXdDyVvhM0EOuX_3IQr3WwnvneYo2P6_Qwv3Dtko2_mM1VmL08rbxgwPVrlsQKzCIsn_iZqnk",
    pikachuIllustrator: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0zNUwmRHpTOjokAWeJ2EHaQYJ-gz4AlOnGd862dus1bSpVvps0XwpV_tt9kBMSQdt4kdAP3FYblmEK7xrfjmf-rbcuHDMuk0MbgqCdH6K0HzHotngUJ3bhGYuRQdfY19G6M_VIcF2GzvicC5KdV-KpqbWl3SbxifGx2PjjrCfrZ_CzRyYPZd1CHRJ-eywqo9zy2eAiGmOD5bSXwYSExVIpjEYSNvwKmGw0BfPx46EUwomkhx4tsALNCF-EHYa_el12WQGZvDOllI",
    baseSetBooster: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnCTD4vr_XhaApDt-8qQ5M4xlLh_CC0H3XiI2OiaZttYwVetg67xmqnK_FeL7eEfCCaY-Xd2MxE--FwJFjDCyBJr8aETOwJYTDhI-XKY6Nn9uWaFlf5P6oDOPgZEdjO-27UUJcfAfJUA9k302Kez1m_-Jlu1efq53QI9NtFHrurH-Jq7xWd_jRDnaZUPbWSCu8wH1kIc9qzA-hSj0HiDVlxYBamxYg9iLTeU3LQxjlZXV9xFPu1BGKMDsy8wCOTfJ90sKmVxH-ETc",
    charizardVmax: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2mxJfoC0LB9kxJ8L0CjtT9ma-ncjwvin_0X2Jq2pGN-ATttTJWH6ltnfwSb76t4jy03vwyC7PD8HXws_Z6oxpGs2CGjoV5n-PviXQrfjZwV9m1o5Xyjky_xabtI-o7IUztRtMAQGcJ0enQgmb5-JqdVy-EVbsAdXLnCz7pTpJpfXruOcqkDPYTDF4dacc7zWldmvXrdpmPm61ZTsLYOewCMDliE44Pb6jTD0FlKkPyxPevVQ8sk7kCXiVcLjw8Exsj5YISdZ1MM",
    umbreonVMaxPSA: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwmaZXaiypybQVEguHdT7gjLIU-tnoUMh5sDsHmv9OzYZV257vhGQh48eEzMHXlmHUWqqieS96o5GYNnFTi91mRN5kENb_5SOgyZHRoqJdtm3y2VTZnccZutuFQcO0P-iVNlx1oaTj0gQMm_KNFjJKbvODUXBWPL5oVCIV745dpbHUwALRPLfa4bur7jhYIE8sJLaEFOS4J1ZuAogVaCL3hXVyNG6tpmXR9Xaec7eCRI8YFkuMlDjWLuEhLUepeSVC0hyk9jTKguo",
    silverTempestPC: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfJFvvcEkRB2xaqSGFM4WYEr9TX3lwQk4nc-kh_EN2XFI0h4s2TkRwSMNeM7Jtgd_xzPBZT3KXap4wq4f5TPv3ruvc1ogK0H49W1-dFZtW_pfbEbzni3svas1D1j5Iog9wfWyjxwsr2smktZdl6B_3TSywreoy-cSpmW7PH8rEbxSoKivunF_iBQODhqmQpuHm76rxqMkz9-PW6RDRErAEnrd9W7jk10AWUXwx7LYZPSeO7dmmqD0AMvoDuAkHVZ3QWnF4Uf-BjF0",
    phantasmalMegaCharizard: "https://lh3.googleusercontent.com/aida-public/AB6AXuARX7se7s5FZb0Yk08V-vpFvHFxPtigxSaLaBok9rNdj6etHNb16vis9FBKr8MeSSEB8j9FqLkZ5VVSdOOr12cq6j4JT1jF7MGSgvGnf_Unz_-cuSZ1pyjPgu-TPP9v9hi2FWERYyk79kJaM4m9vFKvMU9bs-fpkhmra7Ir3slycuI4MkrYbcRBBmhUJgtuAzftM0Zjg8076vSPXSr1OAX0xJdstsshrsbn4OAoAw8C40OiIjj4hdFRCCPm7BHik7ZCOIhUilF4_ek",
    charizardUPCUsed: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEiWmfoWijdJGcGEZCPf6UneEt6pXxkrYg3SPYT54Y6L5N0Knlx4Mii8YPu5cPbLuTmmdISCw5-06HGIbLnf22yU8MwmYrTMlfWOSsh7qrcqHOtoHtxmMC0px4T9Vr42SXeEV6dquit033rbh7XW73WRUHEkGcwiuue0-btA0b5zj-TjDJQRMTDREuTT9BzkGzIc0Jtb1vfOT6nqk5sJ9VdN55XOWqRCvrtr5LiZaeXQIK5p4kE5Ni5ElstaJbaHMswM-s0dHd1u0",
    teamRocketPack: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKNy7C27dkql_ZU4A5GjRd44zTVH-LAS2IcHWwsgnwhXibY9sgY0lnJWYqotEt_D_B58ibfGEcta8Ai1z6HYo3Mv01qqnKjpfaKzI0jmd19z3LRlfx1K4iOgHrR1p0bQxdl4bltiFm-noAox5G6dJdszFSnKXMSSizLQ_hReEYk-h_UH5bZUZ2J7RVBj0MmgFH569uTurawjudNaTWogcrKTXwONB6LWJ7CJcgQtxqLSBr1w8Srypvyyh4dPy_0W5X10KUGqHuA2g",
    twilightMasqueradeBB: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXBBYHIOfGr7cfdwWth2TKNEWlgJa5rgrOjSZGB2zwlDwmbxnj_KIBpe2Z_4BvypH3_P7dfpQIEGseMFmW2lrj_KUiiWyH8SIRGjiSWDAyRO29_WeQfvt98rc3VnfOnQZVuN_-UjJxBMXY2ZIIsGZNuNgpGph2FTO6SZKsS-ERYt6Bbio-YePQ_TpUj7aVGDeXOQs3agqmTQzo8D2cimEoeoWS-fIrdOLyI0gD0OMwmJVly7zUU8D1bLueyed-OfV9CGS2a4zv7_g",
    fusionStrikeBB: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCMxZjd9SskQf3zz3E7fttNq744911CstIT5jVoNs-uYLxz45l5oEGLgcPKFLUIww3SJQmqqZ3HHpjEMtNV97Ocw8WHWoq7X-PWmNoGcy64pB5gx5NboDarWxKnirXSxcxLACk8k_tUI22JUsjBqLAHmM7UQlUfQ7uyjEoGyYqqLYB0y4F6gad9EPnZy23Mt0s-s7cczE8Z0ZNtgNSA4KJtp5giLpfZ3oT6EpkIMj7xVaZ_6sdowYb3MlrI8ml3nLCI5y-ydOYAvg",
    psa10Lugia: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbTZy44VA58PSOiqKSP-oDKtthk0_EKY1XbUlwU_XQyXdi7gCvz3H7kK-QQJhK1mbBr363f873DUaPZaIOUsR8BZ5pPsHpcTRjwRf8asHU0S_8pJbBtPdWkJTXV8HtFl49Gv59Gvw58ApF3c-ZEaJNZkuoXEL76hm8NHWp2a7oCAHw5vZPFNHCXv4RWxGwL05QqaU0QsQq6qH1mEmcJLN2xxRC01W9ZinmX3zRaib6z_qu18I4PuF5tZjwzvQJkFT59x8ji8MNmUI",
};

// Premium high-resolution TCG product images and local assets
const IMGS = {
    // Authentic Booster Box/Bundle URLs
    surgingSparks: POKEMART_ASSETS.surgingSparks,
    p151Bundle: POKEMART_ASSETS.bundle151,
    rebelClash: POKEMART_ASSETS.rebelClashBB,
    stellarCrown: POKEMART_ASSETS.stellarCrownBox,
    twilight: POKEMART_ASSETS.twilightMasqueradeBB,
    obsidian: tcgImg(TCG_IDS.obsidian),
    temporal: POKEMART_ASSETS.temporalForcesETB,
    battleStyles: tcgImg(TCG_IDS.battleStyles),

    // Showcase Mapping
    variant1: POKEMART_ASSETS.megaCharizard,
    variant2: POKEMART_ASSETS.teamRocket,
    variant3: POKEMART_ASSETS.psa10Lugia,

    // Fallback/Local Premium assets for custom sets
    hero1: HERO_BGS[0],
    hero2: HERO_BGS[1],
    hero3: HERO_BGS[2],
    hero4: HERO_BGS[3],
    hero5: HERO_BGS[4],
};

export const PRODUCTS: Product[] = [
    // POKEMON HIGH END
    { id: 1, name: "Pokémon Surging Sparks Booster Box", price: 210.00, category: "booster", badge: "HOT", image: IMGS.surgingSparks, description: "36 booster packs featuring Pikachu ex and powerful Thunder-type Pokémon.", stock: 20 },
    { id: 2, name: "Temporal Forces Booster Box", price: 210.00, category: "booster", badge: "NEW", image: IMGS.temporal, description: "Ancient & Future Pokémon expansion.", stock: 15 },
    { id: 3, name: "Stellar Crown Booster Box", price: 210.00, category: "booster", badge: "HOT", image: IMGS.stellarCrown, description: "Stellar-type Tera Pokémon debut.", stock: 12 },
    { id: 4, name: "Team Rocket Returns Box", price: 900.00, category: "special", badge: "GRAIL", image: POKEMART_ASSETS.teamRocket, description: "Ultra-rare vintage box from EX era.", stock: 1 },

    // MAGIC THE GATHERING
    { id: 27, name: "MTG Modern Horizons 3 Play Booster", price: 240.00, category: "mtg", badge: "NEW", image: POKEMART_ASSETS.mtgCommander, description: "High-power MTG set for Modern format.", stock: 10 },
    { id: 28, name: "MTG Lord of the Rings Collector Box", price: 420.00, category: "mtg", badge: "GRAIL", image: "https://product-images.tcgplayer.com/490218/400w.jpg", description: "Limited edition Collector boosters for LOTR.", stock: 3 },

    // DIGIMON TCG
    { id: 29, name: "Digimon Special Booster Ver.1.0", price: 95.00, category: "digimon", badge: "SALE", image: POKEMART_ASSETS.digimonSpecial, description: "Combined English release of sets 1-3.", stock: 25 },
    { id: 30, name: "Digimon Blast Ace BT14 Box", price: 85.00, category: "digimon", image: "https://product-images.tcgplayer.com/514214/400w.jpg", description: "Wargreymon & Angemon themed set.", stock: 18 },

    // VINTAGE & PSA
    { id: 7, name: "Rebel Clash Vintage Box", price: 350.00, category: "booster", badge: "VAULT", image: IMGS.rebelClash, description: "Classic Sword & Shield era box.", stock: 4 },
    { id: 31, name: "PSA 10 Lugia Neo Genesis 1st Ed", price: 3200.00, category: "special", badge: "PSA 10 GEM MINT", image: POKEMART_ASSETS.psaLugia, description: "One of the most iconic cards in history.", stock: 1 },
    { id: 32, name: "Mewtwo Strikes Back Collection", price: 120.00, category: "special", image: POKEMART_ASSETS.mewtwoStrikes, description: "Special anniversary commemorative collection.", stock: 8 },

    // OTHERS
    { id: 33, name: "Paldea Evolved Storage Case", price: 45.00, category: "bundles", image: POKEMART_ASSETS.paldeaBox, description: "Premium storage for your TCG collection.", stock: 50 },
    { id: 34, name: "JP 151 Booster Box (Import)", price: 180.00, category: "booster", badge: "STOCK LOW", image: POKEMART_ASSETS.jp151Booster, description: "Original Japanese edition of the hit 151 set.", stock: 3 },
    { id: 35, name: "Mtg Commander Legends Vault", price: 75.00, category: "mtg", image: POKEMART_ASSETS.mtgCommander, description: "A multi-TCG companion vault.", stock: 100 },

    { id: 36, name: "PSA 10 Mega Charizard (Phantasmal)", price: 1250.00, category: "special", badge: "ULTRA GRAIL", image: POKEMART_ASSETS.phantasmalMegaCharizard, description: "The phantasmal mega Charizard, PSA 10 gem mint.", stock: 1 },
    { id: 42, name: "PSA 10 Umbreon VMAX Alt Art", price: 800.00, category: "special", badge: "GEM MINT", image: POKEMART_ASSETS.umbreonVMaxPSA, description: "Evolving Skies Moonbreon, PSA 10.", stock: 2 },
    { id: 43, name: "Team Rocket Returns Box", price: 900.00, category: "booster", badge: "VINTAGE", image: POKEMART_ASSETS.teamRocket, description: "EX Series vintage sealed box.", stock: 1 },
    { id: 44, name: "Stellar Crown Booster Box", price: 210.00, category: "booster", badge: "HOT", image: POKEMART_ASSETS.stellarCrownBox, description: "Latest Terasutal set from Scarlet & Violet.", stock: 24 },
    { id: 45, name: "Neo Genesis 1st Ed Lugia", price: 3200.00, category: "special", badge: "PSA 9", image: POKEMART_ASSETS.psa10Lugia, description: "Legendary bird from the Johto era.", stock: 1 },
    { id: 46, name: "Pokemon Center 151 ETB", price: 150.00, category: "booster", badge: "EXCLUSIVE", image: POKEMART_ASSETS.pc151Etb, description: "Limited Pokémon Center edition of 151.", stock: 5 },
    { id: 47, name: "Charizard Ultra Premium Collection", price: 120.00, category: "special", badge: "BEST VALUE", image: POKEMART_ASSETS.charizardUPCUsed, description: "Celebration of the iconic fire drake.", stock: 12 },
    { id: 48, name: "Charizard VMAX Shiny Vault", price: 185.00, category: "special", badge: "HOT", image: POKEMART_ASSETS.charizardVmax, description: "Massive shiny Charizard from Shining Fates.", stock: 3 },
    { id: 49, name: "Pikachu Illustrator Promo", price: 500000.00, category: "special", badge: "LEGENDARY", image: POKEMART_ASSETS.pikachuIllustrator, description: "The rarest Pokémon card in existence.", stock: 1 },
    { id: 50, name: "Vintage Base Set Booster Pack", price: 420.00, category: "booster", badge: "VINTAGE", image: POKEMART_ASSETS.baseSetBooster, description: "Unweighed 1999 original booster pack.", stock: 2 },
    { id: 51, name: "Twilight Masquerade Booster Box", price: 110.00, category: "booster", badge: "NEW", image: POKEMART_ASSETS.twilightMasqueradeBB, description: "Latest SV expansion.", stock: 40 },
    { id: 52, name: "Fusion Strike Booster Box", price: 140.00, category: "booster", image: POKEMART_ASSETS.fusionStrikeBB, description: "Mew-themed battle set.", stock: 15 },
    { id: 53, name: "Vintage Team Rocket Pack", price: 250.00, category: "booster", badge: "VINTAGE", image: POKEMART_ASSETS.teamRocketPack, description: "Classic dark Pokémon expansion.", stock: 5 },
];

export const CATEGORIES = [
    { id: 'all', name: 'All Collections' },
    { id: 'booster', name: 'Booster Boxes' },
    { id: 'mtg', name: 'Magic: The Gathering' },
    { id: 'digimon', name: 'Digimon' },
    { id: 'special', name: 'Vault Grails' },
];

export const FEATURED_IMAGES = [
    ...HERO_BGS,
    GENERATED_IMAGES.splash,
    POKEMART_ASSETS.upc151,
    POKEMART_ASSETS.charizardSIR,
    POKEMART_ASSETS.paldeaBox,
    POKEMART_ASSETS.zapdosSIR,
    POKEMART_ASSETS.megaCharizard,
    POKEMART_ASSETS.temporalForces,
    POKEMART_ASSETS.teamRocket,
    POKEMART_ASSETS.mewtwoStrikes,
    POKEMART_ASSETS.psaLugia,
    POKEMART_ASSETS.stellarVariant,
    POKEMART_ASSETS.ancientVariant,
    POKEMART_ASSETS.galaxyVariant,
    POKEMART_ASSETS.shinyVariant,
    POKEMART_ASSETS.ultraVariant,
    POKEMART_ASSETS.deltaVariant
];
