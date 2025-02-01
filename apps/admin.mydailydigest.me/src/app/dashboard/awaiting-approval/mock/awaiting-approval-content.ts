import { DEFAULT_LANG_CODE, ISpiritualDailyDigest } from '@cccsharonparish/mydailydigest';

 const MOCK: ISpiritualDailyDigest[] = [
   {
     id: '01-01-2025',
     year: 2025,
     month: 1,
     day: 1,
     imageUrl: 'https://example.com/image_01-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message:
             'God so loved the world that He gave His only Son.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, alias consectetur ipsum facere totam sed tempora, molestiae magni labore quisquam laboriosam quos ducimus. Fugit facilis nihil provident voluptas atque ab?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, alias consectetur ipsum facere totam sed tempora, molestiae magni labore quisquam laboriosam quos ducimus. Fugit facilis nihil provident voluptas atque ab?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, alias consectetur ipsum facere totam sed tempora, molestiae magni labore quisquam laboriosam quos ducimus. Fugit facilis nihil provident voluptas atque ab? ',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_01-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-01T00:00:00',
     updatedAt: '2025-01-01T00:00:00',
   },
   {
     id: '02-01-2025',
     year: 2025,
     month: 1,
     day: 2,
     imageUrl: 'https://example.com/image_02-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-02T00:00:00',
     updatedAt: '2025-01-02T00:00:00',
   },
   {
     id: '03-01-2025',
     year: 2025,
     month: 1,
     day: 3,
     imageUrl: 'https://example.com/image_03-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_03-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-03T00:00:00',
     updatedAt: '2025-01-03T00:00:00',
   },
   {
     id: '04-01-2025',
     year: 2025,
     month: 1,
     day: 4,
     imageUrl: 'https://example.com/image_04-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-04T00:00:00',
     updatedAt: '2025-01-04T00:00:00',
   },
   {
     id: '05-01-2025',
     year: 2025,
     month: 1,
     day: 5,
     imageUrl: 'https://example.com/image_05-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-05T00:00:00',
     updatedAt: '2025-01-05T00:00:00',
   },
   {
     id: '06-01-2025',
     year: 2025,
     month: 1,
     day: 6,
     imageUrl: 'https://example.com/image_06-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-06T00:00:00',
     updatedAt: '2025-01-06T00:00:00',
   },
   {
     id: '07-01-2025',
     year: 2025,
     month: 1,
     day: 7,
     imageUrl: 'https://example.com/image_07-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_07-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_07-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-07T00:00:00',
     updatedAt: '2025-01-07T00:00:00',
   },
   {
     id: '08-01-2025',
     year: 2025,
     month: 1,
     day: 8,
     imageUrl: 'https://example.com/image_08-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-08T00:00:00',
     updatedAt: '2025-01-08T00:00:00',
   },
   {
     id: '09-01-2025',
     year: 2025,
     month: 1,
     day: 9,
     imageUrl: 'https://example.com/image_09-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-09T00:00:00',
     updatedAt: '2025-01-09T00:00:00',
   },
   {
     id: '10-01-2025',
     year: 2025,
     month: 1,
     day: 10,
     imageUrl: 'https://example.com/image_10-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-10T00:00:00',
     updatedAt: '2025-01-10T00:00:00',
   },
   {
     id: '11-01-2025',
     year: 2025,
     month: 1,
     day: 11,
     imageUrl: 'https://example.com/image_11-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-11T00:00:00',
     updatedAt: '2025-01-11T00:00:00',
   },
   {
     id: '12-01-2025',
     year: 2025,
     month: 1,
     day: 12,
     imageUrl: 'https://example.com/image_12-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-12T00:00:00',
     updatedAt: '2025-01-12T00:00:00',
   },
   {
     id: '13-01-2025',
     year: 2025,
     month: 1,
     day: 13,
     imageUrl: 'https://example.com/image_13-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-13T00:00:00',
     updatedAt: '2025-01-13T00:00:00',
   },
   {
     id: '14-01-2025',
     year: 2025,
     month: 1,
     day: 14,
     imageUrl: 'https://example.com/image_14-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-14T00:00:00',
     updatedAt: '2025-01-14T00:00:00',
   },
   {
     id: '15-01-2025',
     year: 2025,
     month: 1,
     day: 15,
     imageUrl: 'https://example.com/image_15-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-15T00:00:00',
     updatedAt: '2025-01-15T00:00:00',
   },
   {
     id: '16-01-2025',
     year: 2025,
     month: 1,
     day: 16,
     imageUrl: 'https://example.com/image_16-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-16T00:00:00',
     updatedAt: '2025-01-16T00:00:00',
   },
   {
     id: '17-01-2025',
     year: 2025,
     month: 1,
     day: 17,
     imageUrl: 'https://example.com/image_17-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-17T00:00:00',
     updatedAt: '2025-01-17T00:00:00',
   },
   {
     id: '18-01-2025',
     year: 2025,
     month: 1,
     day: 18,
     imageUrl: 'https://example.com/image_18-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-18T00:00:00',
     updatedAt: '2025-01-18T00:00:00',
   },
   {
     id: '19-01-2025',
     year: 2025,
     month: 1,
     day: 19,
     imageUrl: 'https://example.com/image_19-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_19-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-19T00:00:00',
     updatedAt: '2025-01-19T00:00:00',
   },
   {
     id: '20-01-2025',
     year: 2025,
     month: 1,
     day: 20,
     imageUrl: 'https://example.com/image_20-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_20-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-20T00:00:00',
     updatedAt: '2025-01-20T00:00:00',
   },
   {
     id: '21-01-2025',
     year: 2025,
     month: 1,
     day: 21,
     imageUrl: 'https://example.com/image_21-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-21T00:00:00',
     updatedAt: '2025-01-21T00:00:00',
   },
   {
     id: '22-01-2025',
     year: 2025,
     month: 1,
     day: 22,
     imageUrl: 'https://example.com/image_22-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-22T00:00:00',
     updatedAt: '2025-01-22T00:00:00',
   },
   {
     id: '23-01-2025',
     year: 2025,
     month: 1,
     day: 23,
     imageUrl: 'https://example.com/image_23-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-23T00:00:00',
     updatedAt: '2025-01-23T00:00:00',
   },
   {
     id: '24-01-2025',
     year: 2025,
     month: 1,
     day: 24,
     imageUrl: 'https://example.com/image_24-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-24T00:00:00',
     updatedAt: '2025-01-24T00:00:00',
   },
   {
     id: '25-01-2025',
     year: 2025,
     month: 1,
     day: 25,
     imageUrl: 'https://example.com/image_25-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_25-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-25T00:00:00',
     updatedAt: '2025-01-25T00:00:00',
   },
   {
     id: '26-01-2025',
     year: 2025,
     month: 1,
     day: 26,
     imageUrl: 'https://example.com/image_26-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-26T00:00:00',
     updatedAt: '2025-01-26T00:00:00',
   },
   {
     id: '27-01-2025',
     year: 2025,
     month: 1,
     day: 27,
     imageUrl: 'https://example.com/image_27-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-27T00:00:00',
     updatedAt: '2025-01-27T00:00:00',
   },
   {
     id: '28-01-2025',
     year: 2025,
     month: 1,
     day: 28,
     imageUrl: 'https://example.com/image_28-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-28T00:00:00',
     updatedAt: '2025-01-28T00:00:00',
   },
   {
     id: '29-01-2025',
     year: 2025,
     month: 1,
     day: 29,
     imageUrl: 'https://example.com/image_29-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-29T00:00:00',
     updatedAt: '2025-01-29T00:00:00',
   },
   {
     id: '30-01-2025',
     year: 2025,
     month: 1,
     day: 30,
     imageUrl: 'https://example.com/image_30-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_30-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_30-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-30T00:00:00',
     updatedAt: '2025-01-30T00:00:00',
   },
   {
     id: '31-01-2025',
     year: 2025,
     month: 1,
     day: 31,
     imageUrl: 'https://example.com/image_31-01-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_31-01-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_31-01-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_31-01-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-01-31T00:00:00',
     updatedAt: '2025-01-31T00:00:00',
   },
   {
     id: '01-02-2025',
     year: 2025,
     month: 2,
     day: 1,
     imageUrl: 'https://example.com/image_01-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-01T00:00:00',
     updatedAt: '2025-02-01T00:00:00',
   },
   {
     id: '02-02-2025',
     year: 2025,
     month: 2,
     day: 2,
     imageUrl: 'https://example.com/image_02-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_02-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-02T00:00:00',
     updatedAt: '2025-02-02T00:00:00',
   },
   {
     id: '03-02-2025',
     year: 2025,
     month: 2,
     day: 3,
     imageUrl: 'https://example.com/image_03-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-03T00:00:00',
     updatedAt: '2025-02-03T00:00:00',
   },
   {
     id: '04-02-2025',
     year: 2025,
     month: 2,
     day: 4,
     imageUrl: 'https://example.com/image_04-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-04T00:00:00',
     updatedAt: '2025-02-04T00:00:00',
   },
   {
     id: '05-02-2025',
     year: 2025,
     month: 2,
     day: 5,
     imageUrl: 'https://example.com/image_05-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_05-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-05T00:00:00',
     updatedAt: '2025-02-05T00:00:00',
   },
   {
     id: '06-02-2025',
     year: 2025,
     month: 2,
     day: 6,
     imageUrl: 'https://example.com/image_06-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-06T00:00:00',
     updatedAt: '2025-02-06T00:00:00',
   },
   {
     id: '07-02-2025',
     year: 2025,
     month: 2,
     day: 7,
     imageUrl: 'https://example.com/image_07-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-07T00:00:00',
     updatedAt: '2025-02-07T00:00:00',
   },
   {
     id: '08-02-2025',
     year: 2025,
     month: 2,
     day: 8,
     imageUrl: 'https://example.com/image_08-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-08T00:00:00',
     updatedAt: '2025-02-08T00:00:00',
   },
   {
     id: '09-02-2025',
     year: 2025,
     month: 2,
     day: 9,
     imageUrl: 'https://example.com/image_09-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-09T00:00:00',
     updatedAt: '2025-02-09T00:00:00',
   },
   {
     id: '10-02-2025',
     year: 2025,
     month: 2,
     day: 10,
     imageUrl: 'https://example.com/image_10-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_10-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-10T00:00:00',
     updatedAt: '2025-02-10T00:00:00',
   },
   {
     id: '11-02-2025',
     year: 2025,
     month: 2,
     day: 11,
     imageUrl: 'https://example.com/image_11-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-11T00:00:00',
     updatedAt: '2025-02-11T00:00:00',
   },
   {
     id: '12-02-2025',
     year: 2025,
     month: 2,
     day: 12,
     imageUrl: 'https://example.com/image_12-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-12T00:00:00',
     updatedAt: '2025-02-12T00:00:00',
   },
   {
     id: '13-02-2025',
     year: 2025,
     month: 2,
     day: 13,
     imageUrl: 'https://example.com/image_13-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-13T00:00:00',
     updatedAt: '2025-02-13T00:00:00',
   },
   {
     id: '14-02-2025',
     year: 2025,
     month: 2,
     day: 14,
     imageUrl: 'https://example.com/image_14-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-14T00:00:00',
     updatedAt: '2025-02-14T00:00:00',
   },
   {
     id: '15-02-2025',
     year: 2025,
     month: 2,
     day: 15,
     imageUrl: 'https://example.com/image_15-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_15-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-15T00:00:00',
     updatedAt: '2025-02-15T00:00:00',
   },
   {
     id: '16-02-2025',
     year: 2025,
     month: 2,
     day: 16,
     imageUrl: 'https://example.com/image_16-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-16T00:00:00',
     updatedAt: '2025-02-16T00:00:00',
   },
   {
     id: '17-02-2025',
     year: 2025,
     month: 2,
     day: 17,
     imageUrl: 'https://example.com/image_17-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_17-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-17T00:00:00',
     updatedAt: '2025-02-17T00:00:00',
   },
   {
     id: '18-02-2025',
     year: 2025,
     month: 2,
     day: 18,
     imageUrl: 'https://example.com/image_18-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-18T00:00:00',
     updatedAt: '2025-02-18T00:00:00',
   },
   {
     id: '19-02-2025',
     year: 2025,
     month: 2,
     day: 19,
     imageUrl: 'https://example.com/image_19-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-19T00:00:00',
     updatedAt: '2025-02-19T00:00:00',
   },
   {
     id: '20-02-2025',
     year: 2025,
     month: 2,
     day: 20,
     imageUrl: 'https://example.com/image_20-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-20T00:00:00',
     updatedAt: '2025-02-20T00:00:00',
   },
   {
     id: '21-02-2025',
     year: 2025,
     month: 2,
     day: 21,
     imageUrl: 'https://example.com/image_21-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_21-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-21T00:00:00',
     updatedAt: '2025-02-21T00:00:00',
   },
   {
     id: '22-02-2025',
     year: 2025,
     month: 2,
     day: 22,
     imageUrl: 'https://example.com/image_22-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-22T00:00:00',
     updatedAt: '2025-02-22T00:00:00',
   },
   {
     id: '23-02-2025',
     year: 2025,
     month: 2,
     day: 23,
     imageUrl: 'https://example.com/image_23-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-23T00:00:00',
     updatedAt: '2025-02-23T00:00:00',
   },
   {
     id: '24-02-2025',
     year: 2025,
     month: 2,
     day: 24,
     imageUrl: 'https://example.com/image_24-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-24T00:00:00',
     updatedAt: '2025-02-24T00:00:00',
   },
   {
     id: '25-02-2025',
     year: 2025,
     month: 2,
     day: 25,
     imageUrl: 'https://example.com/image_25-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_25-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-25T00:00:00',
     updatedAt: '2025-02-25T00:00:00',
   },
   {
     id: '26-02-2025',
     year: 2025,
     month: 2,
     day: 26,
     imageUrl: 'https://example.com/image_26-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_26-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-26T00:00:00',
     updatedAt: '2025-02-26T00:00:00',
   },
   {
     id: '27-02-2025',
     year: 2025,
     month: 2,
     day: 27,
     imageUrl: 'https://example.com/image_27-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_27-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-27T00:00:00',
     updatedAt: '2025-02-27T00:00:00',
   },
   {
     id: '28-02-2025',
     year: 2025,
     month: 2,
     day: 28,
     imageUrl: 'https://example.com/image_28-02-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-02-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-02-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-02-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-02-28T00:00:00',
     updatedAt: '2025-02-28T00:00:00',
   },
   {
     id: '01-03-2025',
     year: 2025,
     month: 3,
     day: 1,
     imageUrl: 'https://example.com/image_01-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-01T00:00:00',
     updatedAt: '2025-03-01T00:00:00',
   },
   {
     id: '02-03-2025',
     year: 2025,
     month: 3,
     day: 2,
     imageUrl: 'https://example.com/image_02-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_02-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-02T00:00:00',
     updatedAt: '2025-03-02T00:00:00',
   },
   {
     id: '03-03-2025',
     year: 2025,
     month: 3,
     day: 3,
     imageUrl: 'https://example.com/image_03-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_03-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-03T00:00:00',
     updatedAt: '2025-03-03T00:00:00',
   },
   {
     id: '04-03-2025',
     year: 2025,
     month: 3,
     day: 4,
     imageUrl: 'https://example.com/image_04-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-04T00:00:00',
     updatedAt: '2025-03-04T00:00:00',
   },
   {
     id: '05-03-2025',
     year: 2025,
     month: 3,
     day: 5,
     imageUrl: 'https://example.com/image_05-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-05T00:00:00',
     updatedAt: '2025-03-05T00:00:00',
   },
   {
     id: '06-03-2025',
     year: 2025,
     month: 3,
     day: 6,
     imageUrl: 'https://example.com/image_06-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-06T00:00:00',
     updatedAt: '2025-03-06T00:00:00',
   },
   {
     id: '07-03-2025',
     year: 2025,
     month: 3,
     day: 7,
     imageUrl: 'https://example.com/image_07-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-07T00:00:00',
     updatedAt: '2025-03-07T00:00:00',
   },
   {
     id: '08-03-2025',
     year: 2025,
     month: 3,
     day: 8,
     imageUrl: 'https://example.com/image_08-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-08T00:00:00',
     updatedAt: '2025-03-08T00:00:00',
   },
   {
     id: '09-03-2025',
     year: 2025,
     month: 3,
     day: 9,
     imageUrl: 'https://example.com/image_09-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-09T00:00:00',
     updatedAt: '2025-03-09T00:00:00',
   },
   {
     id: '10-03-2025',
     year: 2025,
     month: 3,
     day: 10,
     imageUrl: 'https://example.com/image_10-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_10-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-10T00:00:00',
     updatedAt: '2025-03-10T00:00:00',
   },
   {
     id: '11-03-2025',
     year: 2025,
     month: 3,
     day: 11,
     imageUrl: 'https://example.com/image_11-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-11T00:00:00',
     updatedAt: '2025-03-11T00:00:00',
   },
   {
     id: '12-03-2025',
     year: 2025,
     month: 3,
     day: 12,
     imageUrl: 'https://example.com/image_12-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-12T00:00:00',
     updatedAt: '2025-03-12T00:00:00',
   },
   {
     id: '13-03-2025',
     year: 2025,
     month: 3,
     day: 13,
     imageUrl: 'https://example.com/image_13-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-13T00:00:00',
     updatedAt: '2025-03-13T00:00:00',
   },
   {
     id: '14-03-2025',
     year: 2025,
     month: 3,
     day: 14,
     imageUrl: 'https://example.com/image_14-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-14T00:00:00',
     updatedAt: '2025-03-14T00:00:00',
   },
   {
     id: '15-03-2025',
     year: 2025,
     month: 3,
     day: 15,
     imageUrl: 'https://example.com/image_15-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-15T00:00:00',
     updatedAt: '2025-03-15T00:00:00',
   },
   {
     id: '16-03-2025',
     year: 2025,
     month: 3,
     day: 16,
     imageUrl: 'https://example.com/image_16-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-16T00:00:00',
     updatedAt: '2025-03-16T00:00:00',
   },
   {
     id: '17-03-2025',
     year: 2025,
     month: 3,
     day: 17,
     imageUrl: 'https://example.com/image_17-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-17T00:00:00',
     updatedAt: '2025-03-17T00:00:00',
   },
   {
     id: '18-03-2025',
     year: 2025,
     month: 3,
     day: 18,
     imageUrl: 'https://example.com/image_18-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-18T00:00:00',
     updatedAt: '2025-03-18T00:00:00',
   },
   {
     id: '19-03-2025',
     year: 2025,
     month: 3,
     day: 19,
     imageUrl: 'https://example.com/image_19-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_19-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-19T00:00:00',
     updatedAt: '2025-03-19T00:00:00',
   },
   {
     id: '20-03-2025',
     year: 2025,
     month: 3,
     day: 20,
     imageUrl: 'https://example.com/image_20-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-20T00:00:00',
     updatedAt: '2025-03-20T00:00:00',
   },
   {
     id: '21-03-2025',
     year: 2025,
     month: 3,
     day: 21,
     imageUrl: 'https://example.com/image_21-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_21-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_21-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-21T00:00:00',
     updatedAt: '2025-03-21T00:00:00',
   },
   {
     id: '22-03-2025',
     year: 2025,
     month: 3,
     day: 22,
     imageUrl: 'https://example.com/image_22-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-22T00:00:00',
     updatedAt: '2025-03-22T00:00:00',
   },
   {
     id: '23-03-2025',
     year: 2025,
     month: 3,
     day: 23,
     imageUrl: 'https://example.com/image_23-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-23T00:00:00',
     updatedAt: '2025-03-23T00:00:00',
   },
   {
     id: '24-03-2025',
     year: 2025,
     month: 3,
     day: 24,
     imageUrl: 'https://example.com/image_24-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-24T00:00:00',
     updatedAt: '2025-03-24T00:00:00',
   },
   {
     id: '25-03-2025',
     year: 2025,
     month: 3,
     day: 25,
     imageUrl: 'https://example.com/image_25-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-25T00:00:00',
     updatedAt: '2025-03-25T00:00:00',
   },
   {
     id: '26-03-2025',
     year: 2025,
     month: 3,
     day: 26,
     imageUrl: 'https://example.com/image_26-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_26-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-26T00:00:00',
     updatedAt: '2025-03-26T00:00:00',
   },
   {
     id: '27-03-2025',
     year: 2025,
     month: 3,
     day: 27,
     imageUrl: 'https://example.com/image_27-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-27T00:00:00',
     updatedAt: '2025-03-27T00:00:00',
   },
   {
     id: '28-03-2025',
     year: 2025,
     month: 3,
     day: 28,
     imageUrl: 'https://example.com/image_28-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-28T00:00:00',
     updatedAt: '2025-03-28T00:00:00',
   },
   {
     id: '29-03-2025',
     year: 2025,
     month: 3,
     day: 29,
     imageUrl: 'https://example.com/image_29-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-29T00:00:00',
     updatedAt: '2025-03-29T00:00:00',
   },
   {
     id: '30-03-2025',
     year: 2025,
     month: 3,
     day: 30,
     imageUrl: 'https://example.com/image_30-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_30-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_30-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-30T00:00:00',
     updatedAt: '2025-03-30T00:00:00',
   },
   {
     id: '31-03-2025',
     year: 2025,
     month: 3,
     day: 31,
     imageUrl: 'https://example.com/image_31-03-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_31-03-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_31-03-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_31-03-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-03-31T00:00:00',
     updatedAt: '2025-03-31T00:00:00',
   },
   {
     id: '01-04-2025',
     year: 2025,
     month: 4,
     day: 1,
     imageUrl: 'https://example.com/image_01-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-01T00:00:00',
     updatedAt: '2025-04-01T00:00:00',
   },
   {
     id: '02-04-2025',
     year: 2025,
     month: 4,
     day: 2,
     imageUrl: 'https://example.com/image_02-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_02-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-02T00:00:00',
     updatedAt: '2025-04-02T00:00:00',
   },
   {
     id: '03-04-2025',
     year: 2025,
     month: 4,
     day: 3,
     imageUrl: 'https://example.com/image_03-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-03T00:00:00',
     updatedAt: '2025-04-03T00:00:00',
   },
   {
     id: '04-04-2025',
     year: 2025,
     month: 4,
     day: 4,
     imageUrl: 'https://example.com/image_04-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-04T00:00:00',
     updatedAt: '2025-04-04T00:00:00',
   },
   {
     id: '05-04-2025',
     year: 2025,
     month: 4,
     day: 5,
     imageUrl: 'https://example.com/image_05-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-05T00:00:00',
     updatedAt: '2025-04-05T00:00:00',
   },
   {
     id: '06-04-2025',
     year: 2025,
     month: 4,
     day: 6,
     imageUrl: 'https://example.com/image_06-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-06T00:00:00',
     updatedAt: '2025-04-06T00:00:00',
   },
   {
     id: '07-04-2025',
     year: 2025,
     month: 4,
     day: 7,
     imageUrl: 'https://example.com/image_07-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_07-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-07T00:00:00',
     updatedAt: '2025-04-07T00:00:00',
   },
   {
     id: '08-04-2025',
     year: 2025,
     month: 4,
     day: 8,
     imageUrl: 'https://example.com/image_08-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-08T00:00:00',
     updatedAt: '2025-04-08T00:00:00',
   },
   {
     id: '09-04-2025',
     year: 2025,
     month: 4,
     day: 9,
     imageUrl: 'https://example.com/image_09-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-09T00:00:00',
     updatedAt: '2025-04-09T00:00:00',
   },
   {
     id: '10-04-2025',
     year: 2025,
     month: 4,
     day: 10,
     imageUrl: 'https://example.com/image_10-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_10-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-10T00:00:00',
     updatedAt: '2025-04-10T00:00:00',
   },
   {
     id: '11-04-2025',
     year: 2025,
     month: 4,
     day: 11,
     imageUrl: 'https://example.com/image_11-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-11T00:00:00',
     updatedAt: '2025-04-11T00:00:00',
   },
   {
     id: '12-04-2025',
     year: 2025,
     month: 4,
     day: 12,
     imageUrl: 'https://example.com/image_12-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_12-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-12T00:00:00',
     updatedAt: '2025-04-12T00:00:00',
   },
   {
     id: '13-04-2025',
     year: 2025,
     month: 4,
     day: 13,
     imageUrl: 'https://example.com/image_13-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-13T00:00:00',
     updatedAt: '2025-04-13T00:00:00',
   },
   {
     id: '14-04-2025',
     year: 2025,
     month: 4,
     day: 14,
     imageUrl: 'https://example.com/image_14-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-14T00:00:00',
     updatedAt: '2025-04-14T00:00:00',
   },
   {
     id: '15-04-2025',
     year: 2025,
     month: 4,
     day: 15,
     imageUrl: 'https://example.com/image_15-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_15-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-15T00:00:00',
     updatedAt: '2025-04-15T00:00:00',
   },
   {
     id: '16-04-2025',
     year: 2025,
     month: 4,
     day: 16,
     imageUrl: 'https://example.com/image_16-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-16T00:00:00',
     updatedAt: '2025-04-16T00:00:00',
   },
   {
     id: '17-04-2025',
     year: 2025,
     month: 4,
     day: 17,
     imageUrl: 'https://example.com/image_17-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_17-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-17T00:00:00',
     updatedAt: '2025-04-17T00:00:00',
   },
   {
     id: '18-04-2025',
     year: 2025,
     month: 4,
     day: 18,
     imageUrl: 'https://example.com/image_18-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-18T00:00:00',
     updatedAt: '2025-04-18T00:00:00',
   },
   {
     id: '19-04-2025',
     year: 2025,
     month: 4,
     day: 19,
     imageUrl: 'https://example.com/image_19-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-19T00:00:00',
     updatedAt: '2025-04-19T00:00:00',
   },
   {
     id: '20-04-2025',
     year: 2025,
     month: 4,
     day: 20,
     imageUrl: 'https://example.com/image_20-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_20-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-20T00:00:00',
     updatedAt: '2025-04-20T00:00:00',
   },
   {
     id: '21-04-2025',
     year: 2025,
     month: 4,
     day: 21,
     imageUrl: 'https://example.com/image_21-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_21-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-21T00:00:00',
     updatedAt: '2025-04-21T00:00:00',
   },
   {
     id: '22-04-2025',
     year: 2025,
     month: 4,
     day: 22,
     imageUrl: 'https://example.com/image_22-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-22T00:00:00',
     updatedAt: '2025-04-22T00:00:00',
   },
   {
     id: '23-04-2025',
     year: 2025,
     month: 4,
     day: 23,
     imageUrl: 'https://example.com/image_23-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_23-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-23T00:00:00',
     updatedAt: '2025-04-23T00:00:00',
   },
   {
     id: '24-04-2025',
     year: 2025,
     month: 4,
     day: 24,
     imageUrl: 'https://example.com/image_24-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-24T00:00:00',
     updatedAt: '2025-04-24T00:00:00',
   },
   {
     id: '25-04-2025',
     year: 2025,
     month: 4,
     day: 25,
     imageUrl: 'https://example.com/image_25-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-25T00:00:00',
     updatedAt: '2025-04-25T00:00:00',
   },
   {
     id: '26-04-2025',
     year: 2025,
     month: 4,
     day: 26,
     imageUrl: 'https://example.com/image_26-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_26-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-26T00:00:00',
     updatedAt: '2025-04-26T00:00:00',
   },
   {
     id: '27-04-2025',
     year: 2025,
     month: 4,
     day: 27,
     imageUrl: 'https://example.com/image_27-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_27-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-27T00:00:00',
     updatedAt: '2025-04-27T00:00:00',
   },
   {
     id: '28-04-2025',
     year: 2025,
     month: 4,
     day: 28,
     imageUrl: 'https://example.com/image_28-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-28T00:00:00',
     updatedAt: '2025-04-28T00:00:00',
   },
   {
     id: '29-04-2025',
     year: 2025,
     month: 4,
     day: 29,
     imageUrl: 'https://example.com/image_29-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_29-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-29T00:00:00',
     updatedAt: '2025-04-29T00:00:00',
   },
   {
     id: '30-04-2025',
     year: 2025,
     month: 4,
     day: 30,
     imageUrl: 'https://example.com/image_30-04-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-04-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_30-04-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-04-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-04-30T00:00:00',
     updatedAt: '2025-04-30T00:00:00',
   },
   {
     id: '01-05-2025',
     year: 2025,
     month: 5,
     day: 1,
     imageUrl: 'https://example.com/image_01-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_01-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-01T00:00:00',
     updatedAt: '2025-05-01T00:00:00',
   },
   {
     id: '02-05-2025',
     year: 2025,
     month: 5,
     day: 2,
     imageUrl: 'https://example.com/image_02-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_02-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-02T00:00:00',
     updatedAt: '2025-05-02T00:00:00',
   },
   {
     id: '03-05-2025',
     year: 2025,
     month: 5,
     day: 3,
     imageUrl: 'https://example.com/image_03-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_03-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-03T00:00:00',
     updatedAt: '2025-05-03T00:00:00',
   },
   {
     id: '04-05-2025',
     year: 2025,
     month: 5,
     day: 4,
     imageUrl: 'https://example.com/image_04-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-04T00:00:00',
     updatedAt: '2025-05-04T00:00:00',
   },
   {
     id: '05-05-2025',
     year: 2025,
     month: 5,
     day: 5,
     imageUrl: 'https://example.com/image_05-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-05T00:00:00',
     updatedAt: '2025-05-05T00:00:00',
   },
   {
     id: '06-05-2025',
     year: 2025,
     month: 5,
     day: 6,
     imageUrl: 'https://example.com/image_06-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-06T00:00:00',
     updatedAt: '2025-05-06T00:00:00',
   },
   {
     id: '07-05-2025',
     year: 2025,
     month: 5,
     day: 7,
     imageUrl: 'https://example.com/image_07-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_07-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_07-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-07T00:00:00',
     updatedAt: '2025-05-07T00:00:00',
   },
   {
     id: '08-05-2025',
     year: 2025,
     month: 5,
     day: 8,
     imageUrl: 'https://example.com/image_08-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-08T00:00:00',
     updatedAt: '2025-05-08T00:00:00',
   },
   {
     id: '09-05-2025',
     year: 2025,
     month: 5,
     day: 9,
     imageUrl: 'https://example.com/image_09-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-09T00:00:00',
     updatedAt: '2025-05-09T00:00:00',
   },
   {
     id: '10-05-2025',
     year: 2025,
     month: 5,
     day: 10,
     imageUrl: 'https://example.com/image_10-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_10-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-10T00:00:00',
     updatedAt: '2025-05-10T00:00:00',
   },
   {
     id: '11-05-2025',
     year: 2025,
     month: 5,
     day: 11,
     imageUrl: 'https://example.com/image_11-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-11T00:00:00',
     updatedAt: '2025-05-11T00:00:00',
   },
   {
     id: '12-05-2025',
     year: 2025,
     month: 5,
     day: 12,
     imageUrl: 'https://example.com/image_12-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_12-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_12-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-12T00:00:00',
     updatedAt: '2025-05-12T00:00:00',
   },
   {
     id: '13-05-2025',
     year: 2025,
     month: 5,
     day: 13,
     imageUrl: 'https://example.com/image_13-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-13T00:00:00',
     updatedAt: '2025-05-13T00:00:00',
   },
   {
     id: '14-05-2025',
     year: 2025,
     month: 5,
     day: 14,
     imageUrl: 'https://example.com/image_14-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-14T00:00:00',
     updatedAt: '2025-05-14T00:00:00',
   },
   {
     id: '15-05-2025',
     year: 2025,
     month: 5,
     day: 15,
     imageUrl: 'https://example.com/image_15-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_15-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-15T00:00:00',
     updatedAt: '2025-05-15T00:00:00',
   },
   {
     id: '16-05-2025',
     year: 2025,
     month: 5,
     day: 16,
     imageUrl: 'https://example.com/image_16-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-16T00:00:00',
     updatedAt: '2025-05-16T00:00:00',
   },
   {
     id: '17-05-2025',
     year: 2025,
     month: 5,
     day: 17,
     imageUrl: 'https://example.com/image_17-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-17T00:00:00',
     updatedAt: '2025-05-17T00:00:00',
   },
   {
     id: '18-05-2025',
     year: 2025,
     month: 5,
     day: 18,
     imageUrl: 'https://example.com/image_18-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-18T00:00:00',
     updatedAt: '2025-05-18T00:00:00',
   },
   {
     id: '19-05-2025',
     year: 2025,
     month: 5,
     day: 19,
     imageUrl: 'https://example.com/image_19-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-19T00:00:00',
     updatedAt: '2025-05-19T00:00:00',
   },
   {
     id: '20-05-2025',
     year: 2025,
     month: 5,
     day: 20,
     imageUrl: 'https://example.com/image_20-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-20T00:00:00',
     updatedAt: '2025-05-20T00:00:00',
   },
   {
     id: '21-05-2025',
     year: 2025,
     month: 5,
     day: 21,
     imageUrl: 'https://example.com/image_21-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-21T00:00:00',
     updatedAt: '2025-05-21T00:00:00',
   },
   {
     id: '22-05-2025',
     year: 2025,
     month: 5,
     day: 22,
     imageUrl: 'https://example.com/image_22-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-22T00:00:00',
     updatedAt: '2025-05-22T00:00:00',
   },
   {
     id: '23-05-2025',
     year: 2025,
     month: 5,
     day: 23,
     imageUrl: 'https://example.com/image_23-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_23-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-23T00:00:00',
     updatedAt: '2025-05-23T00:00:00',
   },
   {
     id: '24-05-2025',
     year: 2025,
     month: 5,
     day: 24,
     imageUrl: 'https://example.com/image_24-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-24T00:00:00',
     updatedAt: '2025-05-24T00:00:00',
   },
   {
     id: '25-05-2025',
     year: 2025,
     month: 5,
     day: 25,
     imageUrl: 'https://example.com/image_25-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_25-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-25T00:00:00',
     updatedAt: '2025-05-25T00:00:00',
   },
   {
     id: '26-05-2025',
     year: 2025,
     month: 5,
     day: 26,
     imageUrl: 'https://example.com/image_26-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_26-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-26T00:00:00',
     updatedAt: '2025-05-26T00:00:00',
   },
   {
     id: '27-05-2025',
     year: 2025,
     month: 5,
     day: 27,
     imageUrl: 'https://example.com/image_27-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_27-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_27-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-27T00:00:00',
     updatedAt: '2025-05-27T00:00:00',
   },
   {
     id: '28-05-2025',
     year: 2025,
     month: 5,
     day: 28,
     imageUrl: 'https://example.com/image_28-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-28T00:00:00',
     updatedAt: '2025-05-28T00:00:00',
   },
   {
     id: '29-05-2025',
     year: 2025,
     month: 5,
     day: 29,
     imageUrl: 'https://example.com/image_29-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_29-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-29T00:00:00',
     updatedAt: '2025-05-29T00:00:00',
   },
   {
     id: '30-05-2025',
     year: 2025,
     month: 5,
     day: 30,
     imageUrl: 'https://example.com/image_30-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_30-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-30T00:00:00',
     updatedAt: '2025-05-30T00:00:00',
   },
   {
     id: '31-05-2025',
     year: 2025,
     month: 5,
     day: 31,
     imageUrl: 'https://example.com/image_31-05-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_31-05-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_31-05-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_31-05-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-05-31T00:00:00',
     updatedAt: '2025-05-31T00:00:00',
   },
   {
     id: '01-06-2025',
     year: 2025,
     month: 6,
     day: 1,
     imageUrl: 'https://example.com/image_01-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-01T00:00:00',
     updatedAt: '2025-06-01T00:00:00',
   },
   {
     id: '02-06-2025',
     year: 2025,
     month: 6,
     day: 2,
     imageUrl: 'https://example.com/image_02-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-02T00:00:00',
     updatedAt: '2025-06-02T00:00:00',
   },
   {
     id: '03-06-2025',
     year: 2025,
     month: 6,
     day: 3,
     imageUrl: 'https://example.com/image_03-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_03-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-03T00:00:00',
     updatedAt: '2025-06-03T00:00:00',
   },
   {
     id: '04-06-2025',
     year: 2025,
     month: 6,
     day: 4,
     imageUrl: 'https://example.com/image_04-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-04T00:00:00',
     updatedAt: '2025-06-04T00:00:00',
   },
   {
     id: '05-06-2025',
     year: 2025,
     month: 6,
     day: 5,
     imageUrl: 'https://example.com/image_05-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_05-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_05-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-05T00:00:00',
     updatedAt: '2025-06-05T00:00:00',
   },
   {
     id: '06-06-2025',
     year: 2025,
     month: 6,
     day: 6,
     imageUrl: 'https://example.com/image_06-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-06T00:00:00',
     updatedAt: '2025-06-06T00:00:00',
   },
   {
     id: '07-06-2025',
     year: 2025,
     month: 6,
     day: 7,
     imageUrl: 'https://example.com/image_07-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-07T00:00:00',
     updatedAt: '2025-06-07T00:00:00',
   },
   {
     id: '08-06-2025',
     year: 2025,
     month: 6,
     day: 8,
     imageUrl: 'https://example.com/image_08-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-08T00:00:00',
     updatedAt: '2025-06-08T00:00:00',
   },
   {
     id: '09-06-2025',
     year: 2025,
     month: 6,
     day: 9,
     imageUrl: 'https://example.com/image_09-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-09T00:00:00',
     updatedAt: '2025-06-09T00:00:00',
   },
   {
     id: '10-06-2025',
     year: 2025,
     month: 6,
     day: 10,
     imageUrl: 'https://example.com/image_10-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_10-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_10-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-10T00:00:00',
     updatedAt: '2025-06-10T00:00:00',
   },
   {
     id: '11-06-2025',
     year: 2025,
     month: 6,
     day: 11,
     imageUrl: 'https://example.com/image_11-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-11T00:00:00',
     updatedAt: '2025-06-11T00:00:00',
   },
   {
     id: '12-06-2025',
     year: 2025,
     month: 6,
     day: 12,
     imageUrl: 'https://example.com/image_12-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_12-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-12T00:00:00',
     updatedAt: '2025-06-12T00:00:00',
   },
   {
     id: '13-06-2025',
     year: 2025,
     month: 6,
     day: 13,
     imageUrl: 'https://example.com/image_13-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-13T00:00:00',
     updatedAt: '2025-06-13T00:00:00',
   },
   {
     id: '14-06-2025',
     year: 2025,
     month: 6,
     day: 14,
     imageUrl: 'https://example.com/image_14-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-14T00:00:00',
     updatedAt: '2025-06-14T00:00:00',
   },
   {
     id: '15-06-2025',
     year: 2025,
     month: 6,
     day: 15,
     imageUrl: 'https://example.com/image_15-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_15-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-15T00:00:00',
     updatedAt: '2025-06-15T00:00:00',
   },
   {
     id: '16-06-2025',
     year: 2025,
     month: 6,
     day: 16,
     imageUrl: 'https://example.com/image_16-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-16T00:00:00',
     updatedAt: '2025-06-16T00:00:00',
   },
   {
     id: '17-06-2025',
     year: 2025,
     month: 6,
     day: 17,
     imageUrl: 'https://example.com/image_17-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-17T00:00:00',
     updatedAt: '2025-06-17T00:00:00',
   },
   {
     id: '18-06-2025',
     year: 2025,
     month: 6,
     day: 18,
     imageUrl: 'https://example.com/image_18-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-18T00:00:00',
     updatedAt: '2025-06-18T00:00:00',
   },
   {
     id: '19-06-2025',
     year: 2025,
     month: 6,
     day: 19,
     imageUrl: 'https://example.com/image_19-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-19T00:00:00',
     updatedAt: '2025-06-19T00:00:00',
   },
   {
     id: '20-06-2025',
     year: 2025,
     month: 6,
     day: 20,
     imageUrl: 'https://example.com/image_20-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_20-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-20T00:00:00',
     updatedAt: '2025-06-20T00:00:00',
   },
   {
     id: '21-06-2025',
     year: 2025,
     month: 6,
     day: 21,
     imageUrl: 'https://example.com/image_21-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-21T00:00:00',
     updatedAt: '2025-06-21T00:00:00',
   },
   {
     id: '22-06-2025',
     year: 2025,
     month: 6,
     day: 22,
     imageUrl: 'https://example.com/image_22-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-22T00:00:00',
     updatedAt: '2025-06-22T00:00:00',
   },
   {
     id: '23-06-2025',
     year: 2025,
     month: 6,
     day: 23,
     imageUrl: 'https://example.com/image_23-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_23-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_23-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-23T00:00:00',
     updatedAt: '2025-06-23T00:00:00',
   },
   {
     id: '24-06-2025',
     year: 2025,
     month: 6,
     day: 24,
     imageUrl: 'https://example.com/image_24-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-24T00:00:00',
     updatedAt: '2025-06-24T00:00:00',
   },
   {
     id: '25-06-2025',
     year: 2025,
     month: 6,
     day: 25,
     imageUrl: 'https://example.com/image_25-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-25T00:00:00',
     updatedAt: '2025-06-25T00:00:00',
   },
   {
     id: '26-06-2025',
     year: 2025,
     month: 6,
     day: 26,
     imageUrl: 'https://example.com/image_26-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_26-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-26T00:00:00',
     updatedAt: '2025-06-26T00:00:00',
   },
   {
     id: '27-06-2025',
     year: 2025,
     month: 6,
     day: 27,
     imageUrl: 'https://example.com/image_27-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_27-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-27T00:00:00',
     updatedAt: '2025-06-27T00:00:00',
   },
   {
     id: '28-06-2025',
     year: 2025,
     month: 6,
     day: 28,
     imageUrl: 'https://example.com/image_28-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-28T00:00:00',
     updatedAt: '2025-06-28T00:00:00',
   },
   {
     id: '29-06-2025',
     year: 2025,
     month: 6,
     day: 29,
     imageUrl: 'https://example.com/image_29-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-29T00:00:00',
     updatedAt: '2025-06-29T00:00:00',
   },
   {
     id: '30-06-2025',
     year: 2025,
     month: 6,
     day: 30,
     imageUrl: 'https://example.com/image_30-06-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-06-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-06-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_30-06-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-06-30T00:00:00',
     updatedAt: '2025-06-30T00:00:00',
   },
   {
     id: '01-07-2025',
     year: 2025,
     month: 7,
     day: 1,
     imageUrl: 'https://example.com/image_01-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_01-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-01T00:00:00',
     updatedAt: '2025-07-01T00:00:00',
   },
   {
     id: '02-07-2025',
     year: 2025,
     month: 7,
     day: 2,
     imageUrl: 'https://example.com/image_02-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-02T00:00:00',
     updatedAt: '2025-07-02T00:00:00',
   },
   {
     id: '03-07-2025',
     year: 2025,
     month: 7,
     day: 3,
     imageUrl: 'https://example.com/image_03-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-03T00:00:00',
     updatedAt: '2025-07-03T00:00:00',
   },
   {
     id: '04-07-2025',
     year: 2025,
     month: 7,
     day: 4,
     imageUrl: 'https://example.com/image_04-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-04T00:00:00',
     updatedAt: '2025-07-04T00:00:00',
   },
   {
     id: '05-07-2025',
     year: 2025,
     month: 7,
     day: 5,
     imageUrl: 'https://example.com/image_05-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_05-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-05T00:00:00',
     updatedAt: '2025-07-05T00:00:00',
   },
   {
     id: '06-07-2025',
     year: 2025,
     month: 7,
     day: 6,
     imageUrl: 'https://example.com/image_06-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-06T00:00:00',
     updatedAt: '2025-07-06T00:00:00',
   },
   {
     id: '07-07-2025',
     year: 2025,
     month: 7,
     day: 7,
     imageUrl: 'https://example.com/image_07-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_07-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-07T00:00:00',
     updatedAt: '2025-07-07T00:00:00',
   },
   {
     id: '08-07-2025',
     year: 2025,
     month: 7,
     day: 8,
     imageUrl: 'https://example.com/image_08-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-08T00:00:00',
     updatedAt: '2025-07-08T00:00:00',
   },
   {
     id: '09-07-2025',
     year: 2025,
     month: 7,
     day: 9,
     imageUrl: 'https://example.com/image_09-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-09T00:00:00',
     updatedAt: '2025-07-09T00:00:00',
   },
   {
     id: '10-07-2025',
     year: 2025,
     month: 7,
     day: 10,
     imageUrl: 'https://example.com/image_10-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-10T00:00:00',
     updatedAt: '2025-07-10T00:00:00',
   },
   {
     id: '11-07-2025',
     year: 2025,
     month: 7,
     day: 11,
     imageUrl: 'https://example.com/image_11-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-11T00:00:00',
     updatedAt: '2025-07-11T00:00:00',
   },
   {
     id: '12-07-2025',
     year: 2025,
     month: 7,
     day: 12,
     imageUrl: 'https://example.com/image_12-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_12-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-12T00:00:00',
     updatedAt: '2025-07-12T00:00:00',
   },
   {
     id: '13-07-2025',
     year: 2025,
     month: 7,
     day: 13,
     imageUrl: 'https://example.com/image_13-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-13T00:00:00',
     updatedAt: '2025-07-13T00:00:00',
   },
   {
     id: '14-07-2025',
     year: 2025,
     month: 7,
     day: 14,
     imageUrl: 'https://example.com/image_14-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-14T00:00:00',
     updatedAt: '2025-07-14T00:00:00',
   },
   {
     id: '15-07-2025',
     year: 2025,
     month: 7,
     day: 15,
     imageUrl: 'https://example.com/image_15-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-15T00:00:00',
     updatedAt: '2025-07-15T00:00:00',
   },
   {
     id: '16-07-2025',
     year: 2025,
     month: 7,
     day: 16,
     imageUrl: 'https://example.com/image_16-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-16T00:00:00',
     updatedAt: '2025-07-16T00:00:00',
   },
   {
     id: '17-07-2025',
     year: 2025,
     month: 7,
     day: 17,
     imageUrl: 'https://example.com/image_17-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_17-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-17T00:00:00',
     updatedAt: '2025-07-17T00:00:00',
   },
   {
     id: '18-07-2025',
     year: 2025,
     month: 7,
     day: 18,
     imageUrl: 'https://example.com/image_18-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-18T00:00:00',
     updatedAt: '2025-07-18T00:00:00',
   },
   {
     id: '19-07-2025',
     year: 2025,
     month: 7,
     day: 19,
     imageUrl: 'https://example.com/image_19-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_19-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-19T00:00:00',
     updatedAt: '2025-07-19T00:00:00',
   },
   {
     id: '20-07-2025',
     year: 2025,
     month: 7,
     day: 20,
     imageUrl: 'https://example.com/image_20-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_20-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-20T00:00:00',
     updatedAt: '2025-07-20T00:00:00',
   },
   {
     id: '21-07-2025',
     year: 2025,
     month: 7,
     day: 21,
     imageUrl: 'https://example.com/image_21-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_21-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-21T00:00:00',
     updatedAt: '2025-07-21T00:00:00',
   },
   {
     id: '22-07-2025',
     year: 2025,
     month: 7,
     day: 22,
     imageUrl: 'https://example.com/image_22-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-22T00:00:00',
     updatedAt: '2025-07-22T00:00:00',
   },
   {
     id: '23-07-2025',
     year: 2025,
     month: 7,
     day: 23,
     imageUrl: 'https://example.com/image_23-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-23T00:00:00',
     updatedAt: '2025-07-23T00:00:00',
   },
   {
     id: '24-07-2025',
     year: 2025,
     month: 7,
     day: 24,
     imageUrl: 'https://example.com/image_24-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-24T00:00:00',
     updatedAt: '2025-07-24T00:00:00',
   },
   {
     id: '25-07-2025',
     year: 2025,
     month: 7,
     day: 25,
     imageUrl: 'https://example.com/image_25-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_25-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_25-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-25T00:00:00',
     updatedAt: '2025-07-25T00:00:00',
   },
   {
     id: '26-07-2025',
     year: 2025,
     month: 7,
     day: 26,
     imageUrl: 'https://example.com/image_26-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-26T00:00:00',
     updatedAt: '2025-07-26T00:00:00',
   },
   {
     id: '27-07-2025',
     year: 2025,
     month: 7,
     day: 27,
     imageUrl: 'https://example.com/image_27-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_27-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-27T00:00:00',
     updatedAt: '2025-07-27T00:00:00',
   },
   {
     id: '28-07-2025',
     year: 2025,
     month: 7,
     day: 28,
     imageUrl: 'https://example.com/image_28-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-28T00:00:00',
     updatedAt: '2025-07-28T00:00:00',
   },
   {
     id: '29-07-2025',
     year: 2025,
     month: 7,
     day: 29,
     imageUrl: 'https://example.com/image_29-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-29T00:00:00',
     updatedAt: '2025-07-29T00:00:00',
   },
   {
     id: '30-07-2025',
     year: 2025,
     month: 7,
     day: 30,
     imageUrl: 'https://example.com/image_30-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_30-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-30T00:00:00',
     updatedAt: '2025-07-30T00:00:00',
   },
   {
     id: '31-07-2025',
     year: 2025,
     month: 7,
     day: 31,
     imageUrl: 'https://example.com/image_31-07-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_31-07-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_31-07-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_31-07-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-07-31T00:00:00',
     updatedAt: '2025-07-31T00:00:00',
   },
   {
     id: '01-08-2025',
     year: 2025,
     month: 8,
     day: 1,
     imageUrl: 'https://example.com/image_01-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_01-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-01T00:00:00',
     updatedAt: '2025-08-01T00:00:00',
   },
   {
     id: '02-08-2025',
     year: 2025,
     month: 8,
     day: 2,
     imageUrl: 'https://example.com/image_02-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_02-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-02T00:00:00',
     updatedAt: '2025-08-02T00:00:00',
   },
   {
     id: '03-08-2025',
     year: 2025,
     month: 8,
     day: 3,
     imageUrl: 'https://example.com/image_03-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_03-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_03-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-03T00:00:00',
     updatedAt: '2025-08-03T00:00:00',
   },
   {
     id: '04-08-2025',
     year: 2025,
     month: 8,
     day: 4,
     imageUrl: 'https://example.com/image_04-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-04T00:00:00',
     updatedAt: '2025-08-04T00:00:00',
   },
   {
     id: '05-08-2025',
     year: 2025,
     month: 8,
     day: 5,
     imageUrl: 'https://example.com/image_05-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_05-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-05T00:00:00',
     updatedAt: '2025-08-05T00:00:00',
   },
   {
     id: '06-08-2025',
     year: 2025,
     month: 8,
     day: 6,
     imageUrl: 'https://example.com/image_06-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-06T00:00:00',
     updatedAt: '2025-08-06T00:00:00',
   },
   {
     id: '07-08-2025',
     year: 2025,
     month: 8,
     day: 7,
     imageUrl: 'https://example.com/image_07-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_07-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-07T00:00:00',
     updatedAt: '2025-08-07T00:00:00',
   },
   {
     id: '08-08-2025',
     year: 2025,
     month: 8,
     day: 8,
     imageUrl: 'https://example.com/image_08-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-08T00:00:00',
     updatedAt: '2025-08-08T00:00:00',
   },
   {
     id: '09-08-2025',
     year: 2025,
     month: 8,
     day: 9,
     imageUrl: 'https://example.com/image_09-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-09T00:00:00',
     updatedAt: '2025-08-09T00:00:00',
   },
   {
     id: '10-08-2025',
     year: 2025,
     month: 8,
     day: 10,
     imageUrl: 'https://example.com/image_10-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-10T00:00:00',
     updatedAt: '2025-08-10T00:00:00',
   },
   {
     id: '11-08-2025',
     year: 2025,
     month: 8,
     day: 11,
     imageUrl: 'https://example.com/image_11-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-11T00:00:00',
     updatedAt: '2025-08-11T00:00:00',
   },
   {
     id: '12-08-2025',
     year: 2025,
     month: 8,
     day: 12,
     imageUrl: 'https://example.com/image_12-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_12-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_12-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-12T00:00:00',
     updatedAt: '2025-08-12T00:00:00',
   },
   {
     id: '13-08-2025',
     year: 2025,
     month: 8,
     day: 13,
     imageUrl: 'https://example.com/image_13-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-13T00:00:00',
     updatedAt: '2025-08-13T00:00:00',
   },
   {
     id: '14-08-2025',
     year: 2025,
     month: 8,
     day: 14,
     imageUrl: 'https://example.com/image_14-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-14T00:00:00',
     updatedAt: '2025-08-14T00:00:00',
   },
   {
     id: '15-08-2025',
     year: 2025,
     month: 8,
     day: 15,
     imageUrl: 'https://example.com/image_15-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-15T00:00:00',
     updatedAt: '2025-08-15T00:00:00',
   },
   {
     id: '16-08-2025',
     year: 2025,
     month: 8,
     day: 16,
     imageUrl: 'https://example.com/image_16-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-16T00:00:00',
     updatedAt: '2025-08-16T00:00:00',
   },
   {
     id: '17-08-2025',
     year: 2025,
     month: 8,
     day: 17,
     imageUrl: 'https://example.com/image_17-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_17-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_17-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-17T00:00:00',
     updatedAt: '2025-08-17T00:00:00',
   },
   {
     id: '18-08-2025',
     year: 2025,
     month: 8,
     day: 18,
     imageUrl: 'https://example.com/image_18-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-18T00:00:00',
     updatedAt: '2025-08-18T00:00:00',
   },
   {
     id: '19-08-2025',
     year: 2025,
     month: 8,
     day: 19,
     imageUrl: 'https://example.com/image_19-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_19-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_19-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-19T00:00:00',
     updatedAt: '2025-08-19T00:00:00',
   },
   {
     id: '20-08-2025',
     year: 2025,
     month: 8,
     day: 20,
     imageUrl: 'https://example.com/image_20-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-20T00:00:00',
     updatedAt: '2025-08-20T00:00:00',
   },
   {
     id: '21-08-2025',
     year: 2025,
     month: 8,
     day: 21,
     imageUrl: 'https://example.com/image_21-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_21-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-21T00:00:00',
     updatedAt: '2025-08-21T00:00:00',
   },
   {
     id: '22-08-2025',
     year: 2025,
     month: 8,
     day: 22,
     imageUrl: 'https://example.com/image_22-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-22T00:00:00',
     updatedAt: '2025-08-22T00:00:00',
   },
   {
     id: '23-08-2025',
     year: 2025,
     month: 8,
     day: 23,
     imageUrl: 'https://example.com/image_23-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_23-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-23T00:00:00',
     updatedAt: '2025-08-23T00:00:00',
   },
   {
     id: '24-08-2025',
     year: 2025,
     month: 8,
     day: 24,
     imageUrl: 'https://example.com/image_24-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-24T00:00:00',
     updatedAt: '2025-08-24T00:00:00',
   },
   {
     id: '25-08-2025',
     year: 2025,
     month: 8,
     day: 25,
     imageUrl: 'https://example.com/image_25-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-25T00:00:00',
     updatedAt: '2025-08-25T00:00:00',
   },
   {
     id: '26-08-2025',
     year: 2025,
     month: 8,
     day: 26,
     imageUrl: 'https://example.com/image_26-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_26-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-26T00:00:00',
     updatedAt: '2025-08-26T00:00:00',
   },
   {
     id: '27-08-2025',
     year: 2025,
     month: 8,
     day: 27,
     imageUrl: 'https://example.com/image_27-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-27T00:00:00',
     updatedAt: '2025-08-27T00:00:00',
   },
   {
     id: '28-08-2025',
     year: 2025,
     month: 8,
     day: 28,
     imageUrl: 'https://example.com/image_28-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-28T00:00:00',
     updatedAt: '2025-08-28T00:00:00',
   },
   {
     id: '29-08-2025',
     year: 2025,
     month: 8,
     day: 29,
     imageUrl: 'https://example.com/image_29-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-29T00:00:00',
     updatedAt: '2025-08-29T00:00:00',
   },
   {
     id: '30-08-2025',
     year: 2025,
     month: 8,
     day: 30,
     imageUrl: 'https://example.com/image_30-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-30T00:00:00',
     updatedAt: '2025-08-30T00:00:00',
   },
   {
     id: '31-08-2025',
     year: 2025,
     month: 8,
     day: 31,
     imageUrl: 'https://example.com/image_31-08-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_31-08-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_31-08-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_31-08-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-08-31T00:00:00',
     updatedAt: '2025-08-31T00:00:00',
   },
   {
     id: '01-09-2025',
     year: 2025,
     month: 9,
     day: 1,
     imageUrl: 'https://example.com/image_01-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-01T00:00:00',
     updatedAt: '2025-09-01T00:00:00',
   },
   {
     id: '02-09-2025',
     year: 2025,
     month: 9,
     day: 2,
     imageUrl: 'https://example.com/image_02-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-02T00:00:00',
     updatedAt: '2025-09-02T00:00:00',
   },
   {
     id: '03-09-2025',
     year: 2025,
     month: 9,
     day: 3,
     imageUrl: 'https://example.com/image_03-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_03-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-03T00:00:00',
     updatedAt: '2025-09-03T00:00:00',
   },
   {
     id: '04-09-2025',
     year: 2025,
     month: 9,
     day: 4,
     imageUrl: 'https://example.com/image_04-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-04T00:00:00',
     updatedAt: '2025-09-04T00:00:00',
   },
   {
     id: '05-09-2025',
     year: 2025,
     month: 9,
     day: 5,
     imageUrl: 'https://example.com/image_05-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-05T00:00:00',
     updatedAt: '2025-09-05T00:00:00',
   },
   {
     id: '06-09-2025',
     year: 2025,
     month: 9,
     day: 6,
     imageUrl: 'https://example.com/image_06-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-06T00:00:00',
     updatedAt: '2025-09-06T00:00:00',
   },
   {
     id: '07-09-2025',
     year: 2025,
     month: 9,
     day: 7,
     imageUrl: 'https://example.com/image_07-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_07-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-07T00:00:00',
     updatedAt: '2025-09-07T00:00:00',
   },
   {
     id: '08-09-2025',
     year: 2025,
     month: 9,
     day: 8,
     imageUrl: 'https://example.com/image_08-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_08-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-08T00:00:00',
     updatedAt: '2025-09-08T00:00:00',
   },
   {
     id: '09-09-2025',
     year: 2025,
     month: 9,
     day: 9,
     imageUrl: 'https://example.com/image_09-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-09T00:00:00',
     updatedAt: '2025-09-09T00:00:00',
   },
   {
     id: '10-09-2025',
     year: 2025,
     month: 9,
     day: 10,
     imageUrl: 'https://example.com/image_10-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-10T00:00:00',
     updatedAt: '2025-09-10T00:00:00',
   },
   {
     id: '11-09-2025',
     year: 2025,
     month: 9,
     day: 11,
     imageUrl: 'https://example.com/image_11-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-11T00:00:00',
     updatedAt: '2025-09-11T00:00:00',
   },
   {
     id: '12-09-2025',
     year: 2025,
     month: 9,
     day: 12,
     imageUrl: 'https://example.com/image_12-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-12T00:00:00',
     updatedAt: '2025-09-12T00:00:00',
   },
   {
     id: '13-09-2025',
     year: 2025,
     month: 9,
     day: 13,
     imageUrl: 'https://example.com/image_13-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-13T00:00:00',
     updatedAt: '2025-09-13T00:00:00',
   },
   {
     id: '14-09-2025',
     year: 2025,
     month: 9,
     day: 14,
     imageUrl: 'https://example.com/image_14-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-14T00:00:00',
     updatedAt: '2025-09-14T00:00:00',
   },
   {
     id: '15-09-2025',
     year: 2025,
     month: 9,
     day: 15,
     imageUrl: 'https://example.com/image_15-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-15T00:00:00',
     updatedAt: '2025-09-15T00:00:00',
   },
   {
     id: '16-09-2025',
     year: 2025,
     month: 9,
     day: 16,
     imageUrl: 'https://example.com/image_16-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-16T00:00:00',
     updatedAt: '2025-09-16T00:00:00',
   },
   {
     id: '17-09-2025',
     year: 2025,
     month: 9,
     day: 17,
     imageUrl: 'https://example.com/image_17-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-17T00:00:00',
     updatedAt: '2025-09-17T00:00:00',
   },
   {
     id: '18-09-2025',
     year: 2025,
     month: 9,
     day: 18,
     imageUrl: 'https://example.com/image_18-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-18T00:00:00',
     updatedAt: '2025-09-18T00:00:00',
   },
   {
     id: '19-09-2025',
     year: 2025,
     month: 9,
     day: 19,
     imageUrl: 'https://example.com/image_19-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_19-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-19T00:00:00',
     updatedAt: '2025-09-19T00:00:00',
   },
   {
     id: '20-09-2025',
     year: 2025,
     month: 9,
     day: 20,
     imageUrl: 'https://example.com/image_20-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-20T00:00:00',
     updatedAt: '2025-09-20T00:00:00',
   },
   {
     id: '21-09-2025',
     year: 2025,
     month: 9,
     day: 21,
     imageUrl: 'https://example.com/image_21-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-21T00:00:00',
     updatedAt: '2025-09-21T00:00:00',
   },
   {
     id: '22-09-2025',
     year: 2025,
     month: 9,
     day: 22,
     imageUrl: 'https://example.com/image_22-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-22T00:00:00',
     updatedAt: '2025-09-22T00:00:00',
   },
   {
     id: '23-09-2025',
     year: 2025,
     month: 9,
     day: 23,
     imageUrl: 'https://example.com/image_23-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_23-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_23-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-23T00:00:00',
     updatedAt: '2025-09-23T00:00:00',
   },
   {
     id: '24-09-2025',
     year: 2025,
     month: 9,
     day: 24,
     imageUrl: 'https://example.com/image_24-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-24T00:00:00',
     updatedAt: '2025-09-24T00:00:00',
   },
   {
     id: '25-09-2025',
     year: 2025,
     month: 9,
     day: 25,
     imageUrl: 'https://example.com/image_25-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_25-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-25T00:00:00',
     updatedAt: '2025-09-25T00:00:00',
   },
   {
     id: '26-09-2025',
     year: 2025,
     month: 9,
     day: 26,
     imageUrl: 'https://example.com/image_26-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_26-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-26T00:00:00',
     updatedAt: '2025-09-26T00:00:00',
   },
   {
     id: '27-09-2025',
     year: 2025,
     month: 9,
     day: 27,
     imageUrl: 'https://example.com/image_27-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-27T00:00:00',
     updatedAt: '2025-09-27T00:00:00',
   },
   {
     id: '28-09-2025',
     year: 2025,
     month: 9,
     day: 28,
     imageUrl: 'https://example.com/image_28-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_28-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-28T00:00:00',
     updatedAt: '2025-09-28T00:00:00',
   },
   {
     id: '29-09-2025',
     year: 2025,
     month: 9,
     day: 29,
     imageUrl: 'https://example.com/image_29-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-29T00:00:00',
     updatedAt: '2025-09-29T00:00:00',
   },
   {
     id: '30-09-2025',
     year: 2025,
     month: 9,
     day: 30,
     imageUrl: 'https://example.com/image_30-09-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-09-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-09-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-09-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-09-30T00:00:00',
     updatedAt: '2025-09-30T00:00:00',
   },
   {
     id: '01-10-2025',
     year: 2025,
     month: 10,
     day: 1,
     imageUrl: 'https://example.com/image_01-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_01-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-01T00:00:00',
     updatedAt: '2025-10-01T00:00:00',
   },
   {
     id: '02-10-2025',
     year: 2025,
     month: 10,
     day: 2,
     imageUrl: 'https://example.com/image_02-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_02-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_02-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-02T00:00:00',
     updatedAt: '2025-10-02T00:00:00',
   },
   {
     id: '03-10-2025',
     year: 2025,
     month: 10,
     day: 3,
     imageUrl: 'https://example.com/image_03-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-03T00:00:00',
     updatedAt: '2025-10-03T00:00:00',
   },
   {
     id: '04-10-2025',
     year: 2025,
     month: 10,
     day: 4,
     imageUrl: 'https://example.com/image_04-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-04T00:00:00',
     updatedAt: '2025-10-04T00:00:00',
   },
   {
     id: '05-10-2025',
     year: 2025,
     month: 10,
     day: 5,
     imageUrl: 'https://example.com/image_05-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_05-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_05-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-05T00:00:00',
     updatedAt: '2025-10-05T00:00:00',
   },
   {
     id: '06-10-2025',
     year: 2025,
     month: 10,
     day: 6,
     imageUrl: 'https://example.com/image_06-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-06T00:00:00',
     updatedAt: '2025-10-06T00:00:00',
   },
   {
     id: '07-10-2025',
     year: 2025,
     month: 10,
     day: 7,
     imageUrl: 'https://example.com/image_07-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-07T00:00:00',
     updatedAt: '2025-10-07T00:00:00',
   },
   {
     id: '08-10-2025',
     year: 2025,
     month: 10,
     day: 8,
     imageUrl: 'https://example.com/image_08-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-08T00:00:00',
     updatedAt: '2025-10-08T00:00:00',
   },
   {
     id: '09-10-2025',
     year: 2025,
     month: 10,
     day: 9,
     imageUrl: 'https://example.com/image_09-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_09-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-09T00:00:00',
     updatedAt: '2025-10-09T00:00:00',
   },
   {
     id: '10-10-2025',
     year: 2025,
     month: 10,
     day: 10,
     imageUrl: 'https://example.com/image_10-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-10T00:00:00',
     updatedAt: '2025-10-10T00:00:00',
   },
   {
     id: '11-10-2025',
     year: 2025,
     month: 10,
     day: 11,
     imageUrl: 'https://example.com/image_11-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-11T00:00:00',
     updatedAt: '2025-10-11T00:00:00',
   },
   {
     id: '12-10-2025',
     year: 2025,
     month: 10,
     day: 12,
     imageUrl: 'https://example.com/image_12-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-12T00:00:00',
     updatedAt: '2025-10-12T00:00:00',
   },
   {
     id: '13-10-2025',
     year: 2025,
     month: 10,
     day: 13,
     imageUrl: 'https://example.com/image_13-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_13-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-13T00:00:00',
     updatedAt: '2025-10-13T00:00:00',
   },
   {
     id: '14-10-2025',
     year: 2025,
     month: 10,
     day: 14,
     imageUrl: 'https://example.com/image_14-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-14T00:00:00',
     updatedAt: '2025-10-14T00:00:00',
   },
   {
     id: '15-10-2025',
     year: 2025,
     month: 10,
     day: 15,
     imageUrl: 'https://example.com/image_15-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_15-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_15-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-15T00:00:00',
     updatedAt: '2025-10-15T00:00:00',
   },
   {
     id: '16-10-2025',
     year: 2025,
     month: 10,
     day: 16,
     imageUrl: 'https://example.com/image_16-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_16-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-16T00:00:00',
     updatedAt: '2025-10-16T00:00:00',
   },
   {
     id: '17-10-2025',
     year: 2025,
     month: 10,
     day: 17,
     imageUrl: 'https://example.com/image_17-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-17T00:00:00',
     updatedAt: '2025-10-17T00:00:00',
   },
   {
     id: '18-10-2025',
     year: 2025,
     month: 10,
     day: 18,
     imageUrl: 'https://example.com/image_18-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-18T00:00:00',
     updatedAt: '2025-10-18T00:00:00',
   },
   {
     id: '19-10-2025',
     year: 2025,
     month: 10,
     day: 19,
     imageUrl: 'https://example.com/image_19-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-19T00:00:00',
     updatedAt: '2025-10-19T00:00:00',
   },
   {
     id: '20-10-2025',
     year: 2025,
     month: 10,
     day: 20,
     imageUrl: 'https://example.com/image_20-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_20-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_20-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-20T00:00:00',
     updatedAt: '2025-10-20T00:00:00',
   },
   {
     id: '21-10-2025',
     year: 2025,
     month: 10,
     day: 21,
     imageUrl: 'https://example.com/image_21-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_21-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-21T00:00:00',
     updatedAt: '2025-10-21T00:00:00',
   },
   {
     id: '22-10-2025',
     year: 2025,
     month: 10,
     day: 22,
     imageUrl: 'https://example.com/image_22-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-22T00:00:00',
     updatedAt: '2025-10-22T00:00:00',
   },
   {
     id: '23-10-2025',
     year: 2025,
     month: 10,
     day: 23,
     imageUrl: 'https://example.com/image_23-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_23-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-23T00:00:00',
     updatedAt: '2025-10-23T00:00:00',
   },
   {
     id: '24-10-2025',
     year: 2025,
     month: 10,
     day: 24,
     imageUrl: 'https://example.com/image_24-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-24T00:00:00',
     updatedAt: '2025-10-24T00:00:00',
   },
   {
     id: '25-10-2025',
     year: 2025,
     month: 10,
     day: 25,
     imageUrl: 'https://example.com/image_25-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_25-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_25-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-25T00:00:00',
     updatedAt: '2025-10-25T00:00:00',
   },
   {
     id: '26-10-2025',
     year: 2025,
     month: 10,
     day: 26,
     imageUrl: 'https://example.com/image_26-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_26-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-26T00:00:00',
     updatedAt: '2025-10-26T00:00:00',
   },
   {
     id: '27-10-2025',
     year: 2025,
     month: 10,
     day: 27,
     imageUrl: 'https://example.com/image_27-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_27-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-27T00:00:00',
     updatedAt: '2025-10-27T00:00:00',
   },
   {
     id: '28-10-2025',
     year: 2025,
     month: 10,
     day: 28,
     imageUrl: 'https://example.com/image_28-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-28T00:00:00',
     updatedAt: '2025-10-28T00:00:00',
   },
   {
     id: '29-10-2025',
     year: 2025,
     month: 10,
     day: 29,
     imageUrl: 'https://example.com/image_29-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-29T00:00:00',
     updatedAt: '2025-10-29T00:00:00',
   },
   {
     id: '30-10-2025',
     year: 2025,
     month: 10,
     day: 30,
     imageUrl: 'https://example.com/image_30-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-30T00:00:00',
     updatedAt: '2025-10-30T00:00:00',
   },
   {
     id: '31-10-2025',
     year: 2025,
     month: 10,
     day: 31,
     imageUrl: 'https://example.com/image_31-10-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_31-10-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_31-10-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_31-10-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-10-31T00:00:00',
     updatedAt: '2025-10-31T00:00:00',
   },
   {
     id: '01-11-2025',
     year: 2025,
     month: 11,
     day: 1,
     imageUrl: 'https://example.com/image_01-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_01-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-01T00:00:00',
     updatedAt: '2025-11-01T00:00:00',
   },
   {
     id: '02-11-2025',
     year: 2025,
     month: 11,
     day: 2,
     imageUrl: 'https://example.com/image_02-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_02-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-02T00:00:00',
     updatedAt: '2025-11-02T00:00:00',
   },
   {
     id: '03-11-2025',
     year: 2025,
     month: 11,
     day: 3,
     imageUrl: 'https://example.com/image_03-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_03-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-03T00:00:00',
     updatedAt: '2025-11-03T00:00:00',
   },
   {
     id: '04-11-2025',
     year: 2025,
     month: 11,
     day: 4,
     imageUrl: 'https://example.com/image_04-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_04-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-04T00:00:00',
     updatedAt: '2025-11-04T00:00:00',
   },
   {
     id: '05-11-2025',
     year: 2025,
     month: 11,
     day: 5,
     imageUrl: 'https://example.com/image_05-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_05-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-05T00:00:00',
     updatedAt: '2025-11-05T00:00:00',
   },
   {
     id: '06-11-2025',
     year: 2025,
     month: 11,
     day: 6,
     imageUrl: 'https://example.com/image_06-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-06T00:00:00',
     updatedAt: '2025-11-06T00:00:00',
   },
   {
     id: '07-11-2025',
     year: 2025,
     month: 11,
     day: 7,
     imageUrl: 'https://example.com/image_07-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_07-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-07T00:00:00',
     updatedAt: '2025-11-07T00:00:00',
   },
   {
     id: '08-11-2025',
     year: 2025,
     month: 11,
     day: 8,
     imageUrl: 'https://example.com/image_08-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-08T00:00:00',
     updatedAt: '2025-11-08T00:00:00',
   },
   {
     id: '09-11-2025',
     year: 2025,
     month: 11,
     day: 9,
     imageUrl: 'https://example.com/image_09-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-09T00:00:00',
     updatedAt: '2025-11-09T00:00:00',
   },
   {
     id: '10-11-2025',
     year: 2025,
     month: 11,
     day: 10,
     imageUrl: 'https://example.com/image_10-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_10-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_10-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-10T00:00:00',
     updatedAt: '2025-11-10T00:00:00',
   },
   {
     id: '11-11-2025',
     year: 2025,
     month: 11,
     day: 11,
     imageUrl: 'https://example.com/image_11-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-11T00:00:00',
     updatedAt: '2025-11-11T00:00:00',
   },
   {
     id: '12-11-2025',
     year: 2025,
     month: 11,
     day: 12,
     imageUrl: 'https://example.com/image_12-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-12T00:00:00',
     updatedAt: '2025-11-12T00:00:00',
   },
   {
     id: '13-11-2025',
     year: 2025,
     month: 11,
     day: 13,
     imageUrl: 'https://example.com/image_13-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-13T00:00:00',
     updatedAt: '2025-11-13T00:00:00',
   },
   {
     id: '14-11-2025',
     year: 2025,
     month: 11,
     day: 14,
     imageUrl: 'https://example.com/image_14-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_14-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-14T00:00:00',
     updatedAt: '2025-11-14T00:00:00',
   },
   {
     id: '15-11-2025',
     year: 2025,
     month: 11,
     day: 15,
     imageUrl: 'https://example.com/image_15-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_15-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_15-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-15T00:00:00',
     updatedAt: '2025-11-15T00:00:00',
   },
   {
     id: '16-11-2025',
     year: 2025,
     month: 11,
     day: 16,
     imageUrl: 'https://example.com/image_16-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-16T00:00:00',
     updatedAt: '2025-11-16T00:00:00',
   },
   {
     id: '17-11-2025',
     year: 2025,
     month: 11,
     day: 17,
     imageUrl: 'https://example.com/image_17-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_17-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_17-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_17-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-17T00:00:00',
     updatedAt: '2025-11-17T00:00:00',
   },
   {
     id: '18-11-2025',
     year: 2025,
     month: 11,
     day: 18,
     imageUrl: 'https://example.com/image_18-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-18T00:00:00',
     updatedAt: '2025-11-18T00:00:00',
   },
   {
     id: '19-11-2025',
     year: 2025,
     month: 11,
     day: 19,
     imageUrl: 'https://example.com/image_19-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_19-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-19T00:00:00',
     updatedAt: '2025-11-19T00:00:00',
   },
   {
     id: '20-11-2025',
     year: 2025,
     month: 11,
     day: 20,
     imageUrl: 'https://example.com/image_20-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_20-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_20-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-20T00:00:00',
     updatedAt: '2025-11-20T00:00:00',
   },
   {
     id: '21-11-2025',
     year: 2025,
     month: 11,
     day: 21,
     imageUrl: 'https://example.com/image_21-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_21-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-21T00:00:00',
     updatedAt: '2025-11-21T00:00:00',
   },
   {
     id: '22-11-2025',
     year: 2025,
     month: 11,
     day: 22,
     imageUrl: 'https://example.com/image_22-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-22T00:00:00',
     updatedAt: '2025-11-22T00:00:00',
   },
   {
     id: '23-11-2025',
     year: 2025,
     month: 11,
     day: 23,
     imageUrl: 'https://example.com/image_23-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-23T00:00:00',
     updatedAt: '2025-11-23T00:00:00',
   },
   {
     id: '24-11-2025',
     year: 2025,
     month: 11,
     day: 24,
     imageUrl: 'https://example.com/image_24-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_24-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-24T00:00:00',
     updatedAt: '2025-11-24T00:00:00',
   },
   {
     id: '25-11-2025',
     year: 2025,
     month: 11,
     day: 25,
     imageUrl: 'https://example.com/image_25-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_25-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-25T00:00:00',
     updatedAt: '2025-11-25T00:00:00',
   },
   {
     id: '26-11-2025',
     year: 2025,
     month: 11,
     day: 26,
     imageUrl: 'https://example.com/image_26-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-26T00:00:00',
     updatedAt: '2025-11-26T00:00:00',
   },
   {
     id: '27-11-2025',
     year: 2025,
     month: 11,
     day: 27,
     imageUrl: 'https://example.com/image_27-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_27-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_27-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-27T00:00:00',
     updatedAt: '2025-11-27T00:00:00',
   },
   {
     id: '28-11-2025',
     year: 2025,
     month: 11,
     day: 28,
     imageUrl: 'https://example.com/image_28-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-28T00:00:00',
     updatedAt: '2025-11-28T00:00:00',
   },
   {
     id: '29-11-2025',
     year: 2025,
     month: 11,
     day: 29,
     imageUrl: 'https://example.com/image_29-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_29-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-29T00:00:00',
     updatedAt: '2025-11-29T00:00:00',
   },
   {
     id: '30-11-2025',
     year: 2025,
     month: 11,
     day: 30,
     imageUrl: 'https://example.com/image_30-11-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-11-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-11-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-11-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-11-30T00:00:00',
     updatedAt: '2025-11-30T00:00:00',
   },
   {
     id: '01-12-2025',
     year: 2025,
     month: 12,
     day: 1,
     imageUrl: 'https://example.com/image_01-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_01-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_01-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-01T00:00:00',
     updatedAt: '2025-12-01T00:00:00',
   },
   {
     id: '02-12-2025',
     year: 2025,
     month: 12,
     day: 2,
     imageUrl: 'https://example.com/image_02-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_02-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_02-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_02-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-02T00:00:00',
     updatedAt: '2025-12-02T00:00:00',
   },
   {
     id: '03-12-2025',
     year: 2025,
     month: 12,
     day: 3,
     imageUrl: 'https://example.com/image_03-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_03-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_03-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-03T00:00:00',
     updatedAt: '2025-12-03T00:00:00',
   },
   {
     id: '04-12-2025',
     year: 2025,
     month: 12,
     day: 4,
     imageUrl: 'https://example.com/image_04-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_04-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_04-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-04T00:00:00',
     updatedAt: '2025-12-04T00:00:00',
   },
   {
     id: '05-12-2025',
     year: 2025,
     month: 12,
     day: 5,
     imageUrl: 'https://example.com/image_05-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_05-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_05-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-05T00:00:00',
     updatedAt: '2025-12-05T00:00:00',
   },
   {
     id: '06-12-2025',
     year: 2025,
     month: 12,
     day: 6,
     imageUrl: 'https://example.com/image_06-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_06-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_06-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_06-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-06T00:00:00',
     updatedAt: '2025-12-06T00:00:00',
   },
   {
     id: '07-12-2025',
     year: 2025,
     month: 12,
     day: 7,
     imageUrl: 'https://example.com/image_07-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_07-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_07-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-07T00:00:00',
     updatedAt: '2025-12-07T00:00:00',
   },
   {
     id: '08-12-2025',
     year: 2025,
     month: 12,
     day: 8,
     imageUrl: 'https://example.com/image_08-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_08-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_08-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-08T00:00:00',
     updatedAt: '2025-12-08T00:00:00',
   },
   {
     id: '09-12-2025',
     year: 2025,
     month: 12,
     day: 9,
     imageUrl: 'https://example.com/image_09-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_09-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_09-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-09T00:00:00',
     updatedAt: '2025-12-09T00:00:00',
   },
   {
     id: '10-12-2025',
     year: 2025,
     month: 12,
     day: 10,
     imageUrl: 'https://example.com/image_10-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_10-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_10-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-10T00:00:00',
     updatedAt: '2025-12-10T00:00:00',
   },
   {
     id: '11-12-2025',
     year: 2025,
     month: 12,
     day: 11,
     imageUrl: 'https://example.com/image_11-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_11-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_11-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_11-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-11T00:00:00',
     updatedAt: '2025-12-11T00:00:00',
   },
   {
     id: '12-12-2025',
     year: 2025,
     month: 12,
     day: 12,
     imageUrl: 'https://example.com/image_12-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_12-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_12-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_12-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-12T00:00:00',
     updatedAt: '2025-12-12T00:00:00',
   },
   {
     id: '13-12-2025',
     year: 2025,
     month: 12,
     day: 13,
     imageUrl: 'https://example.com/image_13-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_13-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_13-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-13T00:00:00',
     updatedAt: '2025-12-13T00:00:00',
   },
   {
     id: '14-12-2025',
     year: 2025,
     month: 12,
     day: 14,
     imageUrl: 'https://example.com/image_14-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_14-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_14-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-14T00:00:00',
     updatedAt: '2025-12-14T00:00:00',
   },
   {
     id: '15-12-2025',
     year: 2025,
     month: 12,
     day: 15,
     imageUrl: 'https://example.com/image_15-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_15-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_15-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_15-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-15T00:00:00',
     updatedAt: '2025-12-15T00:00:00',
   },
   {
     id: '16-12-2025',
     year: 2025,
     month: 12,
     day: 16,
     imageUrl: 'https://example.com/image_16-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_16-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_16-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-16T00:00:00',
     updatedAt: '2025-12-16T00:00:00',
   },
   {
     id: '17-12-2025',
     year: 2025,
     month: 12,
     day: 17,
     imageUrl: 'https://example.com/image_17-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_17-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-17T00:00:00',
     updatedAt: '2025-12-17T00:00:00',
   },
   {
     id: '18-12-2025',
     year: 2025,
     month: 12,
     day: 18,
     imageUrl: 'https://example.com/image_18-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_18-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_18-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_18-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-18T00:00:00',
     updatedAt: '2025-12-18T00:00:00',
   },
   {
     id: '19-12-2025',
     year: 2025,
     month: 12,
     day: 19,
     imageUrl: 'https://example.com/image_19-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_19-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_19-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-19T00:00:00',
     updatedAt: '2025-12-19T00:00:00',
   },
   {
     id: '20-12-2025',
     year: 2025,
     month: 12,
     day: 20,
     imageUrl: 'https://example.com/image_20-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_20-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_20-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-20T00:00:00',
     updatedAt: '2025-12-20T00:00:00',
   },
   {
     id: '21-12-2025',
     year: 2025,
     month: 12,
     day: 21,
     imageUrl: 'https://example.com/image_21-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_21-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_21-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_21-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-21T00:00:00',
     updatedAt: '2025-12-21T00:00:00',
   },
   {
     id: '22-12-2025',
     year: 2025,
     month: 12,
     day: 22,
     imageUrl: 'https://example.com/image_22-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_22-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_22-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_22-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-22T00:00:00',
     updatedAt: '2025-12-22T00:00:00',
   },
   {
     id: '23-12-2025',
     year: 2025,
     month: 12,
     day: 23,
     imageUrl: 'https://example.com/image_23-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_23-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_23-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-23T00:00:00',
     updatedAt: '2025-12-23T00:00:00',
   },
   {
     id: '24-12-2025',
     year: 2025,
     month: 12,
     day: 24,
     imageUrl: 'https://example.com/image_24-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_24-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_24-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-24T00:00:00',
     updatedAt: '2025-12-24T00:00:00',
   },
   {
     id: '25-12-2025',
     year: 2025,
     month: 12,
     day: 25,
     imageUrl: 'https://example.com/image_25-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_25-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_25-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-25T00:00:00',
     updatedAt: '2025-12-25T00:00:00',
   },
   {
     id: '26-12-2025',
     year: 2025,
     month: 12,
     day: 26,
     imageUrl: 'https://example.com/image_26-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_26-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_26-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-26T00:00:00',
     updatedAt: '2025-12-26T00:00:00',
   },
   {
     id: '27-12-2025',
     year: 2025,
     month: 12,
     day: 27,
     imageUrl: 'https://example.com/image_27-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_27-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-27T00:00:00',
     updatedAt: '2025-12-27T00:00:00',
   },
   {
     id: '28-12-2025',
     year: 2025,
     month: 12,
     day: 28,
     imageUrl: 'https://example.com/image_28-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_28-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Grace and Salvation',
           message: 'For by grace you have been saved through faith.',
           bibleVerse: {
             reference: 'Ephesians 2:8-9',
             verses:
               'For by grace you have been saved through faith, and this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
             keyVerse: 'Ephesians 2:8',
           },
         },
         audioUrl: 'https://example.com/audio_28-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-28T00:00:00',
     updatedAt: '2025-12-28T00:00:00',
   },
   {
     id: '29-12-2025',
     year: 2025,
     month: 12,
     day: 29,
     imageUrl: 'https://example.com/image_29-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_29-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_29-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_29-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-29T00:00:00',
     updatedAt: '2025-12-29T00:00:00',
   },
   {
     id: '30-12-2025',
     year: 2025,
     month: 12,
     day: 30,
     imageUrl: 'https://example.com/image_30-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_30-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_30-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-30T00:00:00',
     updatedAt: '2025-12-30T00:00:00',
   },
   {
     id: '31-12-2025',
     year: 2025,
     month: 12,
     day: 31,
     imageUrl: 'https://example.com/image_31-12-2025.jpg',
     tags: ['faith', 'grace', 'love'],
     content: [
       {
         language: {
           code: 'en',
           countryCode: 'gb',
           label: 'English',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_31-12-2025_en.mp3',
       },
       {
         language: {
           code: 'fr',
           countryCode: 'fr',
           label: 'French',
         },
         text: {
           topic: 'Faith in God',
           message: 'Trust in the Lord with all your heart.',
           bibleVerse: {
             reference: 'Proverbs 3:5-6',
             verses:
               'Trust in the Lord with all your heart and do not lean on your own understanding. In all your ways acknowledge Him, and He will make your paths straight.',
             keyVerse: 'Proverbs 3:5',
           },
         },
         audioUrl: 'https://example.com/audio_31-12-2025_fr.mp3',
       },
       {
         language: {
           code: 'yo',
           countryCode: 'ng',
           label: 'Yoruba',
         },
         text: {
           topic: 'Love of God',
           message: 'God so loved the world that He gave His only Son.',
           bibleVerse: {
             reference: 'John 3:16',
             verses:
               'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
             keyVerse: 'John 3:16',
           },
         },
         audioUrl: 'https://example.com/audio_31-12-2025_yr.mp3',
       },
     ],
     isPublished: true,
     isAwaitingApproval: false,
     createdBy: 'admin',
     updatedBy: 'editor',
     createdAt: '2025-12-31T00:00:00',
     updatedAt: '2025-12-31T00:00:00',
   },
 ];

export const AWAITING_APPROVAL_CONTENT_MOCK = MOCK.map(
  (content) => {
    content.isPublished = false;
    content.isAwaitingApproval = true;
    content.content = [content.content.find((c) => c.language.code === DEFAULT_LANG_CODE)!];
    return content;
  }
);
