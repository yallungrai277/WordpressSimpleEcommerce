<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v6/services/carrier_constant_service.proto

namespace GPBMetadata\Google\Ads\GoogleAds\V6\Services;

class CarrierConstantService
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();
        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Google\Api\Http::initOnce();
        \GPBMetadata\Google\Api\Annotations::initOnce();
        \GPBMetadata\Google\Api\FieldBehavior::initOnce();
        \GPBMetadata\Google\Api\Resource::initOnce();
        \GPBMetadata\Google\Api\Client::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
8google/ads/googleads/v6/resources/carrier_constant.proto!google.ads.googleads.v6.resourcesgoogle/api/resource.protogoogle/api/annotations.proto"�
CarrierConstantG
resource_name (	B0�A�A*
(googleads.googleapis.com/CarrierConstant
id (B�AH �
name (	B�AH�
country_code (	B�AH�:N�AK
(googleads.googleapis.com/CarrierConstantcarrierConstants/{criterion_id}B
_idB
_nameB
_country_codeB�
%com.google.ads.googleads.v6.resourcesBCarrierConstantProtoPZJgoogle.golang.org/genproto/googleapis/ads/googleads/v6/resources;resources�GAA�!Google.Ads.GoogleAds.V6.Resources�!Google\\Ads\\GoogleAds\\V6\\Resources�%Google::Ads::GoogleAds::V6::Resourcesbproto3
�
?google/ads/googleads/v6/services/carrier_constant_service.proto google.ads.googleads.v6.servicesgoogle/api/annotations.protogoogle/api/client.protogoogle/api/field_behavior.protogoogle/api/resource.proto"d
GetCarrierConstantRequestG
resource_name (	B0�A�A*
(googleads.googleapis.com/CarrierConstant2�
CarrierConstantService�
GetCarrierConstant;.google.ads.googleads.v6.services.GetCarrierConstantRequest2.google.ads.googleads.v6.resources.CarrierConstant">���(&/v6/{resource_name=carrierConstants/*}�Aresource_nameE�Agoogleads.googleapis.com�A\'https://www.googleapis.com/auth/adwordsB�
$com.google.ads.googleads.v6.servicesBCarrierConstantServiceProtoPZHgoogle.golang.org/genproto/googleapis/ads/googleads/v6/services;services�GAA� Google.Ads.GoogleAds.V6.Services� Google\\Ads\\GoogleAds\\V6\\Services�$Google::Ads::GoogleAds::V6::Servicesbproto3'
        , true);
        static::$is_initialized = true;
    }
}

