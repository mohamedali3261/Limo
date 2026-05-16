import { ConversationScenario } from './types';

export const doctor: ConversationScenario = {
    id: 'doctor_detailed',
    arabicTitle: 'عند الطبيب (مفصلة)',
    description: 'شرح الأعراض بالتفصيل وتلقي الوصفة',
    lines: [
      { speaker: 'A', speakerNameEs: 'Doctor', speakerNameAr: 'الطبيب', spanish: 'Adelante, siéntese. ¿Qué le ocurre?', arabicTranslation: 'تفضل بالدخول، اجلس. ماذا حدث لك؟', arabicPronunciation: 'أديلانتى، سيينتيسى. كي لي أوكوري؟' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: 'Llevo tres días con un dolor de garganta fuerte y mucha tos.', arabicTranslation: 'أعاني منذ ثلاثة أيام من ألم قوي في الحلق وسعال شديد.', arabicPronunciation: 'ييبو تريس دياس كون أون دولور دي جارجانتا فويرتى إي موتشا توس.' },
      { speaker: 'A', speakerNameEs: 'Doctor', speakerNameAr: 'الطبيب', spanish: 'Vamos a ver. Abra la boca y diga "ah".', arabicTranslation: 'دعنا نرى. افتح فمك وقل "آه".', arabicPronunciation: 'باموس أ بير. أبرا لا بوكا إي ديجا "آه".' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: '¡Ah! ¿Es grave, doctor?', arabicTranslation: 'آه! هل هو خطير يا دكتور؟', arabicPronunciation: 'آه! إس جرابى، دكتور؟' },
      { speaker: 'A', speakerNameEs: 'Doctor', speakerNameAr: 'الطبيب', spanish: 'No, es una simple infección. Le recetaré este jarabe y unas pastillas para la fiebre.', arabicTranslation: 'لا، إنها مجرد عدوى بسيطة. سأصف لك هذا الشراب وحبوباً من أجل الحمى.', arabicPronunciation: 'نو، إس أونا سيمبلى إنفيكثيون. لي ريثيتاري إشتى خارابى إي أوناس باستياس بارا لا فييبري.' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: '¿Cuántas veces al día?', arabicTranslation: 'كم مرة في اليوم؟', arabicPronunciation: 'كوانتاس بيثيس آل ديا؟' },
      { speaker: 'A', speakerNameEs: 'Doctor', speakerNameAr: 'الطبيب', spanish: 'El jarabe tres veces y la pastilla sólo si tiene dolor. Beba mucha agua.', arabicTranslation: 'الشراب ثلاث مرات والحبة فقط إذا كان هناك ألم. اشرب الكثير من الماء.', arabicPronunciation: 'إل خارابى تريس بيثيس إي لا باستيا سولو سي تييني دولور. بيبا موتشا أجوا.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Qué tiene el paciente?', arabic: 'ماذا عند المريض؟', options: [ { text: 'Dolor de cabeza', correct: false }, { text: 'Dolor de garganta y tos', correct: true }, { text: 'Dolor de estómago', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuántas veces al día debe tomar el jarabe?', arabic: 'كم مرة في اليوم يجب أن يأخذ الشراب؟', options: [ { text: 'Una vez', correct: false }, { text: 'Dos veces', correct: false }, { text: 'Tres veces', correct: true } ] },
      { type: 'true_false', spanish: 'El doctor receta un jarabe y pastillas.', arabic: 'الطبيب يصف شراب وحبوب.', isTrue: true },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Llevo tres días con un dolor de garganta', arabic: 'أعاني منذ ثلاثة أيام من ألم في الحلق' }, { spanish: 'Es una simple infección', arabic: 'إنها مجرد عدوى بسيطة' }, { spanish: 'Beba mucha agua', arabic: 'اشرب الكثير من الماء' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'El jarabe _____ veces al día.', answer: 'tres', fillBlankOptions: [ 'tres', 'dos', 'cuatro', 'una' ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Abra la boca y diga ah', arabic: 'افتح فمك وقل آه' }, { spanish: '¿Es grave, doctor?', arabic: 'هل هو خطير يا دكتور؟' }, { spanish: 'La pastilla sólo si tiene dolor', arabic: 'الحبة فقط إذا كان هناك ألم' } ] },
      { type: 'multiple_choice', spanish: '¿Qué receta el doctor?', arabic: 'ماذا يصف الطبيب؟', options: [ { text: 'Jarabe y pastillas', correct: true }, { text: 'Solo pastillas', correct: false }, { text: 'Solo jarabe', correct: false } ] }
    ]
};
