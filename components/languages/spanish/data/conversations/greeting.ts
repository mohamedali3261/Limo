import { ConversationScenario } from './types';

export const greeting: ConversationScenario = {
    id: 'greeting',
    arabicTitle: 'التعارف (محسن)',
    description: 'التعرف على شخص جديد وتفاصيل أكثر',
    lines: [
      { speaker: 'A', speakerNameEs: 'María', speakerNameAr: 'ماريا', spanish: '¡Hola! Buenos días. ¿Cómo te llamas?', arabicTranslation: 'مرحباً! صباح الخير. ما اسمك؟', arabicPronunciation: 'أولا! بوينوس دياس. كومو تي ياماس؟' },
      { speaker: 'B', speakerNameEs: 'Juan', speakerNameAr: 'خوان', spanish: 'Hola. Me llamo Juan. ¿Y tú?', arabicTranslation: 'مرحباً. اسمي خوان. وأنتِ؟', arabicPronunciation: 'أولا. مي يامو خوان. إي تو؟' },
      { speaker: 'A', speakerNameEs: 'María', speakerNameAr: 'ماريا', spanish: 'Me llamo María. Mucho gusto, Juan. ¿De dónde eres?', arabicTranslation: 'اسمي ماريا. تشرفنا يا خوان. من أين أنت؟', arabicPronunciation: 'مي يامو ماريا. موتشو جوستو، خوان. دي دوندي إيريس؟' },
      { speaker: 'B', speakerNameEs: 'Juan', speakerNameAr: 'خوان', spanish: 'Soy de México, de la capital. ¿Y tú, eres de España?', arabicTranslation: 'أنا من المكسيك، من العاصمة. وأنت، هل أنتِ من إسبانيا؟', arabicPronunciation: 'سوي دي ميخيكو، دي لا كابيتال. إي تو، إيريس دي إسبانيا؟' },
      { speaker: 'A', speakerNameEs: 'María', speakerNameAr: 'ماريا', spanish: 'Sí, soy de Madrid. ¿Cuántos años tienes?', arabicTranslation: 'نعم، أنا من مدريد. كم عمرك؟', arabicPronunciation: 'سي، سوي دي مادريد. كوانتوس أنيوس تيينيس؟' },
      { speaker: 'B', speakerNameEs: 'Juan', speakerNameAr: 'خوان', spanish: 'Tengo veinticinco años. ¿A qué te dedicas?', arabicTranslation: 'عمري خمسة وعشرون عاماً. ماذا تعملين؟', arabicPronunciation: 'تينجو بينتيثينكو أنيوس. أ كي تي ديديكاس؟' },
      { speaker: 'A', speakerNameEs: 'María', speakerNameAr: 'ماريا', spanish: 'Soy estudiante de medicina. ¿Y tú?', arabicTranslation: 'أنا طالبة طب. وأنت؟', arabicPronunciation: 'سوي إستوديانتى دي ميديِثينا. إي تو؟' },
      { speaker: 'B', speakerNameEs: 'Juan', speakerNameAr: 'خوان', spanish: 'Yo trabajo como profesor de español. Es un placer conocerte.', arabicTranslation: 'أنا أعمل كمعلم للغة الإسبانية. سررت بمعرفتك.', arabicPronunciation: 'يو تراباخو كومو بروفيسور دي إسبانيول. إس أون بلاسير كونوثيرتي.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿De dónde es Juan?', arabic: 'من أين خوان؟', options: [ { text: 'España', correct: false }, { text: 'México', correct: true }, { text: 'Madrid', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuál es la profesión de María?', arabic: 'ما هي مهنة ماريا؟', options: [ { text: 'Estudiante de medicina', correct: true }, { text: 'Profesora de español', correct: false }, { text: 'Empleada de banco', correct: false } ] },
      { type: 'true_false', spanish: 'Juan tiene treinta años.', arabic: 'خوان عمره ثلاثون سنة', isTrue: false, correctArabic: 'خوان عمره خمسة وعشرون سنة' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Me llamo María', arabic: 'اسمي ماريا' }, { spanish: 'Soy de México', arabic: 'أنا من المكسيك' }, { spanish: 'Soy estudiante de medicina', arabic: 'أنا طالبة طب' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Tengo _____ años.', answer: 'veinticinco', fillBlankOptions: [ 'veinticinco', 'treinta', 'veinte', 'veinticuatro' ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: '¿Cómo te llamas?', arabic: 'ما اسمك؟' }, { spanish: 'Mucho gusto', arabic: 'تشرفنا' }, { spanish: '¿A qué te dedicas?', arabic: 'ماذا تعملين؟' } ] },
      { type: 'multiple_choice', spanish: '¿Cuántos años tiene Juan?', arabic: 'كم عمر خوان؟', options: [ { text: 'Veinte años', correct: false }, { text: 'Veinticinco años', correct: true }, { text: 'Treinta años', correct: false } ] }
    ]
};
