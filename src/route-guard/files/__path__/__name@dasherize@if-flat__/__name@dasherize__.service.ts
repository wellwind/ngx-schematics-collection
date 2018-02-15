<% if(type === 'CanActivate') { %>import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class <%= classify(name) %>Service implements CanActivate {
  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }
}<% } else if(type === 'CanActivateChild') { %>import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
  
@Injectable()
export class <%= classify(name) %>Service implements CanActivateChild {
  constructor() {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}<% } else if(type === 'CanDeactivate') { %>import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class <%= classify(name) %>Service implements CanDeactivate<any> {
  constructor() {}

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }
}<% } else if(type === 'Resolve') { %>import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class <%= classify(name) %>Service implements Resolve<any> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return null;
  }
}<% } else if(type === 'CanLoad') { %>import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class <%= classify(name) %>Service implements CanLoad {
  constructor() {}

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }
}<% } %>
