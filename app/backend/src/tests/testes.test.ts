import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import TeamsModel from '../database/models/TeamsModel';
import TeamsService from '../database/services/teamsService';
import allTeams from '../mocks/teams.mock';
import MatchesModel from '../database/models/MatchesModel';
import MatchesService from '../database/services/matchesService';
import matchesInProgress from '../mocks/matches.inProgress.mock';
import LoginService from '../database/services/loginService';
import UsersModel from '../database/models/UsersModel';
import userMock from '../mocks/userRole.mock';

chai.use(chaiHttp);

const { expect } = chai;
const teamsService = new TeamsService();
const matchesService = new MatchesService();
const loginService = new LoginService();

describe('Testes dos arquivos Backend', () => {
    describe('Rota /teams', () => {
        it('getAllTeams retorna vazio', async () => {
            sinon.stub(TeamsModel, 'findAll').resolves([]);
            const teams = await teamsService.getAllTeams();
            expect(teams).to.be.an('array');
        })
        it('getAllTeams retorna todos os times', async () => {
            sinon.stub(TeamsService.prototype, 'getAllTeams').resolves(allTeams);
            const response = await chai.request(app).get('/teams');
            expect(response.body).to.be.deep.equal(allTeams);
            expect(response.status).to.be.equal(200);
        })
        it('getTeamById retorna um time', async () => {
            sinon.stub(TeamsService.prototype, 'getTeamById').resolves(allTeams[0]);
            const response = await chai.request(app).get('/teams/1');
            expect(response.body).to.be.deep.equal(allTeams[0]);
            expect(response.status).to.be.equal(200);
        })
    })

    describe('Rota /matches', () => {
        it('getAllMatches retorna lista com partidas em progresso quando receber parâmetro inProgress === true', async () => {
            sinon.stub(MatchesService.prototype, 'getAllMatches').resolves(matchesInProgress);
            const matches = await chai.request(app).get('/matches?inProgress=true');
            expect(matches.body).to.be.deep.equal(matchesInProgress);
            expect(matches.status).to.be.equal(200);
        })
    })

    describe('Rota /login', () => {
        it('Rota /rola retorna a posição do usuário', async () => {
            sinon.stub(LoginService.prototype, 'getRole').resolves(userMock);
            const response = await chai.request(app).get('/login/role');
            expect(response.body).to.be.deep.equal({ role: 'admin' });
            expect(response.status).to.be.equal(200);
        })
    })
})