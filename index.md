---
layout: page
title: О проекте
---

{% include tabs.html tabs="ru,en" name="about" %}

<ul class="tab-content" id="tabs" data-name="about">
  <li class="tab-content-element active">

Основная цель проекта — создание комплексного квантитативного корпусно-ориентированного лексико-грамматического описания русских предлогов и предложных конструкций. Проект направлен на решение следующих основных задач:

1) описать совокупность русских предлогов как особую предложную онтологию;
2) разработать типологию описания значений предлогов и предложных конструкций;
3) собрать корпусные статистические данные об использовании предлогов в разных значениях в различных корпусах;
4) разработать схему атрибуции предлогов и в соответствии с ней описать все предлоги;
5) сформировать базу предложных конструкций с возможностью поиска по различным критериям;
6) сформировать базу предлогов с параметрами схемы атрибуции и статистическими данными с возможностью поиска по различным критериям;
7) обеспечить онлайн-доступ к указанных базам данных.

<br>

В ходе работы был составлен исчерпывающий реестр предлогов русского языка. Подавляющая их часть — это производные предлоги (более 700), зарегистрированные в 12 лексикографических источниках как лексические единицы предложного типа. Разработана схема атрибуции предлогов, на основании которой было произведено описание предлогов и сформирован Банк данных предлогов с онлайн-доступом.

Для каждого предлога в Банке предлогов содержится набор характеристик предлога (паспорт), выдаваемый пользователю по запросу в Банк. Паспорт каждого предлога включает в себя следующие характеристики:

- основная форма предлога;
- тип предлога (первообразный, производный);
- падежи зависимого от предлога слова;
- морфонологические варианты предлога (например, *об/обо*);
- значения предлога в терминах разработанной классификации предложных синтаксем;
- мотивирующее слово предлога (при его наличии);
- источники, в которых данная единица определяется как предлог.
- синонимы предлога;
- антонимы предлога;
- идиомы с предлогом (только для первообразных предлогов);
- стилистическая предрасположенность предлога.

<br>

Сущность предлагаемого нами подхода состоит в том, что в фокусе внимания находится структура семантико-синтаксических значений, выражаемых предложно-падежными конструкциями, в состав которых как единого целого входят составляющие: и собственно предлог, и оформляемая предлогом зависимая форма существительного, и знаменательное слово (чаще всего глагольной или номинативной природы), присоединяющее предложно-падежную форму. Выявление структуры предложных значений выполняется на базе статистического и семантического анализа предложных конструкций в корпусах современных русских текстов с учетом их сбалансированности, а также жанровой специфики.

Предлоги в русском языке неоднородны и разнообразны: существует небольшая группа первичных (первообразных) предлогов и большое количество вторичных (производных), причем последние мотивируются значимыми частями речи (существительными, наречиями, деепричастиями), которые могут сочетаться с первичными предлогами, формируя при этом конструкции из нескольких слов. Анализ корпусной статистики показывает, что грамматикализация структурно-семантических отношений наиболее четко проявляется в группе частотных предлогов, формирующих систему оппозиций, в которую встраиваются менее частотные первообразные и производные предлоги, причем для последних грамматикализация приводит к вытеснению их собственного лексического значения.

Дифференциация значений предложных конструкций позволила выработать трехуровневую онтологическую схему описания значений предложных конструкций. Обобщенный уровень систематизации значений по наиболее общим семантическим параметрам позволил выделить шесть базовых семантических рубрик: Локализация, Темпоратив, Объектив, Квалификатив, Квантификатив, Партитив и дополнительную седьмую «предлогообразовательную» рубрику Дериватив. Следующий уровень — более детализированные единицы в пределах рубрики, для которых мы использовали термин Г.А.Золотовой «синтаксема». В нашем понимании это предложная конструкция, семантически соотносимая с рубрикой и представляющая собой морфосинтаксическое единство главного слова, группы предлогов, каждый из которых присоединяет конкретную падежную форму существительного определенного семантического класса. Таким образом, синтаксема включает несколько предложных конструкций, синонимичных или частично синонимичных. Всего нами выделено в семи рубриках 23 синтаксемы (от 3 до 4 для каждой рубрики). Практически каждая из синтаксем имеет ряд более детализированных вариантов — субсинтаксем, которые в свою очередь могут иметь один или несколько вариантов реализации предложной конструкцией.

Разработана технология сбора информации на основе обработки корпусных данных. В результате получены частотные характеристики употребления всех первообразных и большого числа производных предлогов. Разработана методология выявления степени «предложности» таких единиц. На основе морфологически размеченных корпусов сформирован систематизированный реестр конструкций, описанных в терминах синтаксем.

Разработано программное обеспечение, способное извлекать из текста предложные конструкции при помощи синтаксического парсинга текста с последующей классификацией индивидуальных предложных конструкций в соответствии с семантическими типами (синтаксемами). На вход парсеру подается неструктурированный текст, а на выходе вычисляется поддерево — предложная конструкция. Полученный текст предложной конструкции предобрабатывается, а затем подается на вход нейронной сети, обученной на задачу множественной классификации. Нейронная сеть выводит вероятности принадлежности конструкции семантическому типу, из которых выбирается самый вероятный.

На основе корпусно-ориентированных методов и разработанных инструментов был сформирован Банк предложных конструкций с онлайн-доступом. Пользователю предлагается выбрать из выпадающего списка значения для следующих полей: 1) предлог; 2) синтаксема; 3) лемма зависимого слова; 4) падеж зависимого слова; 5) часть речи зависимого слова; 6) лемма управляющего слова; 6) часть речи управляющего слова. Пользователь получает все соответствующие запросу конструкции, а также возможность сохранить их в виде отдельного файла. Также работает режим, позволяющий из введенного текста выделять предложные конструкции и определять их значение а терминах синтаксем.

Банк предлогов и Банк предложных конструкций доступны на сайте [www.predlogy.ru](https://www.predlogy.ru/). Мы продолжаем работу над ними. Следите за обновлениями.

  </li>

  <li class="tab-content-element">

The aim of our project is to develop a complex quantitative corpus-based description of Russian prepositional structures in lexical and grammatical terms. The work may be divided into the following tasks:

1) to describe the whole set of Russian prepositions as a coherent system;
2) to develop the typology of the prepositional meanings and prepositional structures description;
3) to collect corpus data on each preposition behavior actualizing each of its meanings;
4) to design and elaborate the attribution scheme for prepositions and provide a description of each preposition in these terms;
5) to build a database of prepositional structures allowing to make queries by various criteria;
6) to build a database of prepositions based on the attribution schema parameters and statistical data, allowing to make queries by various criteria;
7) to provide online access to the above-mentioned databases.

<br>

In the course of the work, we compiled an exhaustive list of prepositions of the Russian language. Most of them (more than 700) are derived (secondary) prepositions, which were found in 12 lexicographic sources as lexical units of the prepositional type. We created an attribution schema and applied it to describe all prepositions in the same way, which was implemented in the data bank with online access. For each preposition, the Bank of Prepositions contains a set of its characteristics in the form of a “passport,” provided to the user upon request. The passport of each preposition includes the following characteristics:

- the base form of the preposition;
- type of preposition (primary, derivative);
- cases of the dependent word;
- morphonological variants of the preposition, for example *об/обо* ‘about’;
- the meanings of the preposition in terms of our classification of prepositional syntaxemes;
- the base word of the preposition (if any);
- sources that define this unit as a preposition;
- synonyms;
- antonyms;
- idioms containing the preposition (only for primitive prepositions);
- stylistic predisposition of the preposition.

<br>

The essential idea of our approach is that we focus on the structure of semantic—syntactic meanings, expressed by prepositional—nominal structures comprising the following components: the preposition itself, the dependent noun form defined by this preposition, and the headword (usually verbal) which attaches the prepositional phrase. The identification of the structure of the prepositional meaning is performed based on statistical and semantic analysis of prepositional structures in balanced corpora that are composed of modern Russian texts, taking into account their genre peculiarity as well.

Russian prepositions are diverse and heterogeneous. There is a small group of primary prepositions and a great number of secondary (derivative) prepositions, the latter being motivated by the content parts of speech (nouns, adverbs, participles), which may combine with the primary ones to form multi-word structures. The analysis of corpus statistics shows that the process of grammaticalization of structural semantic relations is most manifested in the group of frequent prepositions, which form a kind of opposition system. The less frequent primary and derivative prepositions are integrated into that system, with the latter ones losing their lexical meaning due to grammaticalization.

The analysis and differentiation of the meanings of prepositional phrases created a foundation of the developed three-level ontological scheme for the investigation and description of prepositional phrases. The generalized level of systematization of meanings according to the most general semantic parameters made it possible to distinguish six basic semantic groups: Location, Tempus, Object, Quality, Partitive, Quantity, and a separate one, Derivative. Next, the more detailed level is based on the term “syntaxeme” as defined in the *Syntactic Dictionary* by G.A. Zolotova. We understand a syntaxeme as a prepositional phrase in association with a semantic label that represents a certain unity of the morphosyntactic and lexical properties of the head word that joins the prepositional phrase, groups of prepositions, each of which joins a specific case form of a noun belonging to a certain semantic class. Thus, the syntaxeme includes several prepositional phrases, synonymous or partially synonymous. In total, we have identified 23 syntaxemes in seven supergroups (from 3 to 4 for each). Most syntaxemes can be analyzed further into more detailed semantic clusters—subsyntaxemes, which, in turn, can have one or more alternatives of the prepositional implementation.

The technological procedure for collecting information based on corpus data processing has been developed and applied, which allowed to get frequency features (statistical data) on the use of all primary and a large number of secondary (derivative) prepositions. The methodology for identifying the degree of “prepositionality” of such units was proposed. Morphological annotation of the corpora allowed for the creation of a systematized register of constructions described in terms of syntaxemes.

The software for extracting prepositional phrases from the raw text has been developed. It is based on syntactic parsing with the subsequent classification of individual prepositional constructions in accordance with semantic types (syntaxemes). The parser gets unstructured text as input, then a subtree is calculated for the output, which is a prepositional phrase. The resulting prepositional phrase is preprocessed to become input for the neural network trained for the multiple classification problem. The neural network calculates the probabilities of the construction belonging to the semantic type, and the most probable one is selected.

Based on the corpus-oriented methods and the tools developed, we also built the Bank of Prepositional Phrases with online access. Here, the user is asked to select from the drop-down list the values ​​for the following fields: 1) preposition; 2) syntaxeme; 3) the lemma of the dependent word; 4) the case of the dependent word; 5) the part of speech of the dependent word; 6) the host word lemma; 6) the part of speech of the control word. The result contains all phrases corresponding to the request, which can be downloaded as a file. Finally, a separate tool allows extracting prepositional phrases from any text and determine their meaning in terms of syntaxemes.

The Bank of Prepositions and the Bank of Prepositional Phrases are available at [www.predlogy.ru](https://www.predlogy.ru/). We continue our work on the project. Stay tuned for updates.

  </li>
</ul>
