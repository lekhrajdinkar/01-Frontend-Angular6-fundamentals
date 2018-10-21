## Authtication - Course Project
- Add Signin and signup component

### 1. Add signIn and Signup component - template:

`signin.component.html` :
```
<form (ngSubmit)="onSignin(f)" #f="ngForm">

      <div class="form-group">
        <label for="email">Mail</label>
        <input type="email" id="email" name="email" ngModel class="form-control">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password"   name="password"  ngModel  class="form-control">
      </div>

      <button class="btn btn-primary" type="submit" [disabled]="!f.valid">Sign In</button>

    </form>
```
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/04.JPG)

### 2. Add `Auth Service` :
- signupUser
- signinUser
- logout
- getToken
- isAuthenticated

`auth.service.ts` :
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/03.JPG)
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/05.JPG)


### 3. Add component - logic/ts:
- get values from form - userid and password
- onSignIn method > Auth service > signinUser method
`signin.component.ts` :
![img](https://github.com/lekhrajdinkar/NG6/blob/master/notes/assets/auth/06.JPG)







