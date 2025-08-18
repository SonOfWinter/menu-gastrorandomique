import {
  Adjectif,
  Genre,
  Nombre,
  TypeAliment,
} from '@/types/menu';

const adjectifs: Adjectif[] = [
  {
    id: '771659b3-ef0b-49af-9f3a-ca11991b0f68',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'acidulé',
        [Nombre.PLURIEL]: 'acidulés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'acidulée',
        [Nombre.PLURIEL]: 'acidulées',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.FRUIT, TypeAliment.LIQUIDE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.SALADE],
  },
  {
    id: 'bfe1e421-0b50-48d6-a6a1-0114dda27356',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'affiné',
        [Nombre.PLURIEL]: 'affinés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'affinée',
        [Nombre.PLURIEL]: 'affinées',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.FROMAGE],
  },
  {
    id: '85d4586e-9477-47c1-8b71-77c98b1694b1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'allégé',
        [Nombre.PLURIEL]: 'allégés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'allégée',
        [Nombre.PLURIEL]: 'allégées',
      },
    },
    types: [TypeAliment.SAUCE, TypeAliment.SUCRE],
  },
  {
    id: 'c80a0266-0d29-4bd4-b763-241dc9ffcc37',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'alpestre',
        [Nombre.PLURIEL]: 'alpestres',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'alpestre',
        [Nombre.PLURIEL]: 'alpestres',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.CHAMPIGNON, TypeAliment.LEGUME, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '2d97ee90-454d-43b3-b05d-e59fcd7011d2',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'amer',
        [Nombre.PLURIEL]: 'amers',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'amère',
        [Nombre.PLURIEL]: 'amères',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.ALCOOL, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.SAUCE, TypeAliment.SALADE, TypeAliment.SOFT],
  },
  {
    id: 'c3829151-da74-4ac8-b661-1c54ffd74c10',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'anglais',
        [Nombre.PLURIEL]: 'anglais',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'anglaise',
        [Nombre.PLURIEL]: 'anglaises',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'ba9d73dd-a011-4905-bfbd-5825305153a0',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'AOP',
        [Nombre.PLURIEL]: 'AOP',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'AOP',
        [Nombre.PLURIEL]: 'AOP',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.BASE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '3f4d9398-8139-48f9-a6bc-2a773539d74e',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'aromatique',
        [Nombre.PLURIEL]: 'aromatiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'aromatique',
        [Nombre.PLURIEL]: 'aromatiques',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.SUCRE],
  },
  {
    id: 'b045340c-017c-48e9-b6d8-f97c34d2829a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'artisanal',
        [Nombre.PLURIEL]: 'artisanaux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'artisanale',
        [Nombre.PLURIEL]: 'artisanales',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.FROMAGE, TypeAliment.SUCRE, TypeAliment.SOFT, TypeAliment.SAUCE],
  },
  {
    id: 'd48fa7c2-625c-494b-b26f-d190eaeb338e',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'atypique',
        [Nombre.PLURIEL]: 'atypiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'atypique',
        [Nombre.PLURIEL]: 'atypiques',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.BASE, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'f1c121bc-259f-41b2-8412-d597e2ef99c6',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'au beurre',
        [Nombre.PLURIEL]: 'au beurre',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'au beurre',
        [Nombre.PLURIEL]: 'au beurre',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.BASE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'c268aa28-a0ff-4f3d-9402-75a0e6e1fe1e',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'authentique',
        [Nombre.PLURIEL]: 'authentiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'authentique',
        [Nombre.PLURIEL]: 'authentiques',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.CEREALE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '97337652-de08-4b06-80a5-a0ac698664a1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'barigoule',
        [Nombre.PLURIEL]: 'barigoules',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'barigoule',
        [Nombre.PLURIEL]: 'barigoules',
      },
    },
    types: [TypeAliment.LEGUME, TypeAliment.SALADE],
  },
  {
    id: '79d4d2e9-a820-4894-afa9-e759ac2b9c24',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'basquaise',
        [Nombre.PLURIEL]: 'basquaises',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'basquaise',
        [Nombre.PLURIEL]: 'basquaises',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '6748e897-772e-4722-b1b4-f6c5a3e06633',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'belge',
        [Nombre.PLURIEL]: 'belges',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'belge',
        [Nombre.PLURIEL]: 'belges',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.LEGUME, TypeAliment.FRUIT_A_COQUE, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.SOFT, TypeAliment.FROMAGE, TypeAliment.CEREALE, TypeAliment.SALADE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '6f1e6464-6d09-4812-9e9d-3081aa6dc86b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'beurré',
        [Nombre.PLURIEL]: 'beurrés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'beurrée',
        [Nombre.PLURIEL]: 'beurrées',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.SAUCE, TypeAliment.BASE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'd426c919-ac68-4787-8052-9ccfe53dc4fa',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'bistrotier',
        [Nombre.PLURIEL]: 'bistrotiers',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'bistrotière',
        [Nombre.PLURIEL]: 'bistrotières',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CHAMPIGNON, TypeAliment.CEREALE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.SALADE, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.SOFT, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'cd8e6039-9142-452f-adfc-fcfca7096d50',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'blanchi',
        [Nombre.PLURIEL]: 'blanchis',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'blanchie',
        [Nombre.PLURIEL]: 'blanchies',
      },
    },
    types: [TypeAliment.LEGUME, TypeAliment.SALADE],
  },
  {
    id: '2f7f3c32-60be-43f5-b1fb-7b56f5c862cc',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'bleu',
        [Nombre.PLURIEL]: 'bleus',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'bleue',
        [Nombre.PLURIEL]: 'bleues',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE],
  },
  {
    id: '15d9d42a-bef8-4a43-9353-b83ab000a1de',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'braisé',
        [Nombre.PLURIEL]: 'braisés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'braisée',
        [Nombre.PLURIEL]: 'braisées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.BASE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.LEGUME, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'd704e274-3945-4262-9297-3ef817ac5c17',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'braisé longuement',
        [Nombre.PLURIEL]: 'braisés longuement',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'braisée longuement',
        [Nombre.PLURIEL]: 'braisées longuement',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'e5e0be0c-38eb-44da-b56f-79e97850eddb',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'brut',
        [Nombre.PLURIEL]: 'bruts',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'brute',
        [Nombre.PLURIEL]: 'brutes',
      },
    },
    types: [TypeAliment.FRUIT, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.LEGUME, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.SUCRE, TypeAliment.CEREALE],
  },
  {
    id: 'c182ae40-aab9-4539-8113-417001e68e52',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'cadencé',
        [Nombre.PLURIEL]: 'cadencés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'cadencée',
        [Nombre.PLURIEL]: 'cadencées',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'dafe303c-dfe1-4324-81fe-0f151b5df049',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'campagnard',
        [Nombre.PLURIEL]: 'campagnards',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'campagnarde',
        [Nombre.PLURIEL]: 'campagnardes',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.BASE, TypeAliment.VIANDE_ROUGE, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '2f4456de-9707-433a-a76a-ec04b91796d1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'canaille',
        [Nombre.PLURIEL]: 'canailles',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'canaille',
        [Nombre.PLURIEL]: 'canailles',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.FRUIT, TypeAliment.SALADE, TypeAliment.FROMAGE, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.SUCRE, TypeAliment.CEREALE],
  },
  {
    id: '42207163-6460-4198-8328-3147f33daafc',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'caramélisé',
        [Nombre.PLURIEL]: 'caramélisés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'caramélisée',
        [Nombre.PLURIEL]: 'caramélisées',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '26565dd7-812f-4713-8dc7-be5b05f6178e',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'cendré',
        [Nombre.PLURIEL]: 'cendrés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'cendrée',
        [Nombre.PLURIEL]: 'cendrées',
      },
    },
    types: [TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE],
  },
  {
    id: 'eb564d32-0fc5-45c2-b265-ed8e7a4c504a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'chaud',
        [Nombre.PLURIEL]: 'chauds',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'chaude',
        [Nombre.PLURIEL]: 'chaudes',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.ALCOOL, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT_A_COQUE, TypeAliment.CHAMPIGNON, TypeAliment.POISSON, TypeAliment.LIQUIDE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.SAUCE, TypeAliment.SALADE, TypeAliment.LEGUME, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'a95ca92a-0205-4e3f-9895-b4e68fe6263c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'confisé',
        [Nombre.PLURIEL]: 'confisés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'confisée',
        [Nombre.PLURIEL]: 'confisées',
      },
    },
    types: [TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.CEREALE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.SAUCE],
  },
  {
    id: 'e79530b4-9ca7-418f-8323-454c363b93db',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'confit',
        [Nombre.PLURIEL]: 'confits',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'confite',
        [Nombre.PLURIEL]: 'confites',
      },
    },
    types: [TypeAliment.FRUIT],
  },
  {
    id: 'cdf65b75-0309-4995-aa16-0fd88b962951',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'corsé',
        [Nombre.PLURIEL]: 'corsés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'corsée',
        [Nombre.PLURIEL]: 'corsées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.CEREALE, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '072fbb58-03bc-40e4-8864-49d9fa9054fd',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'coupé au couteau',
        [Nombre.PLURIEL]: 'coupés au couteau',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'coupée au couteau',
        [Nombre.PLURIEL]: 'coupées au couteau',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.SALADE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '213e726b-d6db-43b1-b57a-19a91954128c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'craquant',
        [Nombre.PLURIEL]: 'craquants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'craquante',
        [Nombre.PLURIEL]: 'craquantes',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.FRUIT_A_COQUE, TypeAliment.SUCRE],
  },
  {
    id: 'a1002ba2-500d-467a-852f-970f9d4aae15',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'crémeux',
        [Nombre.PLURIEL]: 'crémeux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'crémeuse',
        [Nombre.PLURIEL]: 'crémeuses',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.SOFT, TypeAliment.ALCOOL],
  },
  {
    id: '1bb5beda-cc4c-46a7-92be-db6e2be14a16',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'croquant',
        [Nombre.PLURIEL]: 'croquants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'croquante',
        [Nombre.PLURIEL]: 'croquantes',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.CEREALE, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.SUCRE],
  },
  {
    id: '0ea5263b-c2c0-4384-a1e5-939021eabce7',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'croustillant',
        [Nombre.PLURIEL]: 'croustillants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'croustillante',
        [Nombre.PLURIEL]: 'croustillantes',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.BASE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE],
  },
  {
    id: 'a8b896ec-c180-44af-b463-543fbf4de805',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'croustillé',
        [Nombre.PLURIEL]: 'croustillés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'croustillée',
        [Nombre.PLURIEL]: 'croustillées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.CEREALE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '29ca49ea-5fe9-4142-90eb-3082f16c523b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'cru',
        [Nombre.PLURIEL]: 'crus',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'crue',
        [Nombre.PLURIEL]: 'crues',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.BASE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '09aa231d-faca-4d53-97c1-d285c38f23a4',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'cuit à point',
        [Nombre.PLURIEL]: 'cuits à point',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'cuite à point',
        [Nombre.PLURIEL]: 'cuites à point',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE],
  },
  {
    id: '62350f2d-4a36-40a9-a29c-9bddaf5031ab',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'cuit sous vide',
        [Nombre.PLURIEL]: 'cuits sous vide',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'cuite sous vide',
        [Nombre.PLURIEL]: 'cuites sous vide',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.FRUIT],
  },
  {
    id: '315b4edc-0684-442a-a0a8-8ccd53074f08',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'd\'autrefois',
        [Nombre.PLURIEL]: 'd\'autrefois',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'd\'autrefois',
        [Nombre.PLURIEL]: 'd\'autrefois',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FROMAGE, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.SAUCE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'b458e149-2ff0-4d59-a1d6-e1389e4313b2',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'de la pêche du jour',
        [Nombre.PLURIEL]: 'de la pêche du jour',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'de la pêche du jour',
        [Nombre.PLURIEL]: 'de la pêche du jour',
      },
    },
    types: [TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON],
  },
  {
    id: 'accece93-792c-431a-931b-70c41189607c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'de la région',
        [Nombre.PLURIEL]: 'de la région',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'de la région',
        [Nombre.PLURIEL]: 'de la région',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.FRUIT_DE_MER, TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.POISSON, TypeAliment.CHAMPIGNON, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '8718c3e3-83d5-4be6-9e4c-7cfbde6979b1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'déglacé',
        [Nombre.PLURIEL]: 'déglacés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'déglacée',
        [Nombre.PLURIEL]: 'déglacées',
      },
    },
    types: [TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '79f60b65-63e9-4864-955e-279a26d07dd6',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'doré',
        [Nombre.PLURIEL]: 'dorés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'dorée',
        [Nombre.PLURIEL]: 'dorées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '0b3ffb0b-743d-4c84-8b1c-e8446f556b0b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'du chef',
        [Nombre.PLURIEL]: 'du chef',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'du chef',
        [Nombre.PLURIEL]: 'du chef',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.BASE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.CHAMPIGNON, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '8e2d3736-e502-4bd5-b6b7-58ac13844457',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'du soir',
        [Nombre.PLURIEL]: 'du soir',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'du soir',
        [Nombre.PLURIEL]: 'du soir',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.CEREALE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON, TypeAliment.CHAMPIGNON, TypeAliment.LEGUME, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.BASE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '89590f1a-e88e-4c19-863f-ea73b5f1257a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'du terroir',
        [Nombre.PLURIEL]: 'du terroir',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'du terroir',
        [Nombre.PLURIEL]: 'du terroir',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT_A_COQUE, TypeAliment.LIQUIDE, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.POISSON, TypeAliment.FROMAGE, TypeAliment.LEGUME, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '0c5f76cc-19fe-4cec-a0bf-c2ef90f189c1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'écumé',
        [Nombre.PLURIEL]: 'écumés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'écumée',
        [Nombre.PLURIEL]: 'écumées',
      },
    },
    types: [TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON],
  },
  {
    id: 'e0353486-d4f8-4134-b3d0-324c81a8416f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'effiloché',
        [Nombre.PLURIEL]: 'effilochés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'effilochée',
        [Nombre.PLURIEL]: 'effilochées',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE],
  },
  {
    id: '3f4ab221-893e-4ed5-89b6-129d0131d343',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'en croute',
        [Nombre.PLURIEL]: 'en croute',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'en croute',
        [Nombre.PLURIEL]: 'en croute',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FROMAGE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.SALADE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'b3695029-0b02-4714-8810-89fef452dfcd',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'en sauce',
        [Nombre.PLURIEL]: 'en sauce',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'en sauce',
        [Nombre.PLURIEL]: 'en sauce',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.SALADE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'acfc1706-b1e3-4774-a180-83c12b90f88a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'épicé',
        [Nombre.PLURIEL]: 'épicés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'épicée',
        [Nombre.PLURIEL]: 'épicées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'b41c653f-ff26-4a82-88c7-19c67bd8396d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'érotique',
        [Nombre.PLURIEL]: 'érotiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'érotique',
        [Nombre.PLURIEL]: 'érotiques',
      },
    },
    types: [TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.SAUCE, TypeAliment.ALCOOL, TypeAliment.SOFT, TypeAliment.FRUIT],
  },
  {
    id: 'cf721270-4977-4cdf-be62-335b34f0da74',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'exotique',
        [Nombre.PLURIEL]: 'exotiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'exotique',
        [Nombre.PLURIEL]: 'exotiques',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.SAUCE],
  },
  {
    id: 'c7b92358-d48f-4c40-8bba-34b3c451be26',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'faisandé',
        [Nombre.PLURIEL]: 'faisandés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'faisandée',
        [Nombre.PLURIEL]: 'faisandées',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'fc79ad72-c222-4dba-a17e-b167d6c78215',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fermier',
        [Nombre.PLURIEL]: 'fermiers',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fermière',
        [Nombre.PLURIEL]: 'fermières',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.VIANDE_ROUGE, TypeAliment.LEGUME, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '9b64e615-6ec3-4fee-bbdc-ca1a867a6fd2',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fermier affiné',
        [Nombre.PLURIEL]: 'fermiers affinés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fermière affinée',
        [Nombre.PLURIEL]: 'fermières affinées',
      },
    },
    types: [TypeAliment.FROMAGE],
  },
  {
    id: '42e27791-fd82-408a-b6b5-994ef1005427',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'feuilleté',
        [Nombre.PLURIEL]: 'feuilletés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'feuilletée',
        [Nombre.PLURIEL]: 'feuilletées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '1eec0fc3-92ce-4ad0-a28a-23ab8619adab',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'flambé',
        [Nombre.PLURIEL]: 'flambés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'flambée',
        [Nombre.PLURIEL]: 'flambées',
      },
    },
    types: [TypeAliment.SUCRE, TypeAliment.FRUIT],
  },
  {
    id: 'a68c6e6e-7331-4257-ac57-5249f627df11',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fleur de sel',
        [Nombre.PLURIEL]: 'fleur de sel',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fleur de sel',
        [Nombre.PLURIEL]: 'fleur de sel',
      },
    },
    types: [TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE],
  },
  {
    id: '63f2cad3-a7c5-40a7-a0d2-9ac88c22accd',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fondant',
        [Nombre.PLURIEL]: 'fondants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fondante',
        [Nombre.PLURIEL]: 'fondantes',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.SALADE, TypeAliment.FROMAGE],
  },
  {
    id: '240beb66-96e7-4747-846c-4d120e6fd0cb',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fondue',
        [Nombre.PLURIEL]: 'fondues',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fondue',
        [Nombre.PLURIEL]: 'fondues',
      },
    },
    types: [TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.SUCRE, TypeAliment.SAUCE, TypeAliment.FROMAGE],
  },
  {
    id: '68a3cc65-5da8-4b2f-a6fa-d88032b36c57',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'forestier',
        [Nombre.PLURIEL]: 'forestiers',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'forestière',
        [Nombre.PLURIEL]: 'forestières',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.VIANDE_ROUGE, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '1d4af96e-ab86-4fc7-bc4b-03de43d35a06',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fouetté',
        [Nombre.PLURIEL]: 'fouettés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fouettée',
        [Nombre.PLURIEL]: 'fouettées',
      },
    },
    types: [TypeAliment.SUCRE, TypeAliment.SAUCE, TypeAliment.SALADE],
  },
  {
    id: 'f48d6d7e-2abc-4716-a1a6-d24b9817d039',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'frais',
        [Nombre.PLURIEL]: 'frais',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fraiche',
        [Nombre.PLURIEL]: 'fraiches',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.SALADE, TypeAliment.CHAMPIGNON, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'fee74ddc-6116-41d8-96a5-0e407cba1bc8',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'frit',
        [Nombre.PLURIEL]: 'frits',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'frite',
        [Nombre.PLURIEL]: 'frites',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.CHAMPIGNON, TypeAliment.SALADE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'a4123b1f-2422-474a-9423-8bd9fcc33533',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'froid',
        [Nombre.PLURIEL]: 'froids',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'froide',
        [Nombre.PLURIEL]: 'froides',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CHAMPIGNON, TypeAliment.CEREALE, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.VIANDE_ROUGE, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT, TypeAliment.FROMAGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '68085941-ecc9-4456-82cd-b221782acbe6',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fumé',
        [Nombre.PLURIEL]: 'fumés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fumée',
        [Nombre.PLURIEL]: 'fumées',
      },
    },
    types: [TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.VIANDE_ROUGE, TypeAliment.POISSON, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT_A_COQUE, TypeAliment.SALADE, TypeAliment.FROMAGE, TypeAliment.CEREALE, TypeAliment.SAUCE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '46eca7a5-7b31-480f-b02e-db301f095083',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fumé',
        [Nombre.PLURIEL]: 'fumés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fumée',
        [Nombre.PLURIEL]: 'fumées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.CEREALE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.VIANDE_ROUGE, TypeAliment.POISSON, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'ec296ef9-c1a4-49bb-bcd0-9b8fbdb2889c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'garni',
        [Nombre.PLURIEL]: 'garnis',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'garnie',
        [Nombre.PLURIEL]: 'garnies',
      },
    },
    types: [TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.CHAMPIGNON, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '034201d6-9969-47f6-b014-c4627e430127',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'gélifié',
        [Nombre.PLURIEL]: 'gélifiés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'gélifiée',
        [Nombre.PLURIEL]: 'gélifiées',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.SOFT, TypeAliment.SAUCE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '7927594b-2961-4c7b-ae5d-0e1093a7ff80',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'généreux',
        [Nombre.PLURIEL]: 'généreux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'généreuse',
        [Nombre.PLURIEL]: 'généreuses',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.CEREALE, TypeAliment.BASE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.FRUIT_DE_MER, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SOFT, TypeAliment.SALADE, TypeAliment.SUCRE, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'eab7dadd-edc4-443d-89c6-d605fb821005',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'givré',
        [Nombre.PLURIEL]: 'givrés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'givrée',
        [Nombre.PLURIEL]: 'givrées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.FRUIT, TypeAliment.CEREALE, TypeAliment.BASE, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.SOFT, TypeAliment.ALCOOL, TypeAliment.LIQUIDE],
  },
  {
    id: 'cdaaa6e2-34ca-4736-9d26-9f8de2a18463',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'glacé',
        [Nombre.PLURIEL]: 'glacés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'glacée',
        [Nombre.PLURIEL]: 'glacées',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.SUCRE],
  },
  {
    id: '85220ca1-e9f2-479d-a1ae-a2dc0db25d45',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'goutu',
        [Nombre.PLURIEL]: 'goutus',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'goutue',
        [Nombre.PLURIEL]: 'goutues',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LIQUIDE, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.SALADE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'ddfb50a6-14d7-4820-9f8a-4d2a52c9fa1a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'grand cru',
        [Nombre.PLURIEL]: 'grands crus',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'grande crue',
        [Nombre.PLURIEL]: 'grandes crues',
      },
    },
    types: [TypeAliment.ALCOOL],
  },
  {
    id: 'a6b173ff-45dc-498f-86cb-5fa1ef577047',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'gratiné',
        [Nombre.PLURIEL]: 'gratinés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'gratinée',
        [Nombre.PLURIEL]: 'gratinées',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FROMAGE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'f96f1c23-3681-433e-9cad-1b7c74bbbd95',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'haché',
        [Nombre.PLURIEL]: 'hachés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'hachée',
        [Nombre.PLURIEL]: 'hachées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'f08f1c18-c4b3-49e9-99e0-00adfe555ae8',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'harmonieux',
        [Nombre.PLURIEL]: 'harmonieux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'harmonieuse',
        [Nombre.PLURIEL]: 'harmonieuses',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.ALCOOL, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.LIQUIDE, TypeAliment.SALADE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.FRUIT_DE_MER, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '3446e240-d5cc-47dc-a1a2-b3926ee36e43',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'infusé',
        [Nombre.PLURIEL]: 'infusés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'infusée',
        [Nombre.PLURIEL]: 'infusées',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.FRUIT, TypeAliment.LIQUIDE, TypeAliment.SAUCE, TypeAliment.LEGUME, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.CHAMPIGNON],
  },
  {
    id: 'e2443be7-4948-47cf-892a-d5d0ce3c843d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'iodé',
        [Nombre.PLURIEL]: 'iodés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'iodée',
        [Nombre.PLURIEL]: 'iodées',
      },
    },
    types: [TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON, TypeAliment.SAUCE],
  },
  {
    id: '5c97ec46-73b4-4de9-8e7d-79500d3c32f4',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'juteux',
        [Nombre.PLURIEL]: 'juteux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'juteuse',
        [Nombre.PLURIEL]: 'juteuses',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.VIANDE_ROUGE, TypeAliment.SAUCE, TypeAliment.SUCRE],
  },
  {
    id: '0cda0a9b-707a-4844-b4a8-5f1e97c3bc8e',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'lacté',
        [Nombre.PLURIEL]: 'lactés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'lactée',
        [Nombre.PLURIEL]: 'lactées',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.SUCRE, TypeAliment.ALCOOL, TypeAliment.SOFT, TypeAliment.SAUCE],
  },
  {
    id: 'ef122479-ffd4-4af0-8bbe-db7abef39e4a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'lacustre',
        [Nombre.PLURIEL]: 'lacustres',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'lacustre',
        [Nombre.PLURIEL]: 'lacustres',
      },
    },
    types: [TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON],
  },
  {
    id: '21e00597-b578-46c9-a18b-6d4f2db2f827',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'léché',
        [Nombre.PLURIEL]: 'léchés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'léchée',
        [Nombre.PLURIEL]: 'léchées',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE],
  },
  {
    id: '678c7162-c58d-4da3-9815-b8a8f890f06c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'léger',
        [Nombre.PLURIEL]: 'légers',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'légère',
        [Nombre.PLURIEL]: 'légères',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '27b75d11-fbd4-443e-879f-0a84f8d51646',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'lissé',
        [Nombre.PLURIEL]: 'lissés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'lissée',
        [Nombre.PLURIEL]: 'lissées',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.FRUIT, TypeAliment.CHAMPIGNON, TypeAliment.LEGUME, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT_A_COQUE, TypeAliment.FROMAGE, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.CEREALE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '434db9dd-1f27-4f15-bd5b-c02b93fecf48',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'lustré',
        [Nombre.PLURIEL]: 'lustrés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'lustrée',
        [Nombre.PLURIEL]: 'lustrées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON],
  },
  {
    id: '2130a847-a280-4ba3-ba9d-96083e838020',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'macéré',
        [Nombre.PLURIEL]: 'macérés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'macérée',
        [Nombre.PLURIEL]: 'macérées',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.CHAMPIGNON, TypeAliment.CEREALE, TypeAliment.FRUIT_A_COQUE, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '00f96968-decd-478d-b7bf-14c52654580f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'maigre',
        [Nombre.PLURIEL]: 'maigres',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'maigre',
        [Nombre.PLURIEL]: 'maigres',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '5858d434-baa1-41cf-a24c-1df4165edacd',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'marbré',
        [Nombre.PLURIEL]: 'marbrés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'marbrée',
        [Nombre.PLURIEL]: 'marbrées',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.SUCRE, TypeAliment.FRUIT, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.BASE],
  },
  {
    id: 'fe643ce0-aa5f-4aa2-ad5e-53964659586a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'mariné',
        [Nombre.PLURIEL]: 'marinés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'marinée',
        [Nombre.PLURIEL]: 'marinées',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.SAUCE, TypeAliment.SALADE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '6dc89f4a-e66f-4978-bd66-8f7caf50f580',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'marmiton',
        [Nombre.PLURIEL]: 'marmitons',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'marmitone',
        [Nombre.PLURIEL]: 'marmitones',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '1b2fb818-9998-4432-a5cf-36ef848823ea',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'meringué',
        [Nombre.PLURIEL]: 'meringués',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'meringuée',
        [Nombre.PLURIEL]: 'meringuées',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.SUCRE, TypeAliment.FRUIT, TypeAliment.SAUCE],
  },
  {
    id: '5b1eeeb8-04e0-4db7-8765-af9930af3fad',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'meunier',
        [Nombre.PLURIEL]: 'meuniers',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'meunière',
        [Nombre.PLURIEL]: 'meunières',
      },
    },
    types: [TypeAliment.POISSON, TypeAliment.FRUIT_DE_MER],
  },
  {
    id: 'fd7d7481-f17c-40e5-bda3-4288843802ef',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'meurette',
        [Nombre.PLURIEL]: 'meurette',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'meurette',
        [Nombre.PLURIEL]: 'meurette',
      },
    },
    types: [TypeAliment.BASE],
  },
  {
    id: 'bdb82031-a42a-479e-8f96-8754c4a6a919',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'mi-cuit',
        [Nombre.PLURIEL]: 'mi-cuits',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'mi-cuite',
        [Nombre.PLURIEL]: 'mi-cuites',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '38fb2d20-fa80-4dc9-8a5a-6ccf813ff58e',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'mijoté',
        [Nombre.PLURIEL]: 'mijotés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'mijotée',
        [Nombre.PLURIEL]: 'mijotées',
      },
    },
    types: [TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.VIANDE_ROUGE, TypeAliment.POISSON, TypeAliment.FRUIT_DE_MER, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'dc076ea3-06ab-44cc-8d4e-3c03482f5733',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'mixé',
        [Nombre.PLURIEL]: 'mixés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'mixée',
        [Nombre.PLURIEL]: 'mixées',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '779a11c2-5548-4daf-a270-fc8aebbfd527',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'moelleux',
        [Nombre.PLURIEL]: 'moelleux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'moelleuse',
        [Nombre.PLURIEL]: 'moelleuses',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.FRUIT, TypeAliment.ALCOOL],
  },
  {
    id: 'ba4e338c-d41e-4e93-8a24-2dc737f53042',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'mouillé au vin',
        [Nombre.PLURIEL]: 'mouillés au vin',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'mouillée au vin',
        [Nombre.PLURIEL]: 'mouillées au vin',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.LEGUME],
  },
  {
    id: '71fad201-e2cb-472f-8295-95effd6fda3f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'mûr à point',
        [Nombre.PLURIEL]: 'mûrs à point',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'mûre à point',
        [Nombre.PLURIEL]: 'mûres à point',
      },
    },
    types: [TypeAliment.FRUIT, TypeAliment.FROMAGE],
  },
  {
    id: '1d929a4d-8d0d-4c58-add9-48d8355b77b2',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'muscadé',
        [Nombre.PLURIEL]: 'muscadés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'muscadée',
        [Nombre.PLURIEL]: 'muscadées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.LEGUME, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.SALADE],
  },
  {
    id: 'de1072c8-9b2d-48e0-ad7b-1b1599a1f509',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'nacré',
        [Nombre.PLURIEL]: 'nacrés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'nacrée',
        [Nombre.PLURIEL]: 'nacrées',
      },
    },
    types: [TypeAliment.POISSON, TypeAliment.FRUIT_DE_MER, TypeAliment.SAUCE],
  },
  {
    id: 'df958bec-0855-4318-a116-3c4788e3518a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'nappé',
        [Nombre.PLURIEL]: 'nappés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'nappée',
        [Nombre.PLURIEL]: 'nappées',
      },
    },
    types: [TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '239eb83b-78dd-40fc-8801-0ace0ca7fcc3',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'onctueux',
        [Nombre.PLURIEL]: 'onctueux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'onctueuse',
        [Nombre.PLURIEL]: 'onctueuses',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.CHAMPIGNON, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.SAUCE, TypeAliment.SUCRE],
  },
  {
    id: '15e4ec18-3d69-4dc6-8a5f-6e85445a1b71',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'pané',
        [Nombre.PLURIEL]: 'panés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'panée',
        [Nombre.PLURIEL]: 'panées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.SALADE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '0bc092e9-71e9-427c-b185-133704c22017',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'parfumé',
        [Nombre.PLURIEL]: 'parfumés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'parfumée',
        [Nombre.PLURIEL]: 'parfumées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '3f06039c-5dcd-48ca-ab1e-1b5c108ef5e3',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'parmentier',
        [Nombre.PLURIEL]: 'parmentiers',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'parmentière',
        [Nombre.PLURIEL]: 'parmentières',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.LEGUME, TypeAliment.POISSON],
  },
  {
    id: 'd99cac95-5a38-4725-90ab-ce863e3cfee8',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'persillé',
        [Nombre.PLURIEL]: 'persillés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'persillée',
        [Nombre.PLURIEL]: 'persillées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE],
  },
  {
    id: 'a040d12b-83e9-4a30-9fef-53a8c9a029c7',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'pétillant',
        [Nombre.PLURIEL]: 'pétillants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'pétillante',
        [Nombre.PLURIEL]: 'pétillantes',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.CEREALE, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.SOFT, TypeAliment.SAUCE, TypeAliment.SUCRE],
  },
  {
    id: '20e43428-37c6-4cc6-8b66-16fd708652d6',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'pimenté',
        [Nombre.PLURIEL]: 'pimentés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'pimentée',
        [Nombre.PLURIEL]: 'pimentées',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.LIQUIDE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '95541993-d763-4fd5-ba07-e33e21f2ebb9',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'poché',
        [Nombre.PLURIEL]: 'pochés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'pochée',
        [Nombre.PLURIEL]: 'pochées',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.SUCRE, TypeAliment.SAUCE],
  },
  {
    id: 'ab0a319a-acd2-4c68-b524-322d9ced3523',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'poêlé',
        [Nombre.PLURIEL]: 'poêlés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'poêlée',
        [Nombre.PLURIEL]: 'poêlées',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '1088345b-911e-4c29-8d32-e9db0d6f88f0',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'poivré',
        [Nombre.PLURIEL]: 'poivrés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'poivrée',
        [Nombre.PLURIEL]: 'poivrées',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.VIANDE_ROUGE, TypeAliment.POISSON, TypeAliment.BASE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '15678479-f5a8-441c-ad27-9d3243d9ceac',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'pressé',
        [Nombre.PLURIEL]: 'pressés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'pressée',
        [Nombre.PLURIEL]: 'pressées',
      },
    },
    types: [TypeAliment.FRUIT, TypeAliment.LEGUME],
  },
  {
    id: 'f9ea1442-65e1-4294-ab11-a3cdd0271b1d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rafraîchi',
        [Nombre.PLURIEL]: 'rafraîchis',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rafraîchie',
        [Nombre.PLURIEL]: 'rafraîchies',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.FRUIT_DE_MER, TypeAliment.FROMAGE],
  },
  {
    id: 'aeb3bd5a-c579-4466-9dd7-0ab7d0eb5b09',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'réchauffé',
        [Nombre.PLURIEL]: 'réchauffés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'réchauffée',
        [Nombre.PLURIEL]: 'réchauffées',
      },
    },
    types: [TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.SAUCE, TypeAliment.LEGUME, TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '86a86caa-e1be-4a61-b5e6-790fa8b8e37c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'réduit',
        [Nombre.PLURIEL]: 'réduits',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'réduite',
        [Nombre.PLURIEL]: 'réduites',
      },
    },
    types: [TypeAliment.SAUCE],
  },
  {
    id: '28e64f61-d408-4cb5-8088-e9de2baae870',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'réhaussé',
        [Nombre.PLURIEL]: 'réhaussés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'réhaussée',
        [Nombre.PLURIEL]: 'réhaussées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.CEREALE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.FRUIT, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.LIQUIDE, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '63c54cb6-0f7f-4509-a1da-1150eb63827a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'réinventé',
        [Nombre.PLURIEL]: 'réinventés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'réinventée',
        [Nombre.PLURIEL]: 'réinventées',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.ALCOOL, TypeAliment.LIQUIDE, TypeAliment.SOFT],
  },
  {
    id: 'e0318e54-f6a9-4368-a09e-8b756a068546',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'réveillé',
        [Nombre.PLURIEL]: 'réveillés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'réveillée',
        [Nombre.PLURIEL]: 'réveillées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.CEREALE],
  },
  {
    id: '48e141cf-cdd7-4f29-a023-7669d378952c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'réveillé aux épices',
        [Nombre.PLURIEL]: 'réveillés aux épices',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'réveillée aux épices',
        [Nombre.PLURIEL]: 'réveillées aux épices',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.FRUIT, TypeAliment.ALCOOL, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.CEREALE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'b5d412c9-6643-48d1-a15a-6225c2c05d36',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rosé',
        [Nombre.PLURIEL]: 'rosés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rosée',
        [Nombre.PLURIEL]: 'rosées',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE],
  },
  {
    id: 'a277b8b3-4058-40bc-804b-9fc7706928ad',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'roti',
        [Nombre.PLURIEL]: 'rotis',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rotie',
        [Nombre.PLURIEL]: 'roties',
      },
    },
    types: [TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.LEGUME, TypeAliment.CHAMPIGNON],
  },
  {
    id: '8f263037-bb5f-45b2-a751-6becbe6ab12a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rôti au sautoir',
        [Nombre.PLURIEL]: 'rôtis au sautoir',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rôtie au sautoir',
        [Nombre.PLURIEL]: 'rôties au sautoir',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.LEGUME, TypeAliment.CHAMPIGNON, TypeAliment.POISSON, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'd104fc28-435f-4029-902c-d188a024016d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'roulé',
        [Nombre.PLURIEL]: 'roulés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'roulée',
        [Nombre.PLURIEL]: 'roulées',
      },
    },
    types: [TypeAliment.SUCRE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.LEGUME],
  },
  {
    id: '201bff70-eaeb-45ff-a123-5aa5d6ead083',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rustique',
        [Nombre.PLURIEL]: 'rustiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rustique',
        [Nombre.PLURIEL]: 'rustiques',
      },
    },
    types: [TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.CHAMPIGNON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.SAUCE],
  },
  {
    id: '37d29dd6-f6d8-487c-b882-98a11a3260a7',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'sablé',
        [Nombre.PLURIEL]: 'sablés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'sablée',
        [Nombre.PLURIEL]: 'sablées',
      },
    },
    types: [TypeAliment.SUCRE, TypeAliment.FRUIT, TypeAliment.SAUCE],
  },
  {
    id: 'a3ed7593-dd5e-49e5-bdb3-2b057f24c204',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'safrané',
        [Nombre.PLURIEL]: 'safranés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'safranée',
        [Nombre.PLURIEL]: 'safranées',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.CHAMPIGNON, TypeAliment.CEREALE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.LEGUME, TypeAliment.SAUCE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'fb327b74-4049-42f8-8055-ceaaaa54d728',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'saignant',
        [Nombre.PLURIEL]: 'saignants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'saignante',
        [Nombre.PLURIEL]: 'saignantes',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE],
  },
  {
    id: '073daee5-1a1c-4c46-b91a-2017ebc257eb',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'salé',
        [Nombre.PLURIEL]: 'salés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'salée',
        [Nombre.PLURIEL]: 'salées',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '77dbe19a-b72b-4af3-8a52-8d16cfa19ca1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'saumuré',
        [Nombre.PLURIEL]: 'saumurés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'saumurée',
        [Nombre.PLURIEL]: 'saumurées',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.POISSON, TypeAliment.FRUIT_DE_MER],
  },
  {
    id: 'd48ac030-112c-47fb-a214-47fbcf626b69',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'sauté',
        [Nombre.PLURIEL]: 'sautés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'sautée',
        [Nombre.PLURIEL]: 'sautées',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '733a1bd4-df48-4103-a7af-cc9b05e953c3',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'sauvage',
        [Nombre.PLURIEL]: 'sauvages',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'sauvage',
        [Nombre.PLURIEL]: 'sauvages',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.VIANDE_ROUGE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'bc65d537-d8f1-4d93-ad96-f4b141f16e20',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'sauvageon',
        [Nombre.PLURIEL]: 'sauvageons',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'sauvageonne',
        [Nombre.PLURIEL]: 'sauvageonnes',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.LEGUME, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER],
  },
  {
    id: '61960de9-b3f6-4538-ba7e-90f6c578949b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'snacké',
        [Nombre.PLURIEL]: 'snackés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'snackée',
        [Nombre.PLURIEL]: 'snackées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '60d61db1-56b6-4dd3-bdc4-cef536897745',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'soufflé',
        [Nombre.PLURIEL]: 'soufflés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'soufflée',
        [Nombre.PLURIEL]: 'soufflées',
      },
    },
    types: [TypeAliment.SUCRE, TypeAliment.FRUIT, TypeAliment.LEGUME],
  },
  {
    id: '3320fac4-f3da-43fe-bfb0-955e2485ff21',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'soyeux',
        [Nombre.PLURIEL]: 'soyeux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'soyeuse',
        [Nombre.PLURIEL]: 'soyeuses',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.CEREALE, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'ec73c961-29ce-412c-b47e-af20356827f2',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'sublimé',
        [Nombre.PLURIEL]: 'sublimés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'sublimée',
        [Nombre.PLURIEL]: 'sublimées',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.POISSON, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.FRUIT, TypeAliment.LIQUIDE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.SOFT, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '8a47693f-dfc8-4e17-b13a-11d80005f542',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'sucré',
        [Nombre.PLURIEL]: 'sucrés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'sucrée',
        [Nombre.PLURIEL]: 'sucrées',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.LIQUIDE, TypeAliment.ALCOOL, TypeAliment.SOFT],
  },
  {
    id: '943bd279-2dd6-4879-9f71-4d4a49fc9536',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'suspendu',
        [Nombre.PLURIEL]: 'suspendus',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'suspendue',
        [Nombre.PLURIEL]: 'suspendues',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.CHAMPIGNON, TypeAliment.CEREALE, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT_A_COQUE, TypeAliment.POISSON, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.VIANDE_ROUGE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'a02f00cf-6be2-4e47-b1dc-abdc146e37db',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'tartiné',
        [Nombre.PLURIEL]: 'tartinés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'tartinée',
        [Nombre.PLURIEL]: 'tartinées',
      },
    },
    types: [TypeAliment.SUCRE, TypeAliment.FROMAGE, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE],
  },
  {
    id: 'fa1984c9-fb1b-4999-a255-4aa394d0e799',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'tendre',
        [Nombre.PLURIEL]: 'tendres',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'tendre',
        [Nombre.PLURIEL]: 'tendres',
      },
    },
    types: [TypeAliment.VIANDE_ROUGE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FROMAGE, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.POISSON, TypeAliment.VIANDE_BLANCHE, TypeAliment.SUCRE],
  },
  {
    id: '03dcb67f-286e-48c0-a118-733d6cc73bb8',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'tiède',
        [Nombre.PLURIEL]: 'tièdes',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'tiède',
        [Nombre.PLURIEL]: 'tièdes',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '5a112954-ad26-4793-86df-9f5d852e6916',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'toasté',
        [Nombre.PLURIEL]: 'toastés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'toastée',
        [Nombre.PLURIEL]: 'toastées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_DE_MER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'a4c0d47b-21f4-4840-83c8-0f837e70b212',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'torréfié',
        [Nombre.PLURIEL]: 'torréfiés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'torréfiée',
        [Nombre.PLURIEL]: 'torréfiées',
      },
    },
    types: [TypeAliment.BASE, TypeAliment.SUCRE, TypeAliment.CEREALE],
  },
  {
    id: 'd7ac1e88-b5dd-40a2-9717-cfdb612d8594',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'torsadé',
        [Nombre.PLURIEL]: 'torsadés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'torsadée',
        [Nombre.PLURIEL]: 'torsadées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.SUCRE],
  },
  {
    id: 'cec6fbc8-089b-4079-8bbf-9fe8500ddb46',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'traditionnel',
        [Nombre.PLURIEL]: 'traditionnels',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'traditionnelle',
        [Nombre.PLURIEL]: 'traditionnelles',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_A_COQUE, TypeAliment.CEREALE, TypeAliment.FRUIT, TypeAliment.BASE, TypeAliment.FROMAGE, TypeAliment.ALCOOL, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.FRUIT_DE_MER, TypeAliment.SAUCE, TypeAliment.SALADE, TypeAliment.VIANDE_BLANCHE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE],
  },
  {
    id: '78ca8897-99e2-4f89-9713-ff31a7981431',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'truffé',
        [Nombre.PLURIEL]: 'truffés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'truffée',
        [Nombre.PLURIEL]: 'truffées',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.CEREALE, TypeAliment.BASE, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: 'cd6aacb9-8c0b-4e92-b030-ed94f2e8dcd5',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'typique',
        [Nombre.PLURIEL]: 'typiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'typique',
        [Nombre.PLURIEL]: 'typiques',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT_A_COQUE, TypeAliment.LIQUIDE, TypeAliment.LEGUME, TypeAliment.FRUIT_DE_MER, TypeAliment.SALADE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.SAUCE, TypeAliment.FRUIT, TypeAliment.POISSON, TypeAliment.VIANDE_ROUGE, TypeAliment.VIANDE_BLANCHE],
  },
  {
    id: '71f2e7ac-f1ac-4fcb-8214-2273bf9d717c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'vanillé',
        [Nombre.PLURIEL]: 'vanillés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'vanillée',
        [Nombre.PLURIEL]: 'vanillées',
      },
    },
    types: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.SAUCE, TypeAliment.SUCRE],
  },
  {
    id: '56e05cdf-14f9-4eeb-b895-39c04578fd27',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'vegan',
        [Nombre.PLURIEL]: 'vegan',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'vegan',
        [Nombre.PLURIEL]: 'vegan',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SUCRE],
  },
  {
    id: '912fb85a-d554-4d78-8552-7cd2f0d1fb9d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'végétale',
        [Nombre.PLURIEL]: 'végétales',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'végétale',
        [Nombre.PLURIEL]: 'végétales',
      },
    },
    types: [TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.LEGUME, TypeAliment.SAUCE, TypeAliment.SALADE],
  },
  {
    id: '055c89a8-6de2-47d2-b8b6-f95773aa376d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'velouté',
        [Nombre.PLURIEL]: 'veloutés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'veloutée',
        [Nombre.PLURIEL]: 'veloutées',
      },
    },
    types: [TypeAliment.FRUIT, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT_DE_MER, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.FROMAGE, TypeAliment.POISSON, TypeAliment.SALADE],
  },
  {
    id: 'fe299ba2-4ea3-4750-98b8-bdac3b242ecb',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'vieilli en cave',
        [Nombre.PLURIEL]: 'vieillis en cave',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'vieillie en cave',
        [Nombre.PLURIEL]: 'vieillies en cave',
      },
    },
    types: [TypeAliment.ALCOOL, TypeAliment.VIANDE_ROUGE, TypeAliment.SAUCE],
  },
  {
    id: 'f493bf77-9b75-4c77-a224-d642c935c19f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'vinaigré',
        [Nombre.PLURIEL]: 'vinaigrés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'vinaigrée',
        [Nombre.PLURIEL]: 'vinaigrées',
      },
    },
    types: [TypeAliment.SAUCE, TypeAliment.SALADE, TypeAliment.LEGUME],
  },
];

export default adjectifs;
