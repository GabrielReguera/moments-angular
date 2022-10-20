import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css'],
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnText: string = 'Edit';

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private router: Router,
    private message: MessagesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.body;
    });
  }

  async editHandler(momentData: Moment) {
    if (momentData) {
      await this.momentService.updateMoment(momentData).subscribe();

      this.message.add("moment successfully edited");

      this.router.navigate(['/']);
    }
  }
}
