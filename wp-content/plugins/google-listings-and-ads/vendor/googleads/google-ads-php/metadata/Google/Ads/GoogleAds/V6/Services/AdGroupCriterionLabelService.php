<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v6/services/ad_group_criterion_label_service.proto

namespace GPBMetadata\Google\Ads\GoogleAds\V6\Services;

class AdGroupCriterionLabelService
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
        \GPBMetadata\Google\Protobuf\Any::initOnce();
        \GPBMetadata\Google\Rpc\Status::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
@google/ads/googleads/v6/resources/ad_group_criterion_label.proto!google.ads.googleads.v6.resourcesgoogle/api/resource.protogoogle/api/annotations.proto"�
AdGroupCriterionLabelM
resource_name (	B6�A�A0
.googleads.googleapis.com/AdGroupCriterionLabelR
ad_group_criterion (	B1�A�A+
)googleads.googleapis.com/AdGroupCriterionH �:
label (	B&�A�A 
googleads.googleapis.com/LabelH�:��A�
.googleads.googleapis.com/AdGroupCriterionLabelVcustomers/{customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}B
_ad_group_criterionB
_labelB�
%com.google.ads.googleads.v6.resourcesBAdGroupCriterionLabelProtoPZJgoogle.golang.org/genproto/googleapis/ads/googleads/v6/resources;resources�GAA�!Google.Ads.GoogleAds.V6.Resources�!Google\\Ads\\GoogleAds\\V6\\Resources�%Google::Ads::GoogleAds::V6::Resourcesbproto3
�
Ggoogle/ads/googleads/v6/services/ad_group_criterion_label_service.proto google.ads.googleads.v6.servicesgoogle/api/annotations.protogoogle/api/client.protogoogle/api/field_behavior.protogoogle/api/resource.protogoogle/rpc/status.proto"p
GetAdGroupCriterionLabelRequestM
resource_name (	B6�A�A0
.googleads.googleapis.com/AdGroupCriterionLabel"�
#MutateAdGroupCriterionLabelsRequest
customer_id (	B�AY

operations (2@.google.ads.googleads.v6.services.AdGroupCriterionLabelOperationB�A
partial_failure (
validate_only ("�
AdGroupCriterionLabelOperationJ
create (28.google.ads.googleads.v6.resources.AdGroupCriterionLabelH 
remove (	H B
	operation"�
$MutateAdGroupCriterionLabelsResponse1
partial_failure_error (2.google.rpc.StatusT
results (2C.google.ads.googleads.v6.services.MutateAdGroupCriterionLabelResult":
!MutateAdGroupCriterionLabelResult
resource_name (	2�
AdGroupCriterionLabelService�
GetAdGroupCriterionLabelA.google.ads.googleads.v6.services.GetAdGroupCriterionLabelRequest8.google.ads.googleads.v6.resources.AdGroupCriterionLabel"P���:8/v6/{resource_name=customers/*/adGroupCriterionLabels/*}�Aresource_name�
MutateAdGroupCriterionLabelsE.google.ads.googleads.v6.services.MutateAdGroupCriterionLabelsRequestF.google.ads.googleads.v6.services.MutateAdGroupCriterionLabelsResponse"_���@";/v6/customers/{customer_id=*}/adGroupCriterionLabels:mutate:*�Acustomer_id,operationsE�Agoogleads.googleapis.com�A\'https://www.googleapis.com/auth/adwordsB�
$com.google.ads.googleads.v6.servicesB!AdGroupCriterionLabelServiceProtoPZHgoogle.golang.org/genproto/googleapis/ads/googleads/v6/services;services�GAA� Google.Ads.GoogleAds.V6.Services� Google\\Ads\\GoogleAds\\V6\\Services�$Google::Ads::GoogleAds::V6::Servicesbproto3'
        , true);
        static::$is_initialized = true;
    }
}

