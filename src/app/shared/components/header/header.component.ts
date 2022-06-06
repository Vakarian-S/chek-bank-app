import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../domain/user/services/user.service';
import { User } from '../../../domain/user/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User | undefined = undefined;
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.userService.userObservable.subscribe(() => {
      this.getCurrentUser();
    })
  }

  getCurrentUser() {
    this.user = this.userService.get();
  }

  logout() {
    this.userService.delete()
    this.user = undefined;
  }


}
