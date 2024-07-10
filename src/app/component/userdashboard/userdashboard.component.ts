import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'src/app/models/auth-service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  location: string = '';
  loginTime: string = '';
  task: string = '';
  timestamp: string = '';
  currentemail: string='';


  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.updateTimestamp();
    setInterval(() => this.updateTimestamp(), 1000);
  }

  addTask(): void {
    const taskData = {
      username: this.username,
      email : this.email,
      loginTime: this.loginTime,
      task: this.task
    };

    this.userService.addTask(taskData).subscribe(response => {
      console.log('Task added successfully:', response);
      alert('Task added successfully');
      console.log(taskData);
      this.task = '';
    });
  }

  updateTimestamp(): void {
    const now = new Date();
    this.timestamp = now.toLocaleString();
  }

  onLogout(): void {
   this.email =this.authService.getEmail();           
  const logoutData = {
    email: this.email,
    logouttime: this.timestamp,
  };

  this.userService.logout(logoutData).subscribe(response => {
    alert ("Are u sure logout");
    console.log('Logout successfully', response);
    this.router.navigate(['/userlogin']);
  }, error => {
    console.error('Logout failed', error);
    alert('Logout failed. Please try again.');
  });
}
}