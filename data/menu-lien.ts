import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { Lien } from '@/types/data/lien';
import { TypeAliment } from '@/types/enums/type-aliment';
import { alimentTypePresets } from '@/data-presets/type-aliment-presets';
import { themePresets } from '@/data-presets/theme-presets';

const liens: Lien[] = [
  {
    id: '163c32b5-d925-463b-85c4-e283064448cf',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'accompagné',
        [Nombre.PLURIEL]: 'accompagnés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'accompagnée',
        [Nombre.PLURIEL]: 'accompagnées',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '854e8224-63be-4304-8fa8-84465150fcfc',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'adouci par',
        [Nombre.PLURIEL]: 'adoucis par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'adoucie par',
        [Nombre.PLURIEL]: 'adoucies par',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'abfe0e34-548d-4213-af47-309301b6aca8',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'agrémenté',
        [Nombre.PLURIEL]: 'agrémentés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'agrémentée',
        [Nombre.PLURIEL]: 'agrémentées',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'f5a0a39e-b8ce-4ac3-bc38-e9f40c140e04',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'arrosé',
        [Nombre.PLURIEL]: 'arrosés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'arrosée',
        [Nombre.PLURIEL]: 'arrosées',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '4dc0e0e1-cf4e-4837-b4c3-b465fe100948',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'assaisonné',
        [Nombre.PLURIEL]: 'assaisonnés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'assaisonnée',
        [Nombre.PLURIEL]: 'assaisonnées',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'f9b4d1ac-ecdf-4ec1-920f-3904294330bc',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'aux éclats',
        [Nombre.PLURIEL]: 'aux éclats',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'aux éclats',
        [Nombre.PLURIEL]: 'aux éclats',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.SUCRE]
  },
  {
    id: '8aacdfeb-4f9d-4fde-936c-6c5e45af7007',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'avec',
        [Nombre.PLURIEL]: 'avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'avec',
        [Nombre.PLURIEL]: 'avec',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'fdf37498-96bd-4aa5-b2f1-f103ccdf1aae',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'baigné dans',
        [Nombre.PLURIEL]: 'baignés dans',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'baignée dans',
        [Nombre.PLURIEL]: 'baignées dans',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '422214b7-57b3-4c61-a8ef-0391bb0a84be',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'bordé',
        [Nombre.PLURIEL]: 'bordés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'bordée',
        [Nombre.PLURIEL]: 'bordées',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'f4a015ec-6836-4517-a706-b92d483adfce',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'caressé par',
        [Nombre.PLURIEL]: 'caressés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'caressée par',
        [Nombre.PLURIEL]: 'caressées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'b89c7cf5-7d58-4168-b8f8-7c33a5202e67',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'contrasté par',
        [Nombre.PLURIEL]: 'contrastés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'contrastée par',
        [Nombre.PLURIEL]: 'contrastées par',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '5da96c38-2762-4464-87a9-2cbf7a772ce7',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'coulant sur',
        [Nombre.PLURIEL]: 'coulant sur',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'coulant sur',
        [Nombre.PLURIEL]: 'coulant sur',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'b6cca5e3-56c4-4901-b299-07d18676dcd1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'couronné de',
        [Nombre.PLURIEL]: 'couronnés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'couronnée de',
        [Nombre.PLURIEL]: 'couronnées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '62b0304e-0b95-4aed-9bab-51de7bd1aaa1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'délicatement parfumé de',
        [Nombre.PLURIEL]: 'délicatement parfumés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'délicatement parfumée de',
        [Nombre.PLURIEL]: 'délicatement parfumées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '6b2ce88c-4704-4446-a119-e87a455d84fc',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'délicatement posé sur',
        [Nombre.PLURIEL]: 'délicatement posés sur',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'délicatement posée sur',
        [Nombre.PLURIEL]: 'délicatement posées sur',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '302e6edb-985d-458f-b9c4-34dcb61bc9b5',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'déposé sur',
        [Nombre.PLURIEL]: 'déposés sur',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'déposée sur',
        [Nombre.PLURIEL]: 'déposées sur',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'd377de34-61e6-4307-9cff-f47b222e74d3',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'doucement relevé de',
        [Nombre.PLURIEL]: 'doucement relevés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'doucement relevée de',
        [Nombre.PLURIEL]: 'doucement relevées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '01c04be1-39b9-450b-8f4c-ca6a23107cf3',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'en harmonie avec',
        [Nombre.PLURIEL]: 'en harmonie avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'en harmonie avec',
        [Nombre.PLURIEL]: 'en harmonie avec',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '07a23f63-7d71-477e-a466-4602d7475752',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'enrobé de',
        [Nombre.PLURIEL]: 'enrobés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'enrobée de',
        [Nombre.PLURIEL]: 'enrobées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'f3a6690a-df40-48fd-b348-b951e15ef598',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'enveloppé dans',
        [Nombre.PLURIEL]: 'enveloppés dans',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'enveloppée dans',
        [Nombre.PLURIEL]: 'enveloppées dans',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '0ec60d8c-a91a-40e2-bb5e-981c19644382',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'escorté',
        [Nombre.PLURIEL]: 'escortés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'escortée',
        [Nombre.PLURIEL]: 'escortées',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '19dab334-7826-4fcb-a103-ff322ecb5672',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'escorté par',
        [Nombre.PLURIEL]: 'escortés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'escortée par',
        [Nombre.PLURIEL]: 'escortées par',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '4df5fb59-ac77-49c4-bb52-5781ca58bb40',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'et',
        [Nombre.PLURIEL]: 'et',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'et',
        [Nombre.PLURIEL]: 'et',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '5e87590f-b16a-4284-9105-f8f901951dbc',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'et sa farandole',
        [Nombre.PLURIEL]: 'et sa farandole',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'et sa farandole',
        [Nombre.PLURIEL]: 'et sa farandole',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'fa3865b6-1f38-434a-a8fa-28f14f808d3f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'et sa mélodie',
        [Nombre.PLURIEL]: 'et sa mélodie',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'et sa mélodie',
        [Nombre.PLURIEL]: 'et sa mélodie',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '61d7c8af-c77b-4b57-8724-1ad37223006b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'et sa myriade',
        [Nombre.PLURIEL]: 'et sa myriade',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'et sa myriade',
        [Nombre.PLURIEL]: 'et sa myriade',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '2031a4a8-5cd4-43d3-a1fc-2e42f36f2842',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'et sa sérénade',
        [Nombre.PLURIEL]: 'et sa sérénade',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'et sa sérénade',
        [Nombre.PLURIEL]: 'et sa sérénade',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'c584ff9d-29c1-4851-b5a6-cf0811d18a35',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'et sa symphonie',
        [Nombre.PLURIEL]: 'et sa symphonie',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'et sa symphonie',
        [Nombre.PLURIEL]: 'et sa symphonie',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '863ddd77-8a6f-47b9-a89f-71d34a1f58cb',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'et son accompagnement',
        [Nombre.PLURIEL]: 'et son accompagnement',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'et son accompagnement',
        [Nombre.PLURIEL]: 'et son accompagnement',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'e3ccb54b-f5f6-4d26-bce4-2455c88ee8e7',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'et son nuage',
        [Nombre.PLURIEL]: 'et son nuage',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'et son nuage',
        [Nombre.PLURIEL]: 'et son nuage',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.HERBE, TypeAliment.EPICE, TypeAliment.LAITIER, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE]
  },
  {
    id: '2d7a765a-ac66-4316-85a6-542e2c1a0246',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'et son sirop',
        [Nombre.PLURIEL]: 'et son sirop',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'et son sirop',
        [Nombre.PLURIEL]: 'et son sirop',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: [TypeAliment.ALCOOL, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.HERBE, TypeAliment.EPICE, TypeAliment.LAITIER, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.VIANDE_ROUGE]
  },
  {
    id: '5f54a9d2-f709-41ef-ae7f-d6d588e73bfe',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'exalté par',
        [Nombre.PLURIEL]: 'exaltés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'exaltée par',
        [Nombre.PLURIEL]: 'exaltées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '3ea89034-4b33-402b-b58f-6a1941f2b134',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fleurant bon',
        [Nombre.PLURIEL]: 'fleurant bon',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fleurant bon',
        [Nombre.PLURIEL]: 'fleurant bon',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '5de45e3a-0e46-44c4-b1ec-bc90be1cf9ff',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'frôlant',
        [Nombre.PLURIEL]: 'frôlant',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'frôlant',
        [Nombre.PLURIEL]: 'frôlant',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '9fc01594-74a1-4ab9-b4fe-5135eefe2c85',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fusionné avec',
        [Nombre.PLURIEL]: 'fusionnés avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fusionnée avec',
        [Nombre.PLURIEL]: 'fusionnées avec',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '463d44c1-302f-4e0f-bb54-5018d503161a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'généreusement garni de',
        [Nombre.PLURIEL]: 'généreusement garnis de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'généreusement garnie de',
        [Nombre.PLURIEL]: 'généreusement garnies de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'e6b3716e-ff2f-4dc6-ac1c-05f4d7cf7398',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'habillé de',
        [Nombre.PLURIEL]: 'habillés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'habillée de',
        [Nombre.PLURIEL]: 'habillées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'd8c15f59-d837-49bc-81be-889c645a3c45',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'imbibé de',
        [Nombre.PLURIEL]: 'imbibés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'imbibée de',
        [Nombre.PLURIEL]: 'imbibées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: [TypeAliment.ALCOOL, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.HERBE, TypeAliment.EPICE, TypeAliment.LAITIER, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE]
  },
  {
    id: '84ed66c5-da03-4023-a27a-352ebc072746',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'imbriqué avec',
        [Nombre.PLURIEL]: 'imbriqués avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'imbriquée avec',
        [Nombre.PLURIEL]: 'imbriquées avec',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '676bc799-b424-4888-ba1a-01e72bb7298c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'incrusté de',
        [Nombre.PLURIEL]: 'incrustés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'incrustée de',
        [Nombre.PLURIEL]: 'incrustées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.HERBE, TypeAliment.EPICE, TypeAliment.LEGUME, TypeAliment.SUCRE]
  },
  {
    id: 'fc45e78f-e638-4517-9109-c2a7b8121864',
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
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FRUIT, TypeAliment.HERBE, TypeAliment.EPICE, TypeAliment.LAITIER, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE]
  },
  {
    id: '9fb61a73-ca5b-4470-a7a8-3230dbfbdb56',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'marié à',
        [Nombre.PLURIEL]: 'mariés à',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'mariée à',
        [Nombre.PLURIEL]: 'mariées à',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '2e776830-549a-4edb-9d65-9cdcddff69ee',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'mijoté avec',
        [Nombre.PLURIEL]: 'mijotés avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'mijotée avec',
        [Nombre.PLURIEL]: 'mijotées avec',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'f8f24d62-c36e-47d8-b4dd-c22d87e86f5f',
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
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '1a1eca31-b3d2-4fe9-9455-9682ae66411c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'parfumé avec',
        [Nombre.PLURIEL]: 'parfumés avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'parfumée avec',
        [Nombre.PLURIEL]: 'parfumées avec',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'da8adf5c-0b80-4468-8af1-6d2de889fc5c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'parsemé d’éclats',
        [Nombre.PLURIEL]: 'parsemés d’éclats',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'parsemée d’éclats',
        [Nombre.PLURIEL]: 'parsemées d’éclats',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: [TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.LEGUME, TypeAliment.SUCRE]
  },
  {
    id: 'c241a55d-1fe5-4908-a4ca-b27ea7329ead',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'parsemé de',
        [Nombre.PLURIEL]: 'parsemés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'parsemée de',
        [Nombre.PLURIEL]: 'parsemées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'a4ed9b58-1029-400c-9404-557626a49050',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'prolongé par',
        [Nombre.PLURIEL]: 'prolongés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'prolongée par',
        [Nombre.PLURIEL]: 'prolongées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '6be13aaf-8ef0-4048-8724-6e99585050d3',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rehaussé d’une touche',
        [Nombre.PLURIEL]: 'rehaussés d’une touche',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rehaussée d’une touche',
        [Nombre.PLURIEL]: 'rehaussées d’une touche',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '9fd6b764-2743-4a08-a908-acdfcc0533b3',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rehaussé par',
        [Nombre.PLURIEL]: 'rehaussés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rehaussée par',
        [Nombre.PLURIEL]: 'rehaussées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'd29aed9a-a46f-4b7b-a8ce-2cd31a6bbfff',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'relevé',
        [Nombre.PLURIEL]: 'relevés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'relevée',
        [Nombre.PLURIEL]: 'relevées',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '26ac90b1-c773-4cb3-8c85-7bbe6eaa4f18',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rôti avec',
        [Nombre.PLURIEL]: 'rôtis avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rôtie avec',
        [Nombre.PLURIEL]: 'rôties avec',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '2439d3eb-e516-44ab-9704-bdce94560103',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rôtissant avec',
        [Nombre.PLURIEL]: 'rôtissants avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rôtissante avec',
        [Nombre.PLURIEL]: 'rôtissantes avec',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '539d49b4-030f-4fa6-8a0f-8ae87975e8a2',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'saupoudré de',
        [Nombre.PLURIEL]: 'saupoudrés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'saupoudrée de',
        [Nombre.PLURIEL]: 'saupoudrées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'd6b6de90-ccfe-4a55-a956-1db3a5afa30f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'souligné par',
        [Nombre.PLURIEL]: 'soulignés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'soulignée par',
        [Nombre.PLURIEL]: 'soulignées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '4b1e4ec4-3e4a-4aa7-b2c2-ca2d1924a6dc',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'sous un voile',
        [Nombre.PLURIEL]: 'sous un voile',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'sous un voile',
        [Nombre.PLURIEL]: 'sous un voile',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: [TypeAliment.ALCOOL, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.HERBE, TypeAliment.EPICE, TypeAliment.CHARCUTERIE, TypeAliment.LAITIER, TypeAliment.LEGUME, TypeAliment.LIQUIDE, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE]
  },
  {
    id: '55e0326a-a02e-47f8-88cb-1296ee1aac18',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'soutenu par',
        [Nombre.PLURIEL]: 'soutenus par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'soutenue par',
        [Nombre.PLURIEL]: 'soutenues par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '638a73d1-6a65-40ce-9951-062a4c27eb17',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'sublimé par',
        [Nombre.PLURIEL]: 'sublimés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'sublimée par',
        [Nombre.PLURIEL]: 'sublimées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '39a7903a-00f8-4bc3-84b5-755d55a5db09',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'sur son lit',
        [Nombre.PLURIEL]: 'sur son lit',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'sur son lit',
        [Nombre.PLURIEL]: 'sur son lit',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'f2af7440-64be-4478-abcc-221686bc3907',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'tapissé de',
        [Nombre.PLURIEL]: 'tapissés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'tapissée de',
        [Nombre.PLURIEL]: 'tapissées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '1c125fa1-42ed-4962-a9c4-a0bf3a3e4a4b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'teinté de',
        [Nombre.PLURIEL]: 'teintés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'teintée de',
        [Nombre.PLURIEL]: 'teintées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'c77b83c9-75ba-4e50-bf03-cb477c4c7d15',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'tendrement accompagné',
        [Nombre.PLURIEL]: 'tendrement accompagnés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'tendrement accompagnée',
        [Nombre.PLURIEL]: 'tendrement accompagnées',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'a1ac43fb-0033-40f1-8125-c6f2127d04ef',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'tendu vers',
        [Nombre.PLURIEL]: 'tendus vers',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'tendue vers',
        [Nombre.PLURIEL]: 'tendues vers',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '497f177c-390d-4d9c-852e-26d9a96ea97b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'transcendé par',
        [Nombre.PLURIEL]: 'transcendés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'transcendée par',
        [Nombre.PLURIEL]: 'transcendées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'bf5b5914-3777-478b-814f-98d2e1db4332',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'trempé dans',
        [Nombre.PLURIEL]: 'trempés dans',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'trempée dans',
        [Nombre.PLURIEL]: 'trempées dans',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: [TypeAliment.ALCOOL, TypeAliment.BASE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.LAITIER, TypeAliment.LIQUIDE, TypeAliment.SAUCE, TypeAliment.SOFT, TypeAliment.SUCRE]
  },
  {
    id: '6285e932-6b96-4692-9f95-14c6102722f1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'uni à',
        [Nombre.PLURIEL]: 'unis à',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'unie à',
        [Nombre.PLURIEL]: 'unies à',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '8139c67e-0986-4fb1-b791-98a2cfd8d5f1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'valorisé par',
        [Nombre.PLURIEL]: 'valorisés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'valorisée par',
        [Nombre.PLURIEL]: 'valorisées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    unthemedOnly: true,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'c6f08f38-ae70-4464-ab32-2fc23b31fa87',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'vibrant avec',
        [Nombre.PLURIEL]: 'vibrants avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'vibrante avec',
        [Nombre.PLURIEL]: 'vibrantes avec',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '1c21b7cb-b837-4680-a5b5-2068b3831e4f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'voilé dans',
        [Nombre.PLURIEL]: 'voilés dans',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'voilée dans',
        [Nombre.PLURIEL]: 'voilées dans',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'ccdca61a-d596-4abe-a391-af3bccccf6ca',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'posé en équilibre sur',
        [Nombre.PLURIEL]: 'posés en équilibre sur',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'posée en équilibre sur',
        [Nombre.PLURIEL]: 'posées en équilibre sur',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: [TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.HERBE, TypeAliment.EPICE, TypeAliment.CHARCUTERIE, TypeAliment.LAITIER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE]
  },
  {
    id: 'bd72a303-3834-439f-8a55-4f1a6d03f173',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'dressé autour de',
        [Nombre.PLURIEL]: 'dressés autour de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'dressée autour de',
        [Nombre.PLURIEL]: 'dressées autour de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '1fba1e75-9ecc-4515-b44e-8476f444fbfe',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'glissé sous',
        [Nombre.PLURIEL]: 'glissés sous',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'glissée sous',
        [Nombre.PLURIEL]: 'glissées sous',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: [TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.HERBE, TypeAliment.EPICE, TypeAliment.CHARCUTERIE, TypeAliment.LAITIER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE]
  },
  {
    id: '054ac029-9cf6-4ae6-9162-a538e7effff5',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'déployé autour de',
        [Nombre.PLURIEL]: 'déployés autour de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'déployée autour de',
        [Nombre.PLURIEL]: 'déployées autour de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '482613bf-7175-45d9-840d-43e19798b2a3',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'reposant sur',
        [Nombre.PLURIEL]: 'reposant sur',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'reposant sur',
        [Nombre.PLURIEL]: 'reposant sur',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '8c1467db-98be-4345-8bb9-40431709a443',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'ponctué par',
        [Nombre.PLURIEL]: 'ponctués par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'ponctuée par',
        [Nombre.PLURIEL]: 'ponctuées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '3742d664-63e7-4029-9ae4-598fb48c015e',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'dialoguant avec',
        [Nombre.PLURIEL]: 'dialoguant avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'dialoguant avec',
        [Nombre.PLURIEL]: 'dialoguant avec',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    unthemedOnly: true,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'a5d19147-90f7-4fa6-97d8-4a90ab726138',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'en conversation avec',
        [Nombre.PLURIEL]: 'en conversation avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'en conversation avec',
        [Nombre.PLURIEL]: 'en conversation avec',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    unthemedOnly: true,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'fbe713ca-ae4d-4a59-9768-bb4e9143e06b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'en confidence avec',
        [Nombre.PLURIEL]: 'en confidence avec',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'en confidence avec',
        [Nombre.PLURIEL]: 'en confidence avec',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    unthemedOnly: true,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '9362ef59-2a3c-4f19-a4f2-3bcc37e2c391',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'escorté d’un murmure',
        [Nombre.PLURIEL]: 'escortés d’un murmure',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'escortée d’un murmure',
        [Nombre.PLURIEL]: 'escortées d’un murmure',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'ff4db313-56b8-42b5-8a11-f3f2f2ea6057',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'retenu par un soupçon',
        [Nombre.PLURIEL]: 'retenus par un soupçon',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'retenue par un soupçon',
        [Nombre.PLURIEL]: 'retenues par un soupçon',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '4f42e726-a271-4105-af70-12646a355afd',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'traversé par une intuition',
        [Nombre.PLURIEL]: 'traversés par une intuition',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'traversée par une intuition',
        [Nombre.PLURIEL]: 'traversées par une intuition',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    unthemedOnly: true,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'dbf0d73c-05dc-4a5f-8df2-344c1de8c2b1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'réveillé par',
        [Nombre.PLURIEL]: 'réveillés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'réveillée par',
        [Nombre.PLURIEL]: 'réveillées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '3db24dc0-7927-4ecd-9b7d-22aec9687388',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'arrondi par',
        [Nombre.PLURIEL]: 'arrondis par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'arrondie par',
        [Nombre.PLURIEL]: 'arrondies par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '91999e37-141d-4482-8f7c-e237444921a5',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'rafraîchi par',
        [Nombre.PLURIEL]: 'rafraîchis par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'rafraîchie par',
        [Nombre.PLURIEL]: 'rafraîchies par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'a7dccd8a-43ea-4f4a-af12-a2153e55b000',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'réchauffé par',
        [Nombre.PLURIEL]: 'réchauffés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'réchauffée par',
        [Nombre.PLURIEL]: 'réchauffées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'ba4427e5-d2d0-49d6-bbb7-023bc0c60be5',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'bousculé par',
        [Nombre.PLURIEL]: 'bousculés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'bousculée par',
        [Nombre.PLURIEL]: 'bousculées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '1d0451bc-3ae9-494b-8d11-b0a9887026f9',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'calmé par',
        [Nombre.PLURIEL]: 'calmés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'calmée par',
        [Nombre.PLURIEL]: 'calmées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'e9615306-fbd4-490e-8b0f-53edcbeae68d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'malicieusement contrarié par',
        [Nombre.PLURIEL]: 'malicieusement contrariés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'malicieusement contrariée par',
        [Nombre.PLURIEL]: 'malicieusement contrariées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '8333399f-b28d-4e9a-a299-abe1fa7c2378',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'mis en orbite par',
        [Nombre.PLURIEL]: 'mis en orbite par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'mise en orbite par',
        [Nombre.PLURIEL]: 'mises en orbite par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    unthemedOnly: true,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '34207168-ff2f-4a47-8b58-aafb0285fe57',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'accolé à',
        [Nombre.PLURIEL]: 'accolés à',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'accolée à',
        [Nombre.PLURIEL]: 'accolées à',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: [TypeAliment.BASE, TypeAliment.CEREALE, TypeAliment.CHAMPIGNON, TypeAliment.FROMAGE, TypeAliment.FRUIT, TypeAliment.FRUIT_A_COQUE, TypeAliment.FRUIT_DE_MER, TypeAliment.CHARCUTERIE, TypeAliment.LAITIER, TypeAliment.LEGUME, TypeAliment.POISSON, TypeAliment.SALADE, TypeAliment.SUCRE, TypeAliment.VIANDE_BLANCHE, TypeAliment.VIANDE_ROUGE]
  },
  {
    id: 'c4478694-8927-42a5-a11f-2d238f4e6867',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'magnifié par',
        [Nombre.PLURIEL]: 'magnifiés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'magnifiée par',
        [Nombre.PLURIEL]: 'magnifiées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'df98ed1b-b58d-4f64-91d1-d45811e7878f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'consacré par',
        [Nombre.PLURIEL]: 'consacrés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'consacrée par',
        [Nombre.PLURIEL]: 'consacrées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '6a840d78-25f1-4973-b68b-020562b238e1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'élevé par',
        [Nombre.PLURIEL]: 'élevés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'élevée par',
        [Nombre.PLURIEL]: 'élevées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'ee37826e-d0e5-4a4b-b3f4-92a7e31e9019',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'célébré par',
        [Nombre.PLURIEL]: 'célébrés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'célébrée par',
        [Nombre.PLURIEL]: 'célébrées par',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '56531020-2e2c-4b69-aa66-122ff89fb934',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'couronné d’un souffle',
        [Nombre.PLURIEL]: 'couronnés d’un souffle',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'couronnée d’un souffle',
        [Nombre.PLURIEL]: 'couronnées d’un souffle',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    compatibleIngredientTypes: alimentTypePresets.allWithoutCharcuterieAndRedMeat
  },
  {
    id: 'cb34194c-b3bd-4b22-912a-b8a60a404f5f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'guidé par une note',
        [Nombre.PLURIEL]: 'guidés par une note',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'guidée par une note',
        [Nombre.PLURIEL]: 'guidées par une note',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.allWithoutCharcuterieAndRedMeat
  },
  {
    id: '05ccb100-468e-4747-bb0b-f1ff1ef913d9',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'suspendu à',
        [Nombre.PLURIEL]: 'suspendus à',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'suspendue à',
        [Nombre.PLURIEL]: 'suspendues à',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '898f77fc-7c09-41bb-ae09-6709a68b9b63',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'bercé par',
        [Nombre.PLURIEL]: 'bercés par',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'bercée par',
        [Nombre.PLURIEL]: 'bercées par',
      },
    },
    suite: TypeDeterminant.ARTICLE_INDEFINI,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'f510fe73-7cd7-4a27-af87-066b96d325d6',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'enveloppé d’un murmure',
        [Nombre.PLURIEL]: 'enveloppés d’un murmure',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'enveloppée d’un murmure',
        [Nombre.PLURIEL]: 'enveloppées d’un murmure',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: '6b855949-20f2-46f1-a30c-28f033df410c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'réveillé au parfum',
        [Nombre.PLURIEL]: 'réveillés au parfum',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'réveillée au parfum',
        [Nombre.PLURIEL]: 'réveillées au parfum',
      },
    },
    suite: TypeDeterminant.PRINCIPAL,
    themes: themePresets.allSeasons,
    compatibleIngredientTypes: alimentTypePresets.all
  },
  {
    id: 'ff0e01e3-a65e-479c-8834-308de4ad9505',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'en hommage à',
        [Nombre.PLURIEL]: 'en hommage à',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'en hommage à',
        [Nombre.PLURIEL]: 'en hommage à',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
    compatibleIngredientTypes: alimentTypePresets.all
  },
];
export default liens;
