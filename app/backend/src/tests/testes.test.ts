import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import TeamsModel from '../database/models/TeamsModel';
import TeamsService from '../database/services/teamsService';
import allTeams from '../mocks/teams.mock';

chai.use(chaiHttp);

const { expect } = chai;
const teamsService = new TeamsService();

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
    })
})