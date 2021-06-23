# EMOJI PICKER

## VK test app 2021([vkapp.stuvars.com](https://vkapp.stuvars.com))

#### Небольшое веб-приложение: Форма ввода сообщений с возможностью выбора эмоджи и подсветкой ссылок, упоминаний и хештегов.

---

### Используемые технологии:

- ReactJS
- TypeScript
- Snowpack
- Docker

---

### Что было реализовано:

- Возможность добавления эмоджи в любое место в тексте
- Сохранение последних `25` использованных эмоджи
- Перенос строки сочитанием клавиш `Ctrl+Enter`
- Подсветка ссылок, упоминаний, хештогов и емайлов в уже написанных сообщениях

---

### Протестировать приложение можно здесь: [vkapp.stuvars.com](https://vkapp.stuvars.com)

---

### Запуск через Docker:

```bash
docker build -t vk_test_app:vk_app .
docker run -dp 127.0.0.1:<your port>:8080 vk_test_app:vk_app
```
