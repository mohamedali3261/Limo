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
      { type: 'multiple_choice', spanish: '¿Qué tiene el paciente?', arabic: 'Was hat der Patient?', options: [ { text: 'ألم في الرأس', correct: false }, { text: 'ألم في الحلق وسعال', correct: true }, { text: 'ألم في المعدة', correct: false } ] },
      { type: 'listening', spanish: 'Beba mucha agua', arabic: 'اشرب الكثير من الماء', options: [ { text: 'اشرب الكثير من الماء', correct: true }, { text: 'كل كثيرا', correct: false }, { text: 'افتح فمك', correct: false } ] },
      { type: 'true_false', spanish: 'El doctor receta un jarabe y pastillas.', arabic: 'الطبيب يصف شراب وحبوب.', isTrue: true }
    ]
};
