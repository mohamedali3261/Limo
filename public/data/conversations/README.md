# محادثات اللغة الإنجليزية

## البنية الجديدة

تم تقسيم ملف البيانات الرئيسي إلى ملفات منفصلة لكل محادثة:

### الملفات:

1. **index.json** - فهرس جميع المحادثات (يحتوي على معلومات أساسية فقط)
2. **situation1.json** - التعارف (Meeting Someone)
3. **situation2.json** - في السوق (At the Market)
4. **situation3.json** - عند الطبيب (At the Doctor)
5. **situation4.json** - في الفندق (At the Hotel)
6. **situation5.json** - في المطعم (At the Restaurant)
7. **situation6.json** - في المطار (At the Airport)
8. **situation7.json** - في المكتبة (At the Library)
9. **situation8.json** - في محطة القطار (At the Train Station)
10. **situation9.json** - في الصيدلية (At the Pharmacy)

## بنية كل ملف محادثة

```json
{
  "id": 1,
  "title": "التعارف",
  "titleEn": "Meeting Someone",
  "icon": "👋",
  "color": "blue",
  "difficulty": "easy",
  "dialogues": [
    {
      "speaker": "Ahmed",
      "gender": "male",
      "en": "Hello! My name is Ahmed. What's your name?",
      "ar": "مرحباً! اسمي أحمد. ما اسمك؟"
    }
    // ... المزيد من الحوارات
  ],
  "quiz": {
    "title": "اختبار التعارف",
    "questions": [
      {
        "id": 1,
        "question": "What is Ahmed's name?",
        "questionAr": "ما اسم أحمد؟",
        "options": ["Ahmed", "Ali", "Omar", "Karim"],
        "correctAnswer": 0
      }
      // ... المزيد من الأسئلة
    ]
  }
}
```

## المميزات الجديدة

### 1. التشغيل التلقائي للمحادثة
- عند الضغط على "التشغيل التلقائي" تبدأ المحادثة من البداية
- كل جملة تنتهي، الجملة التالية تبدأ مباشرة
- عند انتهاء المحادثة، يتوقف التشغيل التلقائي تلقائياً

### 2. Scroll التلقائي
- عند تشغيل أي جملة، يتم scroll تلقائي للبوكس بتاعها

### 3. اختبار لكل محادثة
- كل محادثة لها اختبار خاص بها
- الاختبار يحتوي على 4 أسئلة متعددة الخيارات
- يتم عرض النتيجة والإجابات الصحيحة

### 4. اختبار شامل
- اختبار يجمع جميع الأسئلة من جميع المحادثات
- الأسئلة يتم ترتيبها عشوائياً
- يتم عرض النتيجة النهائية والتقييم

## كيفية الإضافة

لإضافة محادثة جديدة:

1. أنشئ ملف جديد `situationX.json` في المجلد
2. أضف البيانات بنفس البنية أعلاه
3. أضف المحادثة في `index.json`

## الألوان المتاحة

- blue (أزرق)
- green (أخضر)
- red (أحمر)
- purple (بنفسجي)
- orange (برتقالي)
- cyan (سماوي)
- indigo (نيلي)
- slate (رمادي)
- rose (وردي)

## مستويات الصعوبة

- easy (سهل)
- medium (متوسط)
- hard (صعب)
