import { ConversationScenario } from './types';

export const train_station: ConversationScenario = {
    id: 'train_station',
    arabicTitle: 'محطة القطار',
    description: 'شراء تذكرة والاستفسار عن مواعيد القطارات',
    lines: [
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Buenos días. ¿A qué destino viaja?', arabicTranslation: 'صباح الخير. إلى أي وجهة تسافر؟', arabicPronunciation: 'بوينوس دياس. أ كي ديستينو بيياخا؟' },
      { speaker: 'B', speakerNameEs: 'Viajero', speakerNameAr: 'المسافر', spanish: 'A Barcelona. ¿Hay trenes esta tarde?', arabicTranslation: 'إلى برشلونة. هل توجد قطارات هذا المساء؟', arabicPronunciation: 'أ بارثيلونا. إي ترينيس إيستا تاردي؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Sí, hay uno a las cuatro y otro a las seis.', arabicTranslation: 'نعم، يوجد واحد في الساعة الرابعة وآخر في السادسة.', arabicPronunciation: 'سي، إي أونو أ لاس كواترو إي أوتيرو أ لاس سييس.' },
      { speaker: 'B', speakerNameEs: 'Viajero', speakerNameAr: 'المسافر', spanish: '¿Cuánto cuesta el billete de ida?', arabicTranslation: 'كم تبلغ تذكرة الذهاب؟', arabicPronunciation: 'كوانتو كويستا إل بيييتي دي إيدا؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Cincuenta euros. ¿Quiere comprarlo?', arabicTranslation: 'خمسون يورو. هل تريد شراءه؟', arabicPronunciation: 'ثينكوينتا إيوروس. كييري كومبرارلو؟' },
      { speaker: 'B', speakerNameEs: 'Viajero', speakerNameAr: 'المسافر', spanish: 'Sí, por favor, el de las cuatro.', arabicTranslation: 'نعم، من فضلك، الذي في الساعة الرابعة.', arabicPronunciation: 'سي، بور فابور، إل دي لاس كواترو.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Aquí tiene su billete. Feliz viaje.', arabicTranslation: 'ها هي تذكرتك. رحلة سعيدة.', arabicPronunciation: 'أكي تييني سو بيييتي. فيليث بيياخي.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿A qué hora quiere viajar?', arabic: 'في أي ساعة يريد السفر؟', options: [ { text: 'A las seis', correct: false }, { text: 'A las cuatro', correct: true }, { text: 'A las cinco', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuántos trenes hay?', arabic: 'كم عدد القطارات؟', options: [ { text: 'Uno', correct: false }, { text: 'Dos', correct: true }, { text: 'Tres', correct: false } ] },
      { type: 'true_false', spanish: 'El billete cuesta 40 euros.', arabic: 'التذكرة تكلف ٤٠ يورو.', isTrue: false, correctArabic: '٥٠ يورو' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'A Barcelona', arabic: 'إلى برشلونة' }, { spanish: 'Hay uno a las cuatro', arabic: 'يوجد واحد في الساعة الرابعة' }, { spanish: 'El billete cuesta cincuenta euros', arabic: 'التذكرة تكلف خمسون يورو' } ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Hay trenes esta tarde', arabic: 'توجد قطارات هذا المساء' }, { spanish: 'Quiere comprarlo', arabic: 'هل تريد شراءه' }, { spanish: 'Feliz viaje', arabic: 'رحلة سعيدة' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'El billete de ida a Barcelona cuesta _____ euros.', answer: 'cincuenta', fillBlankOptions: [ 'cincuenta', 'cuarenta', 'sesenta', 'treinta' ] }
    ]
};
