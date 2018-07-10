import { RechercheModule } from './recherche.module';

describe('RechercheModule', () => {
  let rechercheModule: RechercheModule;

  beforeEach(() => {
    rechercheModule = new RechercheModule();
  });

  it('should create an instance', () => {
    expect(rechercheModule).toBeTruthy();
  });
});
