import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss'],
})
export class AddComponent {
	taskForm: FormGroup = this.formBuilder.group({
		task: '',
	});
	taskLists: any[] = [];

	constructor(private formBuilder: FormBuilder) {}

	onSubmit(): void {
		console.warn('task has been submitted', this.taskForm.value);
		this.taskLists.push(this.taskForm.value);
		this.taskForm.reset();
	}
}
