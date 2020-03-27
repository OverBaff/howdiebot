# HowdieBot
Бот для сервера Хауди Хо

## Содержание
* [Основное](#основное)
* [Установка](#установка)
* [Технологии](#технологии)
* [Помощь в разработке](#помощь-в-разработке)

## Основное
Бот разрабатывается для [Discord-сервера](https://discord.gg/27ecwHg) ютубера [Хауди Хо](https://www.youtube.com/channel/UC7f5bVxWsm3jlZIPDzOMcAg).
Имеет простую экономику для интерактива с участниками. Создатели: KislBall#9017 и RE$PECT#1569

## Установка
Для работы необходим node.js >= 12 и пакетный менеджер npm. Затем, склонируйте этот репозиторий к себе:
```
git clone https://github.com/kislball/howdiebot/
```

Установите все зависимости:
```
npm install
```  

Настройте `.env`: скопируйте его шаблон из `.env.example`
Значения полей: 
```
TOKEN=токен бота c discordapp.com/developers
PREFIX=префикс бота
MONEY_DB=uri базы данных для валюты
REPUTATION_DB=uri базы данных для репутации
```

## Технологии
* [node.js](https://nodejs.org/)
* [discord.js](https://discord.js.org/)
* [git](https://git-scm.com)

## Помощь в разработке
Если вы хотите помочь нам, то создайте отдельный Pull request, чтобы мы его рассмотрели!
