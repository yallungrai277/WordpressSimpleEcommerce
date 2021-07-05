<?php
// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
namespace Google\Ads\GoogleAds\V6\Services;

/**
 * Proto file describing the Conversion Action service.
 *
 * Service to manage conversion actions.
 */
class ConversionActionServiceGrpcClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * Returns the requested conversion action.
     * @param \Google\Ads\GoogleAds\V6\Services\GetConversionActionRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetConversionAction(\Google\Ads\GoogleAds\V6\Services\GetConversionActionRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.ads.googleads.v6.services.ConversionActionService/GetConversionAction',
        $argument,
        ['\Google\Ads\GoogleAds\V6\Resources\ConversionAction', 'decode'],
        $metadata, $options);
    }

    /**
     * Creates, updates or removes conversion actions. Operation statuses are
     * returned.
     * @param \Google\Ads\GoogleAds\V6\Services\MutateConversionActionsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function MutateConversionActions(\Google\Ads\GoogleAds\V6\Services\MutateConversionActionsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.ads.googleads.v6.services.ConversionActionService/MutateConversionActions',
        $argument,
        ['\Google\Ads\GoogleAds\V6\Services\MutateConversionActionsResponse', 'decode'],
        $metadata, $options);
    }

}
