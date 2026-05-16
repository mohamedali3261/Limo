# 📚 مجلد القصص (Stories)

هذا المجلد يحتوي على جميع القصص التفاعلية في التطبيق.

## 📁 البنية

```
data/stories/
├── story1.json   - رحلة ليو: الوصول إلى الضباب
├── story2.json   - الرسالة الغامضة
├── story3.json   - مفاجأة في المقهى
├── story4.json   - المفتاح المفقود
├── story5.json   - ضاع في المدينة
├── story6.json   - حفل مفاجئ
├── story7.json   - أول يوم لليو بلمحة جديدة
├── story8.json   - طلب الغداء
├── story9.json   - المقابلة الوظيفية
├── story10.json  - في محطة القطار
├── story11.json  - التسوق في أكسفورد ستريت
├── story12.json  - زيارة المتحف البريطاني
├── story13.json  - مباراة كرة قدم في بارك
├── story14.json  - في المخبز الصباحي
└── story15.json  - موعد عند الطبيب
```

## 📋 بنية ملف القصة

كل ملف قصة يحتوي على:

```json
{
  "id": 1,
  "title": "عنوان القصة",
  "description": "وصف مختصر للقصة",
  "difficulty": "easy|medium|hard",
  "thumbnail": "اسم الصورة.png",
  "xp_reward": 200,
  "scenes": [
    {
      "name": "اسم الشخصية",
      "en": "النص بالإنجليزية",
      "ar": "النص بالعربية"
    }
  ],
  "questions": [
    {
      "scene_idx": 1,
      "type": "multiple_choice|typing|dictation|sentence_scramble",
      "q": "السؤال",
      "options": ["خيار 1", "خيار 2", "خيار 3"],
      "a": "الإجابة الصحيحة"
    }
  ],
  "finalQuestions": [
    {
      "type": "نوع السؤال",
      "q": "السؤال",
      "a": "الإجابة"
    }
  ]
}
```

## 🎯 أنواع الأسئلة

### 1. Multiple Choice (اختيار من متعدد)
```json
{
  "type": "multiple_choice",
  "q": "What can Memo see?",
  "options": ["Grey sky", "Sunny beach", "Rainy city"],
  "a": "Grey sky"
}
```

### 2. Typing (كتابة الكلمة)
```json
{
  "type": "typing",
  "q": "I hope I ___ my camera.|||آمل ألا أكون قد نسيت كاميرتي.",
  "a": "forgot"
}
```

### 3. Dictation (استماع وكتابة)
```json
{
  "type": "dictation",
  "a": "What is the main purpose of your visit"
}
```

### 4. Sentence Scramble (ترتيب الجملة)
```json
{
  "type": "sentence_scramble",
  "q": "أين ستقيم خلال زيارتك؟",
  "a": "Where will you be staying during your visit"
}
```

## 📊 إحصائيات القصص

- **إجمالي القصص**: 15 قصة
- **مستوى سهل (Easy)**: 7 قصص
- **مستوى متوسط (Medium)**: 8 قصص
- **إجمالي XP**: 3,200 نقطة

## 🔄 كيفية إضافة قصة جديدة

1. أنشئ ملف `story16.json` في هذا المجلد
2. اتبع البنية الموضحة أعلاه
3. أضف معلومات القصة في `data/db/stories.json`
4. تأكد من أن `id` فريد ومتسلسل

## 📝 ملاحظات

- جميع القصص تم تحويلها من ملفات TypeScript الأصلية في `backend/data/stories/`
- يتم تحميل القصص ديناميكياً من هذه الملفات
- كل قصة مستقلة ويمكن تعديلها بدون التأثير على القصص الأخرى
