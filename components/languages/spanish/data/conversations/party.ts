import { ConversationScenario } from './types';

export const party: ConversationScenario = {
    id: 'party_meeting',
    arabicTitle: 'لقاء في حفلة',
    description: 'التعرف على شخص في حفلة صديق',
    lines: [
      { speaker: 'A', speakerNameEs: 'Invitado', speakerNameAr: 'ضيف', spanish: '¡Hola! Es una buena fiesta, ¿no?', arabicTranslation: 'مرحباً! إنها حفلة رائعة، أليس كذلك؟', arabicPronunciation: 'أولا! إس أونا بوينا فييستا، نو؟' },
      { speaker: 'B', speakerNameEs: 'Otro Invitado', speakerNameAr: 'ضيف آخر', spanish: 'Sí, me gusta mucho la música. ¿Conoces al organizador?', arabicTranslation: 'نعم، أحب الموسيقى كثيراً. هل تعرف المنظم؟', arabicPronunciation: 'سي، مي جوستا موتشو لا موسيكا. كونوثيس آل أورجانثادور؟' },
      { speaker: 'A', speakerNameEs: 'Invitado', speakerNameAr: 'ضيف', spanish: 'Sí, es mi amigo de la universidad. Soy Carlos.', arabicTranslation: 'نعم، إنه صديقي من الجامعة. أنا كارلوس.', arabicPronunciation: 'سي، إس مي أميجو دي لا أونيبرسيداد. سوي كارلوس.' },
      { speaker: 'B', speakerNameEs: 'Otro Invitado', speakerNameAr: 'ضيف آخر', spanish: 'Mucho gusto, Carlos. Yo soy Ana.', arabicTranslation: 'تشرفنا يا كارلوس. أنا أنا.', arabicPronunciation: 'موتشو جوستو، كارلوس. يو سوي أنا.' },
      { speaker: 'A', speakerNameEs: 'Invitado', speakerNameAr: 'ضيف', spanish: '¿Vives aquí en la ciudad, Ana?', arabicTranslation: 'هل تسكنين هنا في المدينة، أنا؟', arabicPronunciation: 'بيبيس أكي إن لا ثيوداد، أنا؟' },
      { speaker: 'B', speakerNameEs: 'Otro Invitado', speakerNameAr: 'ضيف آخر', spanish: 'No, vengo de visita desde Valencia.', arabicTranslation: 'لا، جئت للزيارة من فالنسيا.', arabicPronunciation: 'نو، بينجو دي بيسيتا ديسدي بالينثيا.' }
    ],
    quiz: [
        { type: 'multiple_choice', spanish: '¿Cómo se llaman?', arabic: 'ما أسماؤهم؟', options: [ { text: 'Carlos y Ana', correct: true }, { text: 'Pedro y Maria', correct: false }, { text: 'Juan y Ana', correct: false } ] },
        { type: 'multiple_choice', spanish: '¿Quién es el organizador de la fiesta?', arabic: 'من منظم الحفلة؟', options: [ { text: 'Carlos', correct: true }, { text: 'Ana', correct: false }, { text: 'Pedro', correct: false } ] },
        { type: 'true_false', spanish: 'Ana vive en esta ciudad.', arabic: 'Ana تسكن في هذه المدينة.', isTrue: false, correctArabic: 'تأتي من فالنسيا' },
        { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Es una buena fiesta', arabic: 'إنها حفلة رائعة' }, { spanish: 'Soy Carlos', arabic: 'أنا كارلوس' }, { spanish: 'Vengo de visita desde Valencia', arabic: 'جئت للزيارة من فالنسيا' } ] },
        { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Me gusta mucho la música', arabic: 'أحب الموسيقى كثيراً' }, { spanish: 'Es mi amigo de la universidad', arabic: 'إنه صديقي من الجامعة' }, { spanish: 'Mucho gusto', arabic: 'تشرفنا' } ] },
        { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Carlos es amigo de _____ de la universidad.', answer: 'Ana', fillBlankOptions: [ 'Ana', 'Maria', 'Pedro', 'Juan' ] }
    ]
};
