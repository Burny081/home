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
    stellarCrown: 557354,
    op13: 628352
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
    phantasmalMegaCharizard: "https://lh3.googleusercontent.com/aida-public/AB6AXuARX7se7s5FZb0Yk08V-vpFvHFxPtigxSaLaBok9rNdj6etHNb16vis9FBKr8MeSSEB8j9FqLkZ5VVSdOOr12cq6j4JT1jF7MGSgvGnf_Unz_-cuSZ1pyjPgu-TPP9v9hi2FWERYyk79kJaM4m9vFKvMU9bs-fpkhmra7Ir3slycuI4MkrYbcRBBmhUJgtuAzftM0Zjg8076vSPXSr1OAX0xJdstsshrsbn4OAoAw8C40OiIjj4hdFRCCPm7BHik7ZCOIhUilF4_ek",
    stellarCrownBox: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-herAsRDosXz0yLoP55zbrJZSuihWZDfzGTou_bzX5IWj1U8KMm0EdClHiDhNhCHLMDj4tUk7Vi_e7exPvaFUhA-YAMF0xj1Nvo8PtAM7ozM5ZfrIhcPGg2KZL5bw04BhTqOO0mCZtSlXkcjp8bqWDLJnffBFhg8RcvdkXb_sy3vdw_wSLhyKkW9p92wqT-SJNGJ4tz4s6ghRVKchz4t6T7cq-iws58L69lCr0Kv1tfHUWAztEJiUJYZqrJFsOJVlZTlViP4k7yo",
    jp151Booster: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsO3NaOnTlugp27pdmV-LnrCEWaSctsz-NiSS73FUSTe42C-2V62UJpi_WPtrDRRHLy9PNk5kQ1hXJwAr1ESw0WYk8e06z9LaMAZy8nzZ1-XS7GtPT2ZzT3bEQXx_byUzDukwi1Ad8JKOKJmez2F6NAMddEVDAJne_0CSPUi8YdROj3xU3EuDYlo8IjPru1Ak8jVkl5Ffuf-TVD-VxKL9zGlkkVIvg60_Cv92qRgScBFjC7_4uXYXvj77QfGex1WGkL2czXdbAcsQ",
    psa10Lugia: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbTZy44VA58PSOiqKSP-oDKtthk0_EKY1XbUlwU_XQyXdi7gCvz3H7kK-QQJhK1mbBr363f873DUaPZaIOUsR8BZ5pPsHpcTRjwRf8asHU0S_8pJbBtPdWkJTXV8HtFl49Gv59Gvw58ApF3c-ZEaJNZkuoXEL76hm8NHWp2a7oCAHw5vZPFNHCXv4RWxGwL05QqaU0QsQq6qH1mEmcJLN2xxRC01W9ZinmX3zRaib6z_qu18I4PuF5tZjwzvQJkFT59x8ji8MNmUI",
    avatarAsh: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUx_Z9LGOeaJLa2spWa6h_O5qMBo2c1hNNg7ArGCIyk7-sh0Bq_H61VPrgXrkyC48z40SHwfftkyoIAv6Bcj9NbVvdfoeh9ACT9iAZNp4SfHzFvIhJKuk-0hMKCQXtAEYPedxhy0B8NLQhaINMA_mmsLg-9PN4yU7a5lC_4Q3hsRbYPMOU6_Ar362JN7Xu8e7RWfYBewcO55k_z_qT4-dncJ2mqEBEqH7XlzabgVMhJrjy-zOuUjt75vsiJHNU0_Bc2drQ8u1j2Bo",
    baseSetBoosterUrgent: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnCTD4vr_XhaApDt-8qQ5M4xlLh_CC0H3XiI2OiaZttYwVetg67xmqnK_FeL7eEfCCaY-Xd2MxE--FwJFjDCyBJr8aETOwJYTDhI-XKY6Nn9uWaFlf5P6oDOPgZEdjO-27UUJcfAfJUA9k302Kez1m_-Jlu1efq53QI9NtFHrurH-Jq7xWd_jRDnaZUPbWSCu8wH1kIc9qzA-hSj0HiDVlxYBamxYg9iLTeU3LQxjlZXV9xFPu1BGKMDsy8wCOTfJ90sKmVxH-ETc",
    rebelClashBB: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Ncxy3lUMbKOq3bEy-iviIRuBtb3ur2NmWNGuBdsJwZpb7cLBmGP0wgdhamKfLBAfAEu8aCuBz1LQ8_XqX_NHfMboMMcZudf_sFeL4lfz576-yGyhiDLJimtCB5cR4fHs0CBQ-j2Rw9UJIX5mXcVLNIOgTc2WLcasMDGNGp9lEbhhjtlDm3t3DFg1QYLMOGYez5TID-EA43cW_HKhqj2FRocXheEkoeKxZkvxEzaQWg3bfkVvg51t0aRpErk1rBuRY3TUYzlHNzs",
    twilightMasqueradeBB: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXBBYHIOfGr7cfdwWth2TKNEWlgJa5rgrOjSZGB2zwlDwmbxnj_KIBpe2Z_4BvypH3_P7dfpQIEGseMFmW2lrj_KUiiWyH8SIRGjiSWDAyRO29_WeQfvt98rc3VnfOnQZVuN_-UjJxBMXY2ZIIsGZNuNgpGph2FTO6SZKsS-ERYt6Bbio-YePQ_TpUj7aVGDeXOQs3agqmTQzo8D2cimEoeoWS-fIrdOLyI0gD0OMwmJVly7zUU8D1bLueyed-OfV9CGS2a4zv7_g",
    evolvingSkiesBooster: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs496DuBknrF-vV11EzPLSWKIsUWZVyAC3YI-Jnll8oABTqR2TpVcCLr6MYSjF0S9G9tE-IzK1dX3Hr3BKqrS1XlblHHaGbGgKE5Q0B7wtj4t1DZ0dExpATXwjC2O7BL419UoWX_kBw6sGQN1HDiMws5CKNhB6KXG3DlWhgrUu_CyuI1nvyy1r-UW8OUcB3RH9zb3eg45IY6njlJ3hJv6EgtWsTMXTEdw8JUE6Qus1_10rzsp0yO8Up0-DWOJ77EPwdp61-89iAGs"
};

// Premium high-resolution TCG product images and local assets
const IMGS = {
    // Authentic Booster Box/Bundle URLs
    surgingSparks: tcgImg(TCG_IDS.surgingSparks),
    p151Bundle: POKEMART_ASSETS.upc151, // Replaced with authentic PokeMart asset
    rebelClash: tcgImg(TCG_IDS.rebelClash),
    op13: tcgImg(TCG_IDS.op13),
    stellarCrown: POKEMART_ASSETS.stellarVariant, // Replaced with authentic PokeMart asset
    twilight: tcgImg(TCG_IDS.twilight),
    obsidian: tcgImg(TCG_IDS.obsidian),
    temporal: POKEMART_ASSETS.temporalForces, // Replaced with authentic PokeMart asset
    battleStyles: tcgImg(TCG_IDS.battleStyles),

    // Showcase Mapping
    variant1: POKEMART_ASSETS.megaCharizard,
    variant2: POKEMART_ASSETS.teamRocket,
    variant3: POKEMART_ASSETS.psaLugia,

    // Fallback/Local Premium assets for custom sets
    hero1: HERO_BGS[0],
    hero2: HERO_BGS[1],
    hero3: HERO_BGS[2],
    hero4: HERO_BGS[3],
    hero5: HERO_BGS[4],
};

export const PRODUCTS: Product[] = [
    { id: 1, name: "Surging Sparks Booster Box", price: 220.00, category: "booster", badge: "HOT", image: IMGS.surgingSparks, description: "36 booster packs featuring Pikachu ex and powerful Thunder-type Pokémon. One of the most sought-after sets in the Scarlet & Violet era.", stock: 12 },
    { id: 2, name: "Scarlet & Violet 151 Ultra Collection", price: 120.00, category: "special", badge: "NEW", image: POKEMART_ASSETS.upc151, description: "The definitive 151 collection. Includes premium metal cards, and exclusive illustration rares.", stock: 15 },
    { id: 3, name: "Ancient Origin Legacy Box", price: 310.00, category: "booster", image: POKEMART_ASSETS.ancientVariant, description: "Rare ancient-themed booster box with gold-etched packaging. A true collector's relic.", stock: 4 },
    { id: 4, name: "Cosmic Galaxy Booster Display", price: 240.00, category: "booster", image: POKEMART_ASSETS.galaxyVariant, description: "Features holographic galaxy patterns on the booster packs and box art. Cinematic visual quality.", stock: 11 },
    { id: 5, name: "Shiny Treasure Special Edition", price: 155.00, category: "special", image: POKEMART_ASSETS.shinyVariant, description: "High-premium shiny booster set from the Japanese high-class series. Guaranteed shiny pulls.", stock: 14 },
    { id: 6, name: "Ultra Prism Premium Vault", price: 420.00, category: "booster", badge: "VAULT", image: POKEMART_ASSETS.ultraVariant, description: "A sealed Ultra Prism display box sourced from the private vault. Extremely limited.", stock: 2 },
    { id: 10, name: "Temporal Forces Future Variant", price: 215.00, category: "booster", image: POKEMART_ASSETS.temporalForces, description: "Special Future-type box art for Temporal Forces with exclusive iridescent coating.", stock: 7 },
    { id: 7, name: "Charizard SIR Premium Display", price: 450.00, category: "special", badge: "ELITE", image: POKEMART_ASSETS.charizardSIR, description: "Professionally graded Charizard Special Illustration Rare. A high-value center-piece for any serious binder.", stock: 1 },
    { id: 8, name: "Scarlet & Violet Paldea Box", price: 190.00, category: "booster", image: POKEMART_ASSETS.paldeaBox, description: "Classic Paldea region starter sets in a premium booster display box. Includes early S&V hits.", stock: 5 },
    { id: 9, name: "Zapdos SIR Collector's Case", price: 280.00, category: "special", image: POKEMART_ASSETS.zapdosSIR, description: "Exclusive Zapdos Special Illustration Rare in a protective UV-guarded case. Limited vault stock.", stock: 2 },
    { id: 11, name: "Stellar Crown Deluxe Variant", price: 220.00, category: "booster", badge: "RARE", image: POKEMART_ASSETS.stellarVariant, description: "A special edition packaging of Stellar Crown with guaranteed holographic variance in every pack.", stock: 8 },
    { id: 12, name: "Delta Species Reimagined Box", price: 180.00, category: "booster", image: POKEMART_ASSETS.deltaVariant, description: "A modern reimagining of the classic Delta Species mechanic with updated artwork and premium finish.", stock: 10 },
    { id: 13, name: "Mega Evolution XY Artifact", price: 550.00, category: "special", image: POKEMART_ASSETS.megaCharizard, description: "Vintage XY Mega Evolution display box. Features the iconic Mega Charizard X and Y art.", stock: 1 },
    { id: 14, name: "Team Rocket Returns Remastered", price: 950.00, category: "special", badge: "VAULT", image: POKEMART_ASSETS.teamRocket, description: "A pristine condition Team Rocket Returns box. The ultimate prize for elite vintage collectors.", stock: 1 },
    { id: 15, name: "Mewtwo Strikes Back Edition", price: 135.00, category: "special", image: POKEMART_ASSETS.mewtwoStrikes, description: "Commemorative movie edition box featuring exclusive Mewtwo Strikes Back illustration rare artwork.", stock: 12 },
    { id: 16, name: "PSA 10 Lugia Slab", price: 3200.00, category: "special", badge: "GRAIL", image: POKEMART_ASSETS.psaLugia, description: "A perfect PSA 10 graded Lugia. The holy grail of our current vault inventory.", stock: 1 },
    { id: 17, name: "Blooming Waters Booster Box", price: 75.00, category: "booster", image: IMGS.hero2, description: "A Water and Grass type themed mini-set with relaxing artwork and beautiful full-art Pokémon.", stock: 30 },
    { id: 18, name: "Rebel Clash Booster Box", price: 350.00, category: "booster", badge: "VAULT", image: IMGS.rebelClash, description: "Classic Sword & Shield era box with powerful V and VMAX Pokémon. A highly sought vintage box.", stock: 4 },
    { id: 19, name: "Costco Prismatic Evolutions 8-pack Tins", price: 100.00, category: "bundles", image: IMGS.hero5, description: "Exclusive Costco bundle: 8 mini tins packed with Prismatic Evolutions boosters. Limited club store stock.", stock: 15 },
    { id: 20, name: "OP-13 Booster Box", price: 260.00, category: "booster", badge: "RARE", image: IMGS.op13, description: "One Piece TCG OP-13 set packed with powerful new attacks for your favorite Straw Hat crew members.", stock: 5 },
    { id: 21, name: "Battle Styles Booster Box", price: 205.00, category: "booster", image: IMGS.battleStyles, description: "Features Pokémon with Single Strike and Rapid Strike styles. Home of Urshifu VMAX and Empoleon V.", stock: 9 },
    { id: 22, name: "Obsidian Flame Booster Box", price: 240.00, category: "booster", image: IMGS.obsidian, description: "Features Charizard ex in its terrifying Tera Form — one of the most popular sets.", stock: 7 },
    { id: 23, name: "Black Bolt Elite Trainer Box", price: 70.00, category: "etb", image: IMGS.hero4, description: "Darkrai-themed ETB with noir-style card back designs and 9 booster packs from classic Dark sets.", stock: 13 },
    { id: 24, name: "Prismatic Lucario & Tyranitar Sams Club", price: 100.00, category: "special", image: IMGS.hero5, description: "Exclusive Sam's Club bundle: Lucario and Tyranitar promo cards, plus 6 Prismatic Evolutions packs.", stock: 9 },
];

export const CATEGORIES = [
    { id: 'all', name: 'All' },
    { id: 'booster', name: 'Booster Boxes' },
    { id: 'etb', name: 'Elite Trainer Boxes' },
    { id: 'bundles', name: 'Bundles & Tins' },
    { id: 'special', name: 'Special Collections' },
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
