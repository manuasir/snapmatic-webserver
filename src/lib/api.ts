'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

class API {
  _storage: multer.StorageEngine;
  _callback: Function;
  _upload: multer.Instance;
  _app: express.Application;

  /**
   * Constructor
   * @param {Function} callback Function to invoke when a request is received.
   */
  constructor(callback: Function) {
    this._storage = multer.memoryStorage();
    this._callback = callback;
    this._upload = multer({ storage: this._storage });
    this._app = express(); // creates http server
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({ extended: true }));
  }

  // Storage getter
  get storage(): multer.StorageEngine {
    return this._storage;
  }

  // Callback getter
  get callback(): Function {
    return this._callback;
  }

  // Upload getter
  get upload(): multer.Instance {
    return this._upload;
  }

  // App getter
  get app(): express.Application {
    return this._app;
  }

  /**
   * Initializes the API service
   */
  start(): void {
    // Server listening on 3000 port.
    this.app.listen(process.env.PORT || 3000);

    // POST /picture
    this.app.post(
      '/picture',
      this.upload.single('file'),
      (req: express.Request, res: express.Response) => this.callback(req, res)
    );
  }
}

export { API };
