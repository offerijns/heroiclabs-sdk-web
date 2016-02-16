/*
 * Copyright 2016 Heroic Labs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ApiRequest} from './request';

/**
 * Get metadata for the Game identified by the API key configured in the client executing this request.
 */
export class GameGetRequest extends ApiRequest {

  /**
   * @return {PingRequest} An instance of this object.
   */
  constructor() {
    super('GET', '/v0/game');
  }
}
