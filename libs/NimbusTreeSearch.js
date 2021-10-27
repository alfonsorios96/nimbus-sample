export class NimbusTreeSearch {
  constructor(root, navigationHandlers){
    this.state = {
      root
    };
    this.isSearchOver = false;
    this._analyzeHandler = () => {};
    this._getChildsHandler = () => {};
    this.results = [];
    this.setHandlers(navigationHandlers);
  };

  analyze(node){
    this.results = [
      ...this.results,
      ...this._analyzeHandler(node, this.endSearch.bind(this))
    ];
  };

  getChilds(node){
    return this._getChildsHandler(node);
  };

  setHandlers(handlers){
    this._analyzeHandler = handlers.analyze ? handlers.analyze : () => {};
    this._getChildsHandler = handlers.getChilds ? handlers.getChilds : () => {};
  };

  initSearch(){
    this.analyze(this.state.root);
    if (!this.isSearchOver) {
      const rootChilds = this.getChilds(this.state.root);
      for (const child of rootChilds) {
        this.analyze(child);
        this.searchAndAnalyzeChilds(this.getChilds(child));
      };
    };
  };

  searchAndAnalyzeChilds(childs){
    for (const child of childs) {
      if(this.isSearchOver) return;
      this.analyze(child);
      const grandChilds = this.getChilds(child);
      this.searchAndAnalyzeChilds(grandChilds);
    };
  };

  endSearch(){
    this.isSearchOver = true;
  };

};