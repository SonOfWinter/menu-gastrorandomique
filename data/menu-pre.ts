import { Genre } from '@/types/enums/genre';
import { Nombre } from '@/types/enums/nombre';
import { TypePlat } from '@/types/enums/type-plat';
import { Pre } from '@/types/data/pre';

const pres: Pre[] = [
  {
    id: '33023faa-abcb-4c56-9e08-a5d35c69ba16',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'aérien',
        [Nombre.PLURIEL]: 'les aériens',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'aérienne',
        [Nombre.PLURIEL]: 'les aériennes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'cbb038c4-e9fe-4c7a-945f-11cb530bbc49',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'alléchant',
        [Nombre.PLURIEL]: 'les alléchants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'alléchante',
        [Nombre.PLURIEL]: 'les alléchantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '27e89818-acf2-422d-8230-3e3c79607be4',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'ancestral',
        [Nombre.PLURIEL]: 'les ancestraux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'ancestrale',
        [Nombre.PLURIEL]: 'les ancestrales',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'e75143cd-11e1-4d30-a84f-e527185f2871',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'appétissant',
        [Nombre.PLURIEL]: 'les appétissants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'appétissante',
        [Nombre.PLURIEL]: 'les appétissantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '2db2867b-80d7-4484-baf6-e3b045153fa2',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'aromatique',
        [Nombre.PLURIEL]: 'les aromatiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'aromatique',
        [Nombre.PLURIEL]: 'les aromatiques',
      },
    },
    types: [TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '0ee0fb53-150f-4eb4-a649-9eb85e9e92eb',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'audacieux',
        [Nombre.PLURIEL]: 'les audacieux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'audacieuse',
        [Nombre.PLURIEL]: 'les audacieuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '24dab967-4882-41ff-ad97-1f1efa998f5f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'authentique',
        [Nombre.PLURIEL]: 'les authentiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'authentique',
        [Nombre.PLURIEL]: 'les authentiques',
      },
    },
    types: [TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '402baa14-d6c2-429e-85b7-f0eae75b3795',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'authentique',
        [Nombre.PLURIEL]: 'les authentiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'authentique',
        [Nombre.PLURIEL]: 'les authentiques',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.PLAT],
  },
  {
    id: '3a8cf34d-d80f-4772-be9a-3f336dab79b6',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'avant-gardiste',
        [Nombre.PLURIEL]: 'les avant-gardistes',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'avant-gardiste',
        [Nombre.PLURIEL]: 'les avant-gardistes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'e55c2b74-7f34-4bb1-9808-d6b5e106f992',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'excellent',
        [Nombre.PLURIEL]: 'les excellents',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'excellente',
        [Nombre.PLURIEL]: 'les excellentes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '02a753db-1cf4-4baa-9575-9c0516d6987c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'incomparable',
        [Nombre.PLURIEL]: 'les incomparables',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'incomparable',
        [Nombre.PLURIEL]: 'les incomparables',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '91e9cfca-91f9-4b12-9ce8-b67e5993a7fb',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'incontournable',
        [Nombre.PLURIEL]: 'les incontournables',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'incontournable',
        [Nombre.PLURIEL]: 'les incontournables',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'f8cd1543-1c83-4e05-bdd3-a835c43ef32d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'indémodable',
        [Nombre.PLURIEL]: 'les indémodables',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'indémodable',
        [Nombre.PLURIEL]: 'les indémodables',
      },
    },
    types: [TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '354a0d91-d9e9-4d63-b6d0-1f1a21437bb7',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'innovant',
        [Nombre.PLURIEL]: 'les innovants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'innovante',
        [Nombre.PLURIEL]: 'les innovantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'bd5a9a01-c8a7-47ec-b46e-aedd54a06022',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'inoubliable',
        [Nombre.PLURIEL]: 'les inoubliables',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'inoubliable',
        [Nombre.PLURIEL]: 'les inoubliables',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '691cd7bc-9e3a-4cd2-9362-657624b6db2f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'intrigant',
        [Nombre.PLURIEL]: 'les intrigants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'intrigante',
        [Nombre.PLURIEL]: 'les intrigantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '2455cdc2-5eab-44f6-ae3d-5452fd761700',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'odoriférant',
        [Nombre.PLURIEL]: 'les odoriférants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'odoriférante',
        [Nombre.PLURIEL]: 'les odoriférantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '17219316-681d-44c6-88a9-760006799c1c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le captivant',
        [Nombre.PLURIEL]: 'les captivants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la captivante',
        [Nombre.PLURIEL]: 'les captivantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '355d8032-e464-4faf-855c-5f6e21ab2219',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le célèbre',
        [Nombre.PLURIEL]: 'les célèbres',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la célèbre',
        [Nombre.PLURIEL]: 'les célèbres',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '2ae5c08e-63e6-4561-ae54-4e98423c2b3f',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le charmant',
        [Nombre.PLURIEL]: 'les charmants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la charmante',
        [Nombre.PLURIEL]: 'les charmantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'c1d238e0-b7e4-4dfb-8583-9bb933b8aaf8',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le classique',
        [Nombre.PLURIEL]: 'les classiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la classique',
        [Nombre.PLURIEL]: 'les classiques',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '1dc5c87a-cd8f-4627-8bf1-fbf53f0cbd17',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le cultissime',
        [Nombre.PLURIEL]: 'les cultissimes',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la cultissime',
        [Nombre.PLURIEL]: 'les cultissimes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'b9939ac9-c3ce-42b2-900e-8f3d705811a9',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le délicieux',
        [Nombre.PLURIEL]: 'les délicieux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la délicieuse',
        [Nombre.PLURIEL]: 'les délicieuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '6262778f-785b-4e03-8d2d-cd2ff9443c0b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le divin',
        [Nombre.PLURIEL]: 'les divins',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la divine',
        [Nombre.PLURIEL]: 'les divines',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'd35b2b94-eefb-4526-b993-ea6010057fa7',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le doux',
        [Nombre.PLURIEL]: 'les doux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la douce',
        [Nombre.PLURIEL]: 'les douces',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'cb1c6eaf-03cf-450f-8db0-ec9a82e36890',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le élégant',
        [Nombre.PLURIEL]: 'les élégants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la élégante',
        [Nombre.PLURIEL]: 'les élégantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '526f7eb6-23a6-4e82-b118-1fac712b93a3',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le fabuleux',
        [Nombre.PLURIEL]: 'les fabuleux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la fabuleuse',
        [Nombre.PLURIEL]: 'les fabuleuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'd95c3fdc-ef8c-45f6-9782-64a3a79a64e1',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le fameux',
        [Nombre.PLURIEL]: 'les fameux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la fameuse',
        [Nombre.PLURIEL]: 'les fameuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'bf103d82-7467-482c-b450-e0f068f91379',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le formidable',
        [Nombre.PLURIEL]: 'les formidables',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la formidable',
        [Nombre.PLURIEL]: 'les formidables',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '606a3430-00dc-4747-80e3-1514d5e9c930',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le généreux',
        [Nombre.PLURIEL]: 'les généreux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la généreuse',
        [Nombre.PLURIEL]: 'les généreuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '54d41b14-94ca-4cb8-8c36-bc33a83d0dff',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le gourmand',
        [Nombre.PLURIEL]: 'les gourmands',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la gourmande',
        [Nombre.PLURIEL]: 'les gourmandes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '7033f0e9-7aee-4c75-96bd-3c47f95f3387',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le goûteux',
        [Nombre.PLURIEL]: 'les goûteux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la goûteuse',
        [Nombre.PLURIEL]: 'les goûteuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'a206cc32-63c3-4578-ab62-b726974ec580',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le légendaire',
        [Nombre.PLURIEL]: 'les légendaires',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la légendaire',
        [Nombre.PLURIEL]: 'les légendaires',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '7803cdf6-be36-4ac9-b38f-2442beba17af',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le magnifique',
        [Nombre.PLURIEL]: 'les magnifiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la magnifique',
        [Nombre.PLURIEL]: 'les magnifiques',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '44118d11-3444-465c-884a-038efde50f15',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le majestueux',
        [Nombre.PLURIEL]: 'les majestueux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la majestueuse',
        [Nombre.PLURIEL]: 'les majestueuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '3f10297f-2474-4842-8fd0-abad18e091ca',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le mirifique',
        [Nombre.PLURIEL]: 'les mirifiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la mirifique',
        [Nombre.PLURIEL]: 'les mirifiques',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '3385bab0-5ed4-472e-b734-67557d13ee64',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le mythique',
        [Nombre.PLURIEL]: 'les mythiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la mythique',
        [Nombre.PLURIEL]: 'les mythiques',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'a7309c35-6401-4daa-8697-e10190764065',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le noble',
        [Nombre.PLURIEL]: 'les nobles',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la noble',
        [Nombre.PLURIEL]: 'les nobles',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'fb8c441a-c08d-49dc-ac1b-fd3597da69f5',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le parfait',
        [Nombre.PLURIEL]: 'les parfaits',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la parfaite',
        [Nombre.PLURIEL]: 'les parfaites',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'f086ec2d-c766-41bc-906d-a6229508ae99',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le poétique',
        [Nombre.PLURIEL]: 'les poétiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la poétique',
        [Nombre.PLURIEL]: 'les poétiques',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'ba3a3ed9-2b66-48bb-bad1-8ce6eaee65cb',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le prodigieux',
        [Nombre.PLURIEL]: 'les prodigieux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la prodigieuse',
        [Nombre.PLURIEL]: 'les prodigieuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'd24f63b6-0e3c-46b1-9282-7a6c174f3466',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le raffiné',
        [Nombre.PLURIEL]: 'les raffinés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la raffinée',
        [Nombre.PLURIEL]: 'les raffinées',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '0ae6e7d5-a992-4f9c-a4e0-89055ebf2fd5',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le réconfortant',
        [Nombre.PLURIEL]: 'les réconfortants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la réconfortante',
        [Nombre.PLURIEL]: 'les réconfortantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'c9dabc3e-d398-4877-b0c3-86e48ef13f1b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le réinventé',
        [Nombre.PLURIEL]: 'les réinventés',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la réinventée',
        [Nombre.PLURIEL]: 'les réinventées',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '1a7d8082-4d5e-46b3-8c76-2ae839fde6bb',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le rustique',
        [Nombre.PLURIEL]: 'les rustiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la rustique',
        [Nombre.PLURIEL]: 'les rustiques',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'd40886ef-1e98-4260-9ec3-19687f1bf72d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le savoureux',
        [Nombre.PLURIEL]: 'les savoureux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la savoureuse',
        [Nombre.PLURIEL]: 'les savoureuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '04b68152-50c5-4911-be46-5f87a824aa25',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le sensationnel',
        [Nombre.PLURIEL]: 'les sensationnels',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la sensationnelle',
        [Nombre.PLURIEL]: 'les sensationnelles',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '25e06564-6ef9-4fab-9ecb-ff651e7b67fa',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le sophistiqué',
        [Nombre.PLURIEL]: 'les sophistiqués',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la sophistiquée',
        [Nombre.PLURIEL]: 'les sophistiquées',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'e7c8bced-857e-4f19-8eaa-f5c5e4415c9d',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le subtil',
        [Nombre.PLURIEL]: 'les subtils',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la subtile',
        [Nombre.PLURIEL]: 'les subtiles',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: 'eea2e206-0546-432c-9cca-cbf4b98b4f38',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le succulent',
        [Nombre.PLURIEL]: 'les succulents',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la succulente',
        [Nombre.PLURIEL]: 'les succulentes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '630118c2-d8b7-42f3-83f9-4a4c226ed38c',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le surprenant',
        [Nombre.PLURIEL]: 'les surprenants',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la surprenante',
        [Nombre.PLURIEL]: 'les surprenantes',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '25f25a19-7c82-4ea1-a962-cc143e8e146b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le tendre',
        [Nombre.PLURIEL]: 'les tendres',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la tendre',
        [Nombre.PLURIEL]: 'les tendres',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '8e894b7e-9c5f-488b-b86d-07bb12aa99fe',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le traditionnel',
        [Nombre.PLURIEL]: 'les traditionnels',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la traditionnelle',
        [Nombre.PLURIEL]: 'les traditionnelles',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '0b4c51c8-1b1f-44cc-8f4d-1b62a6b22f0e',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le féerique',
        [Nombre.PLURIEL]: 'les féeriques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la féerique',
        [Nombre.PLURIEL]: 'les féeriques',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '4b0f5a7a-4fb2-4d8e-8d1f-82a2d0c14c72',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le mirifique',
        [Nombre.PLURIEL]: 'les mirifiques',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la mirifique',
        [Nombre.PLURIEL]: 'les mirifiques',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '6f47c3c2-0a7e-4b07-b1e1-6d6e9b1cf3d8',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le merveilleux',
        [Nombre.PLURIEL]: 'les merveilleux',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la merveilleuse',
        [Nombre.PLURIEL]: 'les merveilleuses',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '2c1f8a5b-6b7e-4b07-b5bb-3ab2e2b2ef4b',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'le perfectible',
        [Nombre.PLURIEL]: 'les perfectibles',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'la perfectible',
        [Nombre.PLURIEL]: 'les perfectibles',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
  {
    id: '8b2e15c2-6b2d-4a0e-9f3a-94b9f6e4c5a4',
    noms: {
      [Genre.MASCULIN]: {
        [Nombre.SINGULIER]: 'l\'alambiqué',
        [Nombre.PLURIEL]: 'les alambiqués',
      },
      [Genre.FEMININ]: {
        [Nombre.SINGULIER]: 'l\'alambiquée',
        [Nombre.PLURIEL]: 'les alambiquées',
      },
    },
    types: [TypePlat.ENTREE, TypePlat.DESSERT, TypePlat.PLAT],
  },
];
export default pres;
