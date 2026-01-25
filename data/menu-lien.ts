import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypeDeterminant } from '@/types/enums/type-determinant';
import { Lien } from '@/types/data/lien';

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
  },
  {
    id: '1adcf0ff-d7fe-44e9-ab24-956dfbdf47d6',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'accompagné de',
        [Nombre.PLURIEL]: 'accompagnés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'accompagnée de',
        [Nombre.PLURIEL]: 'accompagnées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
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
  },
  {
    id: '4010c449-50b4-4de5-9a6f-1c91447ad57a',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'agrémenté de',
        [Nombre.PLURIEL]: 'agrémentés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'agrémentée de',
        [Nombre.PLURIEL]: 'agrémentées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
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
  },
  {
    id: 'b016a0f1-2872-4901-92bf-e16577bab4d4',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'bordé de',
        [Nombre.PLURIEL]: 'bordés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'bordée de',
        [Nombre.PLURIEL]: 'bordées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
  },
  {
    id: 'f4a015ec-6836-4517-a706-b92d483adfce',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'caressé',
        [Nombre.PLURIEL]: 'caressés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'caressée',
        [Nombre.PLURIEL]: 'caressées',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
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
    suite: TypeDeterminant.SECONDAIRE,
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
    suite: TypeDeterminant.SECONDAIRE,
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
    suite: TypeDeterminant.SECONDAIRE,
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
  },
  {
    id: '94d11bbd-4cb6-4772-aa12-d6db5d8d106f',
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
    suite: TypeDeterminant.POSSESSIF,
  },
  {
    id: '3ea89034-4b33-402b-b58f-6a1941f2b134',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'fleurant bon',
        [Nombre.PLURIEL]: 'fleurant bon',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'fleurant bonne',
        [Nombre.PLURIEL]: 'fleurant bonnes',
      },
    },
    suite: TypeDeterminant.SECONDAIRE,
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
    suite: TypeDeterminant.SECONDAIRE,
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
    suite: TypeDeterminant.SECONDAIRE,
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
  },
  {
    id: 'fc45e78f-e638-4517-9109-c2a7b8121864',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'infusé de',
        [Nombre.PLURIEL]: 'infusés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'infusée de',
        [Nombre.PLURIEL]: 'infusées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
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
    suite: TypeDeterminant.SECONDAIRE,
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
    suite: TypeDeterminant.SECONDAIRE,
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
    suite: TypeDeterminant.SECONDAIRE,
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
  },
  {
    id: 'c77b83c9-75ba-4e50-bf03-cb477c4c7d15',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'tendrement accompagné de',
        [Nombre.PLURIEL]: 'tendrement accompagnés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'tendrement accompagnée de',
        [Nombre.PLURIEL]: 'tendrement accompagnées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
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
    suite: TypeDeterminant.SECONDAIRE,
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
    suite: TypeDeterminant.SECONDAIRE,
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
    suite: TypeDeterminant.SECONDAIRE,
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
  },
  {
    id: 'abab420f-3acd-44ba-812f-f95f2de9e560',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'voilé de',
        [Nombre.PLURIEL]: 'voilés de',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'voilée de',
        [Nombre.PLURIEL]: 'voilées de',
      },
    },
    suite: TypeDeterminant.POSSESSIF,
  },
];
export default liens;
