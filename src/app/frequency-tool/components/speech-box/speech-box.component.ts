import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Word } from '../../../shared/models/word';
import { defaultSpeeches } from '../../../shared/speeches/speeches';
import { TrailingSpacePipe } from 'src/app/shared/pipes/trailing-space.pipe';

@Component({
    selector: 'speech-box',
    animations: [
        trigger('speechBoxOopenClose', [
            state('open', style({
                height: '100%',
                opacity: 1,
            })),
            state('closed', style({
                height: '0px',
                opacity: 0,
            })),
            transition('open => closed', [
                animate('0.3s')
            ]),
            transition('closed => open', [
                animate('0.3s')
            ]),
        ]),
    ],
    templateUrl: './speech-box.component.html',
    styleUrls: ['./speech-box.component.css'],
    providers: [
        TrailingSpacePipe,
    ],
})
export class SpeechBoxComponent implements OnInit {

    speech: string;
    displaySpeech: string;
    speechForm: FormGroup;
    words: Word[] = [];
    frequentlyUsedWords = [];
    exclusionList = [''];
    FREQUENCY_THRESHHOLD = 5;
    speechBoxIsOpen = true;

    colorCounter = 0;

    colors = [
        '#E84855',
        '#403F4C',
        '#F9DC5C',
        '#EFBCD5',
        '#3185FC',
    ];

    constructor(private fb: FormBuilder, private trailingSpace: TrailingSpacePipe) { }

    ngOnInit() {
        this.speechForm = this.fb.group({
            speechInput: [''],
        });
    }

    doUpdateDefaultSpeech(speechTitle: string) {
        this.speechForm.controls['speechInput'].setValue(defaultSpeeches[speechTitle]);
        this.didInputSpeech();
    }

    doClearSpeechBox() {
        this.speechForm.controls['speechInput'].setValue('');
        this.didInputSpeech();
    }

    didInputSpeech() {
        this.resetColorCounter();
        this.speech = this.speechForm.get('speechInput').value as string;
        this.displaySpeech = this.trailingSpace.transform(this.speech);

        this.speech = this.speech.replace('\n', ' ');
        const speechArr = this.speech.split(' ');
        const wordCount = {};

        speechArr.forEach((word) => {
            if (!this.exclusionList.includes(word) && wordCount[word] == null) {
                wordCount[word] = 1;
            } else if (!this.exclusionList.includes(word)) {
                wordCount[word]++;
            }

        });

        this.populateWordsArray(wordCount);

        console.log(this.words);

    }

    resetColorCounter() {
        this.colorCounter = 0;
    }

    doToggleSpeechInputBox() {
        this.speechBoxIsOpen = !this.speechBoxIsOpen;
    }

    doToggleHighlightOccurances(wordClicked: Word) {

        const searchCriteria = '<span style="border-radius: 5px; padding: 0 5px; color: #fff; background:' + wordClicked.colorClass + '">' + wordClicked.word + '</span> ';
        console.log(`Searching for '${searchCriteria}' `);

        const isHighlighted = this.displaySpeech.search(searchCriteria);

        let newWord: string;
        let replace: string;

        if (isHighlighted === -1) {
            replace = wordClicked.word + ' ';
            newWord = '<span style="border-radius: 5px; padding: 0 5px; color: #fff; background:' + this.colors[this.colorCounter] + '">' + wordClicked.word + '</span> ';
            console.log(`replacing '${replace}' with '${newWord}'`);
        } else {
            replace = '<span style="border-radius: 5px; padding: 0 5px; color: #fff; background:' + wordClicked.colorClass + '">' + wordClicked.word + '</span>';
            newWord = wordClicked.word;
            console.log(`replacing '${replace}' with '${newWord}'`);
        }

        if (isHighlighted !== -1) {
            const re = new RegExp(replace, 'gi');
            this.displaySpeech = this.displaySpeech.replace(re, newWord);

            this.frequentlyUsedWords.map(w => {
                if (w.word === wordClicked.word) {
                    w.colorClass = null;
                }
            });

            this.colorCounter--;
        } else if (this.colorCounter < this.colors.length) {
            const re = new RegExp(replace, 'gi');
            this.displaySpeech = this.displaySpeech.replace(re, newWord);

            this.frequentlyUsedWords.map((w) => {
                if (w.word === wordClicked.word) {
                    w.colorClass = this.colors[this.colorCounter];
                }
            });

            this.colorCounter++;
        }
    }

    populateWordsArray(wordCount: {}) {
        this.words = Object.keys(wordCount).map((key) => {
            return {
                word: key,
                frequency: wordCount[key],
            };
        });

        this.frequentlyUsedWords = this.words.filter((w) => w.frequency >= this.FREQUENCY_THRESHHOLD);

        this.frequentlyUsedWords.sort((a, b) => {
            return b.frequency - a.frequency;
        });
    }
}
