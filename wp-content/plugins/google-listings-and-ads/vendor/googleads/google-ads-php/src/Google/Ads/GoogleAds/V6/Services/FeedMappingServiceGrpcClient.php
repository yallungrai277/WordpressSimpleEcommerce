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
 * Proto file describing the FeedMapping service.
 *
 * Service to manage feed mappings.
 */
class FeedMappingServiceGrpcClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * Returns the requested feed mapping in full detail.
     * @param \Google\Ads\GoogleAds\V6\Services\GetFeedMappingRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function GetFeedMapping(\Google\Ads\GoogleAds\V6\Services\GetFeedMappingRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.ads.googleads.v6.services.FeedMappingService/GetFeedMapping',
        $argument,
        ['\Google\Ads\GoogleAds\V6\Resources\FeedMapping', 'decode'],
        $metadata, $options);
    }

    /**
     * Creates or removes feed mappings. Operation statuses are
     * returned.
     * @param \Google\Ads\GoogleAds\V6\Services\MutateFeedMappingsRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     * @return \Grpc\UnaryCall
     */
    public function MutateFeedMappings(\Google\Ads\GoogleAds\V6\Services\MutateFeedMappingsRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/google.ads.googleads.v6.services.FeedMappingService/MutateFeedMappings',
        $argument,
        ['\Google\Ads\GoogleAds\V6\Services\MutateFeedMappingsResponse', 'decode'],
        $metadata, $options);
    }

}
