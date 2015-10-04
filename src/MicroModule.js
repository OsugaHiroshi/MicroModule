class MicroModule {
  constructor() {
    this._modules = {};
  }

  export(module) {
    const name = module.name || module.constructor.name;
    if (this._modules[name]) {
      console.warn(`${name} is already exsits. overwrite ${name}.`);
    }
    this._modules[name] = module;
  }

  import(name) {
    return this._modules[name];
  }
}
if (!global) window.MicroModule = new MicroModule();
