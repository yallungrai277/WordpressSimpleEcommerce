<?php

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Google\Ads\GoogleAds\Util\V6;

use Google\Ads\GoogleAds\V6\Enums\AssetFieldTypeEnum\AssetFieldType;
use Google\Ads\GoogleAds\V6\Enums\ExtensionTypeEnum\ExtensionType;
use Google\Ads\GoogleAds\V6\Services\AccountBudgetProposalServiceClient;
use Google\Ads\GoogleAds\V6\Services\AccountBudgetServiceClient;
use Google\Ads\GoogleAds\V6\Services\AccountLinkServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupAdLabelServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupAdServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupAudienceViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupBidModifierServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupCriterionLabelServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupCriterionServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupCriterionSimulationServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupExtensionSettingServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupFeedServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupLabelServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdGroupSimulationServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdParameterServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdScheduleViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\AdServiceClient;
use Google\Ads\GoogleAds\V6\Services\AgeRangeViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\AssetServiceClient;
use Google\Ads\GoogleAds\V6\Services\BatchJobServiceClient;
use Google\Ads\GoogleAds\V6\Services\BiddingStrategyServiceClient;
use Google\Ads\GoogleAds\V6\Services\BillingSetupServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignAssetServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignAudienceViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignBidModifierServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignBudgetServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignCriterionServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignCriterionSimulationServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignDraftServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignExperimentServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignExtensionSettingServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignFeedServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignLabelServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignServiceClient;
use Google\Ads\GoogleAds\V6\Services\CampaignSharedSetServiceClient;
use Google\Ads\GoogleAds\V6\Services\CarrierConstantServiceClient;
use Google\Ads\GoogleAds\V6\Services\ChangeStatusServiceClient;
use Google\Ads\GoogleAds\V6\Services\ClickViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\CombinedAudienceServiceClient;
use Google\Ads\GoogleAds\V6\Services\ConversionActionServiceClient;
use Google\Ads\GoogleAds\V6\Services\CurrencyConstantServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerClientLinkServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerClientServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerExtensionSettingServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerFeedServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerLabelServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerManagerLinkServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerNegativeCriterionServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerUserAccessInvitationServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomerUserAccessServiceClient;
use Google\Ads\GoogleAds\V6\Services\CustomInterestServiceClient;
use Google\Ads\GoogleAds\V6\Services\DetailPlacementViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\DisplayKeywordViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\DomainCategoryServiceClient;
use Google\Ads\GoogleAds\V6\Services\ExpandedLandingPageViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\ExtensionFeedItemServiceClient;
use Google\Ads\GoogleAds\V6\Services\FeedItemServiceClient;
use Google\Ads\GoogleAds\V6\Services\FeedItemSetLinkServiceClient;
use Google\Ads\GoogleAds\V6\Services\FeedItemSetServiceClient;
use Google\Ads\GoogleAds\V6\Services\FeedItemTargetServiceClient;
use Google\Ads\GoogleAds\V6\Services\FeedMappingServiceClient;
use Google\Ads\GoogleAds\V6\Services\FeedPlaceholderViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\FeedServiceClient;
use Google\Ads\GoogleAds\V6\Services\GenderViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\GeographicViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\GeoTargetConstantServiceClient;
use Google\Ads\GoogleAds\V6\Services\GoogleAdsFieldServiceClient;
use Google\Ads\GoogleAds\V6\Services\GroupPlacementViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\HotelGroupViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\HotelPerformanceViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\IncomeRangeViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\KeywordPlanAdGroupKeywordServiceClient;
use Google\Ads\GoogleAds\V6\Services\KeywordPlanAdGroupServiceClient;
use Google\Ads\GoogleAds\V6\Services\KeywordPlanCampaignKeywordServiceClient;
use Google\Ads\GoogleAds\V6\Services\KeywordPlanCampaignServiceClient;
use Google\Ads\GoogleAds\V6\Services\KeywordPlanServiceClient;
use Google\Ads\GoogleAds\V6\Services\LabelServiceClient;
use Google\Ads\GoogleAds\V6\Services\LandingPageViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\LanguageConstantServiceClient;
use Google\Ads\GoogleAds\V6\Services\LocationViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\ManagedPlacementViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\MediaFileServiceClient;
use Google\Ads\GoogleAds\V6\Services\MerchantCenterLinkServiceClient;
use Google\Ads\GoogleAds\V6\Services\MobileAppCategoryConstantServiceClient;
use Google\Ads\GoogleAds\V6\Services\MobileDeviceConstantServiceClient;
use Google\Ads\GoogleAds\V6\Services\OperatingSystemVersionConstantServiceClient;
use Google\Ads\GoogleAds\V6\Services\PaidOrganicSearchTermViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\ParentalStatusViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\ProductBiddingCategoryConstantServiceClient;
use Google\Ads\GoogleAds\V6\Services\ProductGroupViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\RecommendationServiceClient;
use Google\Ads\GoogleAds\V6\Services\RemarketingActionServiceClient;
use Google\Ads\GoogleAds\V6\Services\SearchTermViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\SharedCriterionServiceClient;
use Google\Ads\GoogleAds\V6\Services\SharedSetServiceClient;
use Google\Ads\GoogleAds\V6\Services\ShoppingPerformanceViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\ThirdPartyAppAnalyticsLinkServiceClient;
use Google\Ads\GoogleAds\V6\Services\TopicConstantServiceClient;
use Google\Ads\GoogleAds\V6\Services\TopicViewServiceClient;
use Google\Ads\GoogleAds\V6\Services\UserInterestServiceClient;
use Google\Ads\GoogleAds\V6\Services\UserListServiceClient;
use Google\Ads\GoogleAds\V6\Services\VideoServiceClient;
use Google\ApiCore\PathTemplate;

/**
 * Provides resource names for Google Ads API entities.
 */
final class ResourceNames
{

    /**
     * Generates resource name for an account budget.
     *
     * @param int $customerId the customer ID
     * @param int $accountBudgetId the account budget ID
     * @return string the account budget resource name
     */
    public static function forAccountBudget($customerId, $accountBudgetId)
    {
        return AccountBudgetServiceClient::accountBudgetName($customerId, $accountBudgetId);
    }

    /**
     * Generates resource name for an account budget proposal.
     *
     * @param int $customerId the customer ID
     * @param int $accountBudgetProposalId the account budget proposal ID
     * @return string the account budget proposal resource name
     */
    public static function forAccountBudgetProposal($customerId, $accountBudgetProposalId)
    {
        return AccountBudgetProposalServiceClient::accountBudgetProposalName(
            $customerId,
            $accountBudgetProposalId
        );
    }

    /**
     * Generates resource name for an account link.
     *
     * @param int $customerId the customer ID
     * @param int $accountLinkId the account link ID
     * @return string the account link resource name
     */
    public static function forAccountLinkName($customerId, $accountLinkId)
    {
        return AccountLinkServiceClient::accountLinkName($customerId, $accountLinkId);
    }

    /**
     * Generates resource name for an ad.
     *
     * @param int $customerId the customer ID
     * @param int $adId the ad ID
     * @return string the ad resource name
     */
    public static function forAd($customerId, $adId)
    {
        return AdServiceClient::adName($customerId, $adId);
    }

    /**
     * Generates resource name for an ad group.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @return string the ad group resource name
     */
    public static function forAdGroup($customerId, $adGroupId)
    {
        return AdGroupServiceClient::adGroupName($customerId, $adGroupId);
    }

    /**
     * Generates resource name for an ad group ad.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $adId the ad ID
     * @return string the ad group ad resource name
     */
    public static function forAdGroupAd($customerId, $adGroupId, $adId)
    {
        return AdGroupAdServiceClient::adGroupAdName($customerId, $adGroupId, $adId);
    }

    /**
     * Generates resource name for an ad group ad label.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $adId the ad ID
     * @param int $labelId the label ID
     * @return string the ad group ad label resource name
     */
    public static function forAdGroupAdLabel($customerId, $adGroupId, $adId, $labelId)
    {
        return AdGroupAdLabelServiceClient::adGroupAdLabelName(
            $customerId,
            $adGroupId,
            $adId,
            $labelId
        );
    }

    /**
     * Generates resource name for an ad group audience view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the ad group audience resource name
     */
    public static function forAdGroupAudienceView($customerId, $adGroupId, $criterionId)
    {
        return AdGroupAudienceViewServiceClient::adGroupAudienceViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for an ad group bid modifier.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the ad group bid modifier resource name
     */
    public static function forAdGroupBidModifier($customerId, $adGroupId, $criterionId)
    {
        return AdGroupBidModifierServiceClient::adGroupBidModifierName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for an ad group criterion.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the ad group criterion resource name
     */
    public static function forAdGroupCriterion($customerId, $adGroupId, $criterionId)
    {
        return AdGroupCriterionServiceClient::adGroupCriterionName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for an ad group criterion label.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @param int $labelId the label ID
     * @return string the ad group criterion resource name
     */
    public static function forAdGroupCriterionLabel(
        $customerId,
        $adGroupId,
        $criterionId,
        $labelId
    ) {
        return AdGroupCriterionLabelServiceClient::adGroupCriterionLabelName(
            $customerId,
            $adGroupId,
            $criterionId,
            $labelId
        );
    }

    /**
     * Generates resource name for an ad group criterion simulation.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @param int $type the type
     * @param int $modificationMethod the modification method
     * @param int $startDate the start date
     * @param int $endDate the end date
     * @return string the ad group criterion simulation resource name
     */
    public static function forAdGroupCriterionSimulation(
        $customerId,
        $adGroupId,
        $criterionId,
        $type,
        $modificationMethod,
        $startDate,
        $endDate
    ) {
        return AdGroupCriterionSimulationServiceClient::adGroupCriterionSimulationName(
            $customerId,
            $adGroupId,
            $criterionId,
            $type,
            $modificationMethod,
            $startDate,
            $endDate
        );
    }

    /**
     * Generates resource name for an ad group extension setting.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $extensionType the extension type
     * @return string the ad group extension setting resource name
     */
    public static function forAdGroupExtensionSetting($customerId, $adGroupId, $extensionType)
    {
        return AdGroupExtensionSettingServiceClient::adGroupExtensionSettingName(
            $customerId,
            $adGroupId,
            ExtensionType::name($extensionType)
        );
    }

    /**
     * Generates resource name for an ad group feed.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $feedId the feed Id
     * @return string the ad group feed resource name
     */
    public static function forAdGroupFeed($customerId, $adGroupId, $feedId)
    {
        return AdGroupFeedServiceClient::adGroupFeedName(
            $customerId,
            $adGroupId,
            $feedId
        );
    }

    /**
     * Generates resource name for an ad group label.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $labelId the label ID
     * @return string the ad group label resource name
     */
    public static function forAdGroupLabel(
        $customerId,
        $adGroupId,
        $labelId
    ) {
        return AdGroupLabelServiceClient::adGroupLabelName(
            $customerId,
            $adGroupId,
            $labelId
        );
    }

    /**
     * Generates resource name for an ad group simulation.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $type the type
     * @param int $modificationMethod the modification method
     * @param int $startDate the start date
     * @param int $endDate the end date
     * @return string the ad group simulation resource name
     */
    public static function forAdGroupSimulation(
        $customerId,
        $adGroupId,
        $type,
        $modificationMethod,
        $startDate,
        $endDate
    ) {
        return AdGroupSimulationServiceClient::adGroupSimulationName(
            $customerId,
            $adGroupId,
            $type,
            $modificationMethod,
            $startDate,
            $endDate
        );
    }

    /**
     * Generates resource name for an ad parameter.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @param int $parameterIndex the parameter index
     * @return string the ad parameter resource name
     */
    public static function forAdParameter($customerId, $adGroupId, $criterionId, $parameterIndex)
    {
        return AdParameterServiceClient::adParameterName(
            $customerId,
            $adGroupId,
            $criterionId,
            $parameterIndex
        );
    }

    /**
     * Generates resource name for an ad schedule view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the ad schedule view resource name
     */
    public static function forAdScheduleView($customerId, $adGroupId, $criterionId)
    {
        return AdScheduleViewServiceClient::adScheduleViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for an age range view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the age range view resource name
     */
    public static function forAgeRangeView($customerId, $adGroupId, $criterionId)
    {
        return AgeRangeViewServiceClient::ageRangeViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for an asset.
     *
     * @param int $customerId the customer ID
     * @param int $assetId the asset ID
     * @return string the asset resource name
     */
    public static function forAsset($customerId, $assetId)
    {
        return AssetServiceClient::assetName($customerId, $assetId);
    }

    /**
     * Generates resource name for a batch job.
     *
     * @param int $customerId the customer ID
     * @param int $batchJobId the batch job ID
     * @return string the batch job resource name
     */
    public static function forBatchJob($customerId, $batchJobId)
    {
        return BatchJobServiceClient::batchJobName($customerId, $batchJobId);
    }

    /**
     * Generates resource name for a bidding strategy.
     *
     * @param int $customerId the customer ID
     * @param int $biddingStrategyId the bidding strategy ID
     * @return string the bidding strategy resource name
     */
    public static function forBiddingStrategy($customerId, $biddingStrategyId)
    {
        return BiddingStrategyServiceClient::biddingStrategyName($customerId, $biddingStrategyId);
    }

    /**
     * Generates resource name for a billing setup.
     *
     * @param int $customerId the customer ID
     * @param int $billingSetupId the billing setup ID
     * @return string the billing setup resource name
     */
    public static function forBillingSetup($customerId, $billingSetupId)
    {
        return BillingSetupServiceClient::billingSetupName($customerId, $billingSetupId);
    }

    /**
     * Generates resource name for a campaign.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @return string the campaign resource name
     */
    public static function forCampaign($customerId, $campaignId)
    {
        return CampaignServiceClient::campaignName($customerId, $campaignId);
    }

    /**
     * Generates resource name for a campaign asset.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $assetId the asset ID
     * @param int $fieldType the field type
     * @return string the campaign asset resource name
     */
    public static function forCampaignAsset($customerId, $campaignId, $assetId, $fieldType)
    {
        return CampaignAssetServiceClient::campaignAssetName(
            $customerId,
            $campaignId,
            $assetId,
            AssetFieldType::name($fieldType)
        );
    }

    /**
     * Generates resource name for a campaign audience view.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $criterionId the criterion ID
     * @return string the campaign audience view resource name
     */
    public static function forCampaignAudienceView($customerId, $campaignId, $criterionId)
    {
        return CampaignAudienceViewServiceClient::campaignAudienceViewName(
            $customerId,
            $campaignId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a campaign bid modifier.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $criterionId the criterion ID
     * @return string the campaign bid modifier resource name
     */
    public static function forCampaignBidModifier($customerId, $campaignId, $criterionId)
    {
        return CampaignBidModifierServiceClient::campaignBidModifierName(
            $customerId,
            $campaignId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a campaign budget.
     *
     * @param int $customerId the customer ID
     * @param int $budgetId the budget ID
     * @return string the campaign budget resource name
     */
    public static function forCampaignBudget($customerId, $budgetId)
    {
        return CampaignBudgetServiceClient::campaignBudgetName($customerId, $budgetId);
    }

    /**
     * Generates resource name for a campaign criterion.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $criterionId the criterion ID
     * @return string the campaign criterion resource name
     */
    public static function forCampaignCriterion($customerId, $campaignId, $criterionId)
    {
        return CampaignCriterionServiceClient::campaignCriterionName(
            $customerId,
            $campaignId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a campaign criterion simulation.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $criterionId the criterion ID
     * @param int $type the type
     * @param int $modificationMethod the modification method
     * @param int $startDate the start date
     * @param int $endDate the end date
     * @return string the campaign criterion simulation resource name
     */
    public static function forCampaignCriterionSimulation(
        $customerId,
        $campaignId,
        $criterionId,
        $type,
        $modificationMethod,
        $startDate,
        $endDate
    ) {
        return CampaignCriterionSimulationServiceClient::campaignCriterionSimulationName(
            $customerId,
            $campaignId,
            $criterionId,
            $type,
            $modificationMethod,
            $startDate,
            $endDate
        );
    }

    /**
     * Generates resource name for a campaign draft.
     *
     * @param int $customerId the customer ID
     * @param int $baseCampaignId the base campaign ID
     * @param int $draftId the draft Id
     * @return string the campaign draft resource name
     */
    public static function forCampaignDraft($customerId, $baseCampaignId, $draftId)
    {
        return CampaignDraftServiceClient::campaignDraftName(
            $customerId,
            $baseCampaignId,
            $draftId
        );
    }

    /**
     * Generates resource name for a campaign experiment.
     *
     * @param int $customerId the customer ID
     * @param int $campaignExperimentId the campaign ID
     * @return string the campaign experiment resource name
     */
    public static function forCampaignExperiment($customerId, $campaignExperimentId)
    {
        return CampaignExperimentServiceClient::campaignExperimentName(
            $customerId,
            $campaignExperimentId
        );
    }

    /**
     * Generates resource name for a campaign extension setting.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $extensionType the extension type
     * @return string the campaign extension setting resource name
     */
    public static function forCampaignExtensionSetting($customerId, $campaignId, $extensionType)
    {
        return CampaignExtensionSettingServiceClient::campaignExtensionSettingName(
            $customerId,
            $campaignId,
            ExtensionType::name($extensionType)
        );
    }

    /**
     * Generates resource name for a campaign feed.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $feedId the feed Id
     * @return string the campaign feed resource name
     */
    public static function forCampaignFeed($customerId, $campaignId, $feedId)
    {
        return CampaignFeedServiceClient::campaignFeedName($customerId, $campaignId, $feedId);
    }

    /**
     * Generates resource name for a campaign label.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $labelId the label ID
     * @return string the campaign label resource name
     */
    public static function forCampaignLabel($customerId, $campaignId, $labelId)
    {
        return CampaignLabelServiceClient::campaignLabelName(
            $customerId,
            $campaignId,
            $labelId
        );
    }

    /**
     * Generates resource name for a campaign shared set.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $sharedSetId the shared set Id
     * @return string the campaign shared set resource name
     */
    public static function forCampaignSharedSet($customerId, $campaignId, $sharedSetId)
    {
        return CampaignSharedSetServiceClient::campaignSharedSetName(
            $customerId,
            $campaignId,
            $sharedSetId
        );
    }

    /**
     * Generates resource name for a carrier constant.
     *
     * @param int $criterionId the criterion ID
     * @return string the carrier constant resource name
     */
    public static function forCarrierConstant($criterionId)
    {
        return CarrierConstantServiceClient::carrierConstantName($criterionId);
    }

    /**
     * Generates resource name for a change status.
     *
     * @param int $customerId the customer ID
     * @param int $changeStatusId the change status ID
     * @return string the change status resource name
     */
    public static function forChangeStatus($customerId, $changeStatusId)
    {
        return ChangeStatusServiceClient::changeStatusName($customerId, $changeStatusId);
    }

    /**
     * Generates resource name for a click view.
     *
     * @param int $customerId the customer ID
     * @param string $date (yyyy-MM-dd) the campaign ID
     * @param int $gclId the Google Click Id
     * @return string the click view resource name
     */
    public static function forClickView($customerId, $date, $gclId)
    {
        return ClickViewServiceClient::clickViewName($customerId, $date, $gclId);
    }

    /**
     * Generates resource name for a combined audience.
     *
     * @param int $customerId the customer ID
     * @param int $combinedAudienceId the combined audience ID
     * @return string the combined audience resource name
     */
    public static function forCombinedAudience($customerId, $combinedAudienceId)
    {
        return CombinedAudienceServiceClient::combinedAudienceName(
            $customerId,
            $combinedAudienceId
        );
    }

    /**
     * Generates resource name for a conversion action.
     *
     * @param int $customerId the customer ID
     * @param int $conversionActionId the conversion action ID
     * @return string the conversion action resource name
     */
    public static function forConversionAction($customerId, $conversionActionId)
    {
        return ConversionActionServiceClient::conversionActionName(
            $customerId,
            $conversionActionId
        );
    }

    /**
     * Generates resource name for a currency constant.
     *
     * @param string $currencyConstantId the currency constant ID
     * @return string the currency constant resource name
     */
    public static function forCurrencyConstant($currencyConstantId)
    {
        return CurrencyConstantServiceClient::currencyConstantName($currencyConstantId);
    }

    /**
     * Generates resource name for a customer.
     *
     * @param int $customerId the customer ID
     * @return string the customer resource name
     */
    public static function forCustomer($customerId)
    {
        return CustomerServiceClient::customerName($customerId);
    }

    /**
     * Generates resource name for a customer client.
     *
     * @param int $customerId the customer ID
     * @param int $customerClientId the customer client ID
     * @return string the customer client resource name
     */
    public static function forCustomerClient($customerId, $customerClientId)
    {
        return CustomerClientServiceClient::customerClientName($customerId, $customerClientId);
    }

    /**
     * Generates resource name for a customer client link.
     *
     * @param int $customerId the customer ID
     * @param int $clientCustomerId the client customer ID
     * @param int $managerLinkId the manager customer ID
     * @return string the customer client link resource name
     */
    public static function forCustomerClientLink($customerId, $clientCustomerId, $managerLinkId)
    {
        return CustomerClientLinkServiceClient::customerClientLinkName(
            $customerId,
            $clientCustomerId,
            $managerLinkId
        );
    }

    /**
     * Generates resource name for a customer extension setting.
     *
     * @param int $customerId the customer ID
     * @param int $extensionType the extension type
     * @return string the customer extension setting resource name
     */
    public static function forCustomerExtensionSetting($customerId, $extensionType)
    {
        return CustomerExtensionSettingServiceClient::customerExtensionSettingName(
            $customerId,
            ExtensionType::name($extensionType)
        );
    }

    /**
     * Generates resource name for a customer feed.
     *
     * @param int $customerId the customer ID
     * @param int $feedId the feed ID
     * @return string the customer feed resource name
     */
    public static function forCustomerFeed($customerId, $feedId)
    {
        return CustomerFeedServiceClient::customerFeedName($customerId, $feedId);
    }

    /**
     * Generates resource name for a customer label.
     *
     * @param int $customerId the customer ID
     * @param int $labelId the label ID
     * @return string the customer label resource name
     */
    public static function forCustomerLabel($customerId, $labelId)
    {
        return CustomerLabelServiceClient::customerLabelName($customerId, $labelId);
    }

    /**
     * Generates resource name for a customer manager link.
     *
     * @param int $clientCustomerId the client customer ID
     * @param int $managerCustomerId the manager customer ID
     * @param int $managerLinkId the manager link ID
     * @return string the customer manager link resource name
     */
    public static function forCustomerManagerLink(
        $clientCustomerId,
        $managerCustomerId,
        $managerLinkId
    ) {
        return CustomerManagerLinkServiceClient::customerManagerLinkName(
            $clientCustomerId,
            $managerCustomerId,
            $managerLinkId
        );
    }

    /**
     * Generates resource name for a customer negative criterion.
     *
     * @param int $customerId the customer ID
     * @param int $criterionId the criterion ID
     * @return string the customer negative criterion resource name
     */
    public static function forCustomerNegativeCriterion($customerId, $criterionId)
    {
        return CustomerNegativeCriterionServiceClient::customerNegativeCriterionName(
            $customerId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a customer user access.
     *
     * @param int $customerId the customer ID
     * @param int $userId the user ID
     * @return string the customer user access resource name
     */
    public static function forCustomerUserAccess($customerId, $userId)
    {
        return CustomerUserAccessServiceClient::customerUserAccessName($customerId, $userId);
    }

    /**
     * Generates resource name for a customer user access invitation.
     *
     * @param int $customerId the customer ID
     * @param int $invitationId the invitation ID
     * @return string the customer user access invitation resource name
     */
    public static function forCustomerUserAccessInvitation($customerId, $invitationId)
    {
        return CustomerUserAccessInvitationServiceClient::customerUserAccessInvitationName(
            $customerId,
            $invitationId
        );
    }

    /**
     * Generates resource name for a custom interest.
     *
     * @param int $customerId the customer ID
     * @param int $customInterestId the custom interest ID
     * @return string the custom interest resource name
     */
    public static function forCustomInterest($customerId, $customInterestId)
    {
        return CustomInterestServiceClient::customInterestName($customerId, $customInterestId);
    }

    /**
     * Generates resource name for a detail placement view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param string $placement the placement
     * @return string the detail placement view resource name
     */
    public static function forDetailPlacementView($customerId, $adGroupId, $placement)
    {
        return DetailPlacementViewServiceClient::detailPlacementViewName(
            $customerId,
            $adGroupId,
            $placement
        );
    }

    /**
     * Generates resource name for a display keyword view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the display keyword view resource name
     */
    public static function forDisplayKeywordView($customerId, $adGroupId, $criterionId)
    {
        return DisplayKeywordViewServiceClient::displayKeywordViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a domain category.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param string $category the category
     * @param string $languageCode the language code
     * @return string the domain category resource name
     */
    public static function forDomainCategory($customerId, $campaignId, $category, $languageCode)
    {
        return DomainCategoryServiceClient::domainCategoryName(
            $customerId,
            $campaignId,
            $category,
            $languageCode
        );
    }

    /**
     * Generates resource name for an expanded langing page view.
     *
     * @param int $customerId the customer ID
     * @param string $expandedFinalUrlFingerprint the expanded final URL fingerprint
     * @return string the expanded langing page view resource name
     */
    public static function forExpandedLandingPageView($customerId, $expandedFinalUrlFingerprint)
    {
        return ExpandedLandingPageViewServiceClient::expandedLandingPageViewName(
            $customerId,
            $expandedFinalUrlFingerprint
        );
    }

    /**
     * Generates resource name for an extension feed item.
     *
     * @param int $customerId the customer ID
     * @param int $feedItemId the feed item ID
     * @return string the extension feed item resource name
     */
    public static function forExtensionFeedItem($customerId, $feedItemId)
    {
        return ExtensionFeedItemServiceClient::extensionFeedItemName($customerId, $feedItemId);
    }

    /**
     * Generates resource name for a feed.
     *
     * @param int $customerId the customer ID
     * @param int $feedId the feed ID
     * @return string the feed resource name
     */
    public static function forFeed($customerId, $feedId)
    {
        return FeedServiceClient::feedName($customerId, $feedId);
    }

    /**
     * Generates resource name for a feed item.
     *
     * @param int $customerId the customer ID
     * @param int $feedId the feed ID
     * @param int $feedItemId the feed item ID
     * @return string the feed item resource name
     */
    public static function forFeedItem($customerId, $feedId, $feedItemId)
    {
        return FeedItemServiceClient::feedItemName(
            $customerId,
            $feedId,
            $feedItemId
        );
    }

    /**
     * Generates resource name for a feed item set.
     *
     * @param int $customerId the customer ID
     * @param int $feedId the feed ID
     * @param int $feedItemSetId the feed item set ID
     * @return string the feed item set resource name
     */
    public static function forFeedItemSet($customerId, $feedId, $feedItemSetId)
    {
        return FeedItemSetServiceClient::feedItemSetName(
            $customerId,
            $feedId,
            $feedItemSetId
        );
    }

    /**
     * Generates resource name for a feed item set link.
     *
     * @param int $customerId the customer ID
     * @param int $feedId the feed ID
     * @param int $feedItemSetId the feed item set ID
     * @param int $feedItemId the feed item ID
     * @return string the feed item set link resource name
     */
    public static function forFeedItemSetLink($customerId, $feedId, $feedItemSetId, $feedItemId)
    {
        return FeedItemSetLinkServiceClient::feedItemSetLinkName(
            $customerId,
            $feedId,
            $feedItemSetId,
            $feedItemId
        );
    }

    /**
     * Generates resource name for a feed item target.
     *
     * @param int $customerId the customer ID
     * @param int $feedId the feed ID
     * @param int $feedItemId the feed item ID
     * @param int $feedItemTargetType the feed item target type
     * @param int $feedItemTargetId the feed item target ID
     * @return string the feed item target resource name
     */
    public static function forFeedItemTarget(
        $customerId,
        $feedId,
        $feedItemId,
        $feedItemTargetType,
        $feedItemTargetId
    ) {
        return FeedItemTargetServiceClient::feedItemTargetName(
            $customerId,
            $feedId,
            $feedItemId,
            $feedItemTargetType,
            $feedItemTargetId
        );
    }

    /**
     * Generates resource name for a feed mapping.
     *
     * @param int $customerId the customer ID
     * @param int $feedId the feed ID
     * @param int $feedMappingId the feed mapping ID
     * @return string the feed mapping resource name
     */
    public static function forFeedMapping($customerId, $feedId, $feedMappingId)
    {
        return FeedMappingServiceClient::feedMappingName(
            $customerId,
            $feedId,
            $feedMappingId
        );
    }

    /**
     * Generates resource name for a feed placeholder view.
     *
     * @param int $customerId the customer ID
     * @param int $placeholderType the placeholder type
     * @return string the feed placeholder view resource name
     */
    public static function forFeedPlaceholderView($customerId, $placeholderType)
    {
        return FeedPlaceholderViewServiceClient::feedPlaceholderViewName(
            $customerId,
            $placeholderType
        );
    }

    /**
     * Generates resource name for a gender view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the gender view resource name
     */
    public static function forGenderView($customerId, $adGroupId, $criterionId)
    {
        return GenderViewServiceClient::genderViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a geographic view.
     *
     * @param int $customerId the customer ID
     * @param int $countryCriterionId the country criterion ID
     * @param int $locationType the location type
     * @return string the geographic view resource name
     */
    public static function forGeographicView($customerId, $countryCriterionId, $locationType)
    {
        return GeographicViewServiceClient::geographicViewName(
            $customerId,
            $countryCriterionId,
            $locationType
        );
    }

    /**
     * Generates resource name for a geo target constant.
     *
     * @param int $geoTargetConstantId the geo target constant ID
     * @return string the geo target constant resource name
     */
    public static function forGeoTargetConstant($geoTargetConstantId)
    {
        return GeoTargetConstantServiceClient::geoTargetConstantName($geoTargetConstantId);
    }

    /**
     * Generates resource name for a Google Ads field.
     *
     * @param string $name the name
     * @return string the Google Ads field resource name
     */
    public static function forGoogleAdsField($name)
    {
        return GoogleAdsFieldServiceClient::googleAdsFieldName($name);
    }

    /**
     * Generates resource name for a group placement view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param string $placement the placement
     * @return string the group placement view resource name
     */
    public static function forGroupPlacementView($customerId, $adGroupId, $placement)
    {
        return GroupPlacementViewServiceClient::groupPlacementViewName(
            $customerId,
            $adGroupId,
            $placement
        );
    }

    /**
     * Generates resource name for a hotel group view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param string $criterionId the criterion ID
     * @return string the hotel group view resource name
     */
    public static function forHotelGroupView($customerId, $adGroupId, $criterionId)
    {
        return HotelGroupViewServiceClient::hotelGroupViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a hotel performance view.
     *
     * @param int $customerId the customer ID
     * @return string the hotel performance view resource name
     */
    public static function forHotelPerformanceView($customerId)
    {
        return HotelPerformanceViewServiceClient::hotelPerformanceViewName($customerId);
    }

    /**
     * Generates resource name for a income range view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the income range view resource name
     */
    public static function forIncomeRangeView($customerId, $adGroupId, $criterionId)
    {
        return IncomeRangeViewServiceClient::incomeRangeViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a keyword plan.
     *
     * @param int $customerId the customer ID
     * @param int $keywordPlanId the keyword plan ID
     * @return string the keyword plan resource name
     */
    public static function forKeywordPlan($customerId, $keywordPlanId)
    {
        return KeywordPlanServiceClient::keywordPlanName($customerId, $keywordPlanId);
    }

    /**
     * Generates resource name for a keyword plan ad group.
     *
     * @param int $customerId the customer ID
     * @param int $keywordPlanAdGroupId the keyword plan ad group ID
     * @return string the keyword plan ad group resource name
     */
    public static function forKeywordPlanAdGroup($customerId, $keywordPlanAdGroupId)
    {
        return KeywordPlanAdGroupServiceClient::keywordPlanAdGroupName(
            $customerId,
            $keywordPlanAdGroupId
        );
    }

    /**
     * Generates resource name for a keyword plan ad group keyword.
     *
     * @param int $customerId the customer ID
     * @param int $keywordPlanAdGroupKeywordId the keyword plan ad group keyword ID
     * @return string the keyword plan ad group keyword resource name
     */
    public static function forKeywordPlanAdGroupKeyword($customerId, $keywordPlanAdGroupKeywordId)
    {
        return KeywordPlanAdGroupKeywordServiceClient::keywordPlanAdGroupKeywordName(
            $customerId,
            $keywordPlanAdGroupKeywordId
        );
    }

    /**
     * Generates resource name for a keyword plan campaign.
     *
     * @param int $customerId the customer ID
     * @param int $keywordPlanCampaignId the keyword plan campaign ID
     * @return string the keyword plan campaign resource name
     */
    public static function forKeywordPlanCampaign($customerId, $keywordPlanCampaignId)
    {
        return KeywordPlanCampaignServiceClient::keywordPlanCampaignName(
            $customerId,
            $keywordPlanCampaignId
        );
    }

    /**
     * Generates resource name for a keyword plan campaign keyword.
     *
     * @param int $customerId the customer ID
     * @param int $keywordPlanCampaignKeywordId the keyword plan campaign keyword ID
     * @return string the keyword plan campaign keyword resource name
     */
    public static function forKeywordPlanCampaignKeyword($customerId, $keywordPlanCampaignKeywordId)
    {
        return KeywordPlanCampaignKeywordServiceClient::keywordPlanCampaignKeywordName(
            $customerId,
            $keywordPlanCampaignKeywordId
        );
    }

    /**
     * Generates resource name for a label.
     *
     * @param int $customerId the customer ID
     * @param int $labelId the label ID
     * @return string the label resource name
     */
    public static function forLabel($customerId, $labelId)
    {
        return LabelServiceClient::labelName($customerId, $labelId);
    }

    /**
     * Generates resource name for a landing page view.
     *
     * @param int $customerId the customer ID
     * @param string $unexpandedFinalUrlFingerprint the unexpanded final URL fingerprint
     * @return string the landing page view resource name
     */
    public static function forLandingPageView(
        $customerId,
        $unexpandedFinalUrlFingerprint
    ) {
        return LandingPageViewServiceClient::landingPageViewName(
            $customerId,
            $unexpandedFinalUrlFingerprint
        );
    }

    /**
     * Generates resource name for a language constant.
     *
     * @param int $languageConstantId the language constant ID
     * @return string the language constant resource name
     */
    public static function forLanguageConstant($languageConstantId)
    {
        return LanguageConstantServiceClient::languageConstantName($languageConstantId);
    }

    /**
     * Generates resource name for a location view.
     *
     * @param int $customerId the customer ID
     * @param int $campaingId the campaign ID
     * @param int $criterionId the criterion ID
     * @return string the location view resource name
     */
    public static function forLocationView($customerId, $campaingId, $criterionId)
    {
        return LocationViewServiceClient::locationViewName(
            $customerId,
            $campaingId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a managed placement view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the managed placement view resource name
     */
    public static function forManagedPlacementView($customerId, $adGroupId, $criterionId)
    {
        return ManagedPlacementViewServiceClient::managedPlacementViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a media file.
     *
     * @param int $customerId the customer ID
     * @param int $mediaFileId the media file ID
     * @return string the media file resource name
     */
    public static function forMediaFile($customerId, $mediaFileId)
    {
        return MediaFileServiceClient::mediaFileName($customerId, $mediaFileId);
    }

    /**
     * Generates resource name for a merchant center link.
     *
     * @param int $customerId the customer ID
     * @param int $merchantCenterId the merchant center ID
     * @return string the merchant center link resource name
     */
    public static function forMerchantCenterLink($customerId, $merchantCenterId)
    {
        return MerchantCenterLinkServiceClient::merchantCenterLinkName(
            $customerId,
            $merchantCenterId
        );
    }

    /**
     * Generates resource name for a mobile app category constant.
     *
     * @param int $mobileAppCategoryId the mobile app category ID
     * @return string the mobile app category constant resource name
     */
    public static function forMobileAppCategoryConstant($mobileAppCategoryId)
    {
        return MobileAppCategoryConstantServiceClient::mobileAppCategoryConstantName(
            $mobileAppCategoryId
        );
    }

    /**
     * Generates resource name for a mobile device constant.
     *
     * @param int $criterionId the criterion ID
     * @return string the mobile device constant resource name
     */
    public static function forMobileDeviceConstant($criterionId)
    {
        return MobileDeviceConstantServiceClient::mobileDeviceConstantName($criterionId);
    }

    /**
     * Generates resource name for a operating system version constant.
     *
     * @param int $criterionId the criterion ID
     * @return string the operating system version constant resource name
     */
    public static function forOperatingSystemVersionConstant($criterionId)
    {
        return OperatingSystemVersionConstantServiceClient::operatingSystemVersionConstantName(
            $criterionId
        );
    }

    /**
     * Generates resource name for a paid organic search term view.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $adGroupId the ad group ID
     * @param string $searchTerm the search term
     * @return string the paid organic search term view resource name
     */
    public static function forPaidOrganicSearchTermView(
        $customerId,
        $campaignId,
        $adGroupId,
        $searchTerm
    ) {
        return PaidOrganicSearchTermViewServiceClient::paidOrganicSearchTermViewName(
            $customerId,
            $campaignId,
            $adGroupId,
            $searchTerm
        );
    }

    /**
     * Generates resource name for a parental status view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the parental status view resource name
     */
    public static function forParentalStatusView($customerId, $adGroupId, $criterionId)
    {
        return ParentalStatusViewServiceClient::parentalStatusViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a payments account.
     *
     * @param int $customerId the customer ID
     * @param int $paymentsAccountId the payments account ID
     * @return string the payments account resource name
     */
    public static function forPaymentsAccount($customerId, $paymentsAccountId)
    {
        $pathTemplate = new PathTemplate(
            'customers/{customer}/paymentsAccounts/{payments_account}'
        );
        return $pathTemplate->render(
            [
                'customer' => $customerId,
                'payments_account' => $paymentsAccountId,
            ]
        );
    }

    /**
     * Generates resource name for a product bidding category constant.
     *
     * @param string $countryCode the country code
     * @param int $level the level
     * @param int $id ID of the product bidding category
     * @return string the product bidding category constant resource name
     */
    public static function forProductBiddingCategoryConstant(
        $countryCode,
        $level,
        $id
    ) {
        return ProductBiddingCategoryConstantServiceClient::productBiddingCategoryConstantName(
            $countryCode,
            $level,
            $id
        );
    }

    /**
     * Generates resource name for a product group view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the product group view resource name
     */
    public static function forProductGroupView($customerId, $adGroupId, $criterionId)
    {
        return ProductGroupViewServiceClient::productGroupViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a recommendation.
     *
     * @param int $customerId the customer ID
     * @param string $recommendationId the recommendation ID
     * @return string the recommendation resource name
     */
    public static function forRecommendation($customerId, $recommendationId)
    {
        return RecommendationServiceClient::recommendationName($customerId, $recommendationId);
    }

    /**
     * Generates resource name for a remarketing action.
     *
     * @param int $customerId the customer ID
     * @param int $remarketingActionId the remarketing action ID
     * @return string the remarketing action resource name
     */
    public static function forRemarketingAction($customerId, $remarketingActionId)
    {
        return RemarketingActionServiceClient::remarketingActionName(
            $customerId,
            $remarketingActionId
        );
    }

    /**
     * Generates resource name for a search term view.
     *
     * @param int $customerId the customer ID
     * @param int $campaignId the campaign ID
     * @param int $adGroupId the ad group ID
     * @param string $searchTerm the search term
     * @return string the search term view resource name
     */
    public static function forSearchTermView(
        $customerId,
        $campaignId,
        $adGroupId,
        $searchTerm
    ) {
        return SearchTermViewServiceClient::searchTermViewName(
            $customerId,
            $campaignId,
            $adGroupId,
            $searchTerm
        );
    }

    /**
     * Generates resource name for a shared criterion.
     *
     * @param int $customerId the customer ID
     * @param int $sharedSetId the shared set ID
     * @param int $criterionId the criterion ID
     * @return string the shared criterion resource name
     */
    public static function forSharedCriterion($customerId, $sharedSetId, $criterionId)
    {
        return SharedCriterionServiceClient::sharedCriterionName(
            $customerId,
            $sharedSetId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a shared set.
     *
     * @param int $customerId the customer ID
     * @param int $sharedSetId the shared set ID
     * @return string the shared set resource name
     */
    public static function forSharedSet($customerId, $sharedSetId)
    {
        return SharedSetServiceClient::sharedSetName($customerId, $sharedSetId);
    }

    /**
     * Generates resource name for a shopping performance view.
     *
     * @param int $customerId the customer ID
     * @return string the shopping performance view resource name
     */
    public static function forShoppingPerformanceView($customerId)
    {
        return ShoppingPerformanceViewServiceClient::shoppingPerformanceViewName($customerId);
    }

    /**
     * Generates resource name for a third party app analytics link.
     *
     * @param int $customerId the customer ID
     * @param int $thirdPartyAppAnalyticsLinkId the third party app analytics link ID
     * @return string the third party app analytics link resource name
     */
    public static function forThirdPartyAppAnalyticsLinkName(
        $customerId,
        $thirdPartyAppAnalyticsLinkId
    ) {
        return ThirdPartyAppAnalyticsLinkServiceClient::thirdPartyAppAnalyticsLinkName(
            $customerId,
            $thirdPartyAppAnalyticsLinkId
        );
    }

    /**
     * Generates resource name for a topic constant.
     *
     * @param int $topicId the topic ID
     * @return string the topic constant resource name
     */
    public static function forTopicConstant($topicId)
    {
        return TopicConstantServiceClient::topicConstantName($topicId);
    }

    /**
     * Generates resource name for a topic view.
     *
     * @param int $customerId the customer ID
     * @param int $adGroupId the ad group ID
     * @param int $criterionId the criterion ID
     * @return string the topic view resource name
     */
    public static function forTopicView($customerId, $adGroupId, $criterionId)
    {
        return TopicViewServiceClient::topicViewName(
            $customerId,
            $adGroupId,
            $criterionId
        );
    }

    /**
     * Generates resource name for a user interest.
     *
     * @param int $customerId the customer ID
     * @param int $userInterestId the user interest ID
     * @return string the user interest resource name
     */
    public static function forUserInterest($customerId, $userInterestId)
    {
        return UserInterestServiceClient::userInterestName($customerId, $userInterestId);
    }

    /**
     * Generates resource name for a user list.
     *
     * @param int $customerId the customer ID
     * @param int $userListId the user list ID
     * @return string the user list resource name
     */
    public static function forUserList($customerId, $userListId)
    {
        return UserListServiceClient::userListName($customerId, $userListId);
    }

    /**
     * Generates resource name for a video.
     *
     * @param int $customerId the customer ID
     * @param int $videoId the video ID
     * @return string the video resource name
     */
    public static function forVideo($customerId, $videoId)
    {
        return VideoServiceClient::videoName($customerId, $videoId);
    }
}
