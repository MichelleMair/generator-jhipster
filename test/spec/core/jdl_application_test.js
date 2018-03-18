/**
 * Copyright 2013-2018 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see http://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const JDLApplication = require('../../../lib/core/jdl_application');

describe('JDLApplication', () => {
  describe('::new', () => {
    let jdlApplicationConfig = null;

    before(() => {
      const jdlApplication = new JDLApplication({ config: { jhipsterVersion: '4.9.0' } });
      jdlApplicationConfig = jdlApplication.config;
    });

    context('without specifying special options', () => {
      it('uses default values', () => {
        expect(jdlApplicationConfig.languages.has('en') && jdlApplicationConfig.languages.has('fr')).to.be.true;
        expect(jdlApplicationConfig.jwtSecretKey).not.to.be.undefined;
        expect(jdlApplicationConfig.testFrameworks).not.to.be.undefined;
        delete jdlApplicationConfig.languages;
        delete jdlApplicationConfig.jwtSecretKey;
        delete jdlApplicationConfig.testFrameworks;

        expect(jdlApplicationConfig).to.deep.equal({
          applicationType: 'monolith',
          authenticationType: 'jwt',
          baseName: 'jhipster',
          buildTool: 'maven',
          cacheProvider: 'ehcache',
          clientFramework: 'angularX',
          clientPackageManager: 'yarn',
          databaseType: 'sql',
          devDatabaseType: 'h2Disk',
          enableHibernateCache: true,
          enableSocialSignIn: false,
          enableSwaggerCodegen: false,
          enableTranslation: true,
          jhiPrefix: 'jhi',
          jhipsterVersion: '4.9.0',
          messageBroker: false,
          nativeLanguage: 'en',
          packageFolder: 'com/mycompany/myapp',
          packageName: 'com.mycompany.myapp',
          prodDatabaseType: 'mysql',
          searchEngine: false,
          serverPort: '8080',
          serviceDiscoveryType: false,
          skipClient: false,
          skipServer: false,
          skipUserManagement: false,
          useSass: false,
          websocket: false,
        });
      });
    });
    context('when choosing session as authentication type', () => {
      before(() => {
        jdlApplicationConfig = new JDLApplication(
          { config: { jhipsterVersion: '4.9.0', authenticationType: 'session' } }
        ).config;
      });
      it('sets the rememberMeKey value', () => {
        expect(jdlApplicationConfig.rememberMeKey).not.to.be.undefined;
        expect(jdlApplicationConfig.jwtSecretKey).to.be.undefined;
      });
    });
    context('when choosing jwt as authentication type', () => {
      before(() => {
        jdlApplicationConfig = new JDLApplication(
          { config: { jhipsterVersion: '4.9.0', authenticationType: 'jwt' } }
        ).config;
      });
      it('sets the jwtSecretKey value', () => {
        expect(jdlApplicationConfig.rememberMeKey).to.be.undefined;
        expect(jdlApplicationConfig.jwtSecretKey).not.to.be.undefined;
      });
    });
    context('when choosing microservice as app type', () => {
      before(() => {
        jdlApplicationConfig = new JDLApplication(
          { config: { jhipsterVersion: '4.9.0', applicationType: 'microservice' } }
        ).config;
      });
      it('sets the jwtSecretKey value', () => {
        expect(jdlApplicationConfig.rememberMeKey).to.be.undefined;
        expect(jdlApplicationConfig.jwtSecretKey).not.to.be.undefined;
      });
    });
  });
  describe('#toString', () => {
    let jdlApplication = null;

    before(() => {
      jdlApplication = new JDLApplication({ config: { jhipsterVersion: '4.9.0', path: '../../' } });
      delete jdlApplication.config.jwtSecretKey;
    });

    it('stringifies the application object', () => {
      expect(jdlApplication.toString()).to.eq(`application {
  config {
    applicationType monolith
    clientPackageManager yarn
    databaseType sql
    devDatabaseType h2Disk
    enableHibernateCache true
    enableSocialSignIn false
    enableSwaggerCodegen false
    enableTranslation true
    jhiPrefix jhi
    languages en,fr
    messageBroker false
    nativeLanguage en
    packageName com.mycompany.myapp
    packageFolder com/mycompany/myapp
    prodDatabaseType mysql
    searchEngine false
    serviceDiscoveryType false
    skipClient false
    skipServer false
    testFrameworks
    useSass false
    websocket false
    jhipsterVersion 4.9.0
    path ../../
    authenticationType jwt
    baseName jhipster
    buildTool maven
    cacheProvider ehcache
    clientFramework angularX
    serverPort 8080
    skipUserManagement false
  }
}`);
    });
  });
  describe('::isValid', () => {
    context('when checking the validity of an invalid object', () => {
      context('because it is nil', () => {
        it('returns false', () => {
          expect(JDLApplication.isValid()).to.be.false;
        });
      });
      context('when not having a config attribute', () => {
        it('returns false', () => {
          expect(JDLApplication.isValid({})).to.be.false;
        });
      });
      context('when having translations', () => {
        context('and no native language', () => {
          it('returns false', () => {

          });
        });
        context('and a native language', () => {
          it('returns true', () => {

          });
        });
      });
      context('when having jwt as authentication type', () => {
        context('and no JWT secret key', () => {
          it('returns false', () => {

          });
        });
        context('and a JWT secret key', () => {
          it('returns true', () => {

          });
        });
      });
    });
  });
});
