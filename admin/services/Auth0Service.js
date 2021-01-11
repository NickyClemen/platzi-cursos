import auth0 from 'auth0-js';
import scopesArray from '../utils/scopesArrays';
import { config } from '../config/client';

export default class Auth0Service {
    auth0 = new auth0.WebAuth({
        domain: config.auth0Domain,
        clientID: config.auth0ClientId,
        audience: config.auth0ApiAudience,
        redirectUri: config.auth0RedirectUri,
        responseType: 'token id_token',
        scope: scopesArray.join(' '),
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('profile');
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((error, authResult) => {
                if(error) {
                    reject(error);
                }

                if(authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve(authResult.accessToken);
                }
            });
        }).then(accessToken => this.handleUserInfo(accessToken));
    }

    setSession(authResult) {
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    handleUserInfo(accessToken) {
        return new Promise((resolve, reject) => {
            this.auth0.client.userInfo(accessToken, (error, profile) => {
                if(error) {
                    reject(error);
                }

                if(profile) {
                    this.setProfile(profile);
                    resolve(profile);
                }
            })
        });
    }

    setProfile(profile) {
        localStorage.setItem('profile', JSON.stringify(profile));
    }

    getProfile() {
        const profile = localStorage.getItem('profile');
        return profile ? JSON.parse(localStorage.profile) : {};
    }
}