const removedUrls = [];
const newUrls = [];
const redirections = [];

/* Data structure for every release

/* *** RELEASE X.Y ****/

/* Redirections from x.y-1 to x.y  */

/*
redirections.push(
    {
      'x.y-1': '/old-url',
      'x.y': '/new-url',
    }
);
*/

/* Pages added in x.y */

/*
newUrls['x.y'] = [
  '/new-url',
];
*/

/* Pages no longer available in x.y (this is not required if there is a redirection for this url) */

/*
removedUrls['x.y'] = [
  '/old-url',
];
*/


/* *** RELEASE 3.10 ****/

/* Redirections from 3.9 to 3.10  */

redirections.push(
    {
      '3.9': '/user-manual/capabilities/sec-config-assessment/how-it-works.html',
      '3.10': '/user-manual/capabilities/sec-config-assessment/how_it_works.html',
    },
    {
      '3.9': '/user-manual/capabilities/sec-config-assessment/security-configuration-assessment.html',
      '3.10': '/user-manual/capabilities/sec-config-assessment/creating_custom_policies.html',
    },
    {
      '3.9': '/user-manual/capabilities/sec-config-assessment/use-case.html',
      '3.10': '/user-manual/capabilities/sec-config-assessment/use_case.html',
    }
);

/* Pages added in 3.10 */

newUrls['3.10'] = [
  '/user-manual/capabilities/sec-config-assessment/how_to_configure.html',
  '/user-manual/capabilities/sec-config-assessment/what_is_it.html',
  '/user-manual/configuring-cluster/advanced-settings.html',
  '/user-manual/configuring-cluster/basics.html',
  '/user-manual/configuring-cluster/cluster_management.html',
  '/user-manual/configuring-cluster/index.html',
];


/* *** RELEASE 3.9 *** */

/* Redirections from 3.8 to 3.9 */

redirections.push(
    {
      '3.8': '/deploying-with-ansible/guide/install-wazuh-server.html',
      '3.9': '/deploying-with-ansible/guide/install-wazuh-manager.html',
    },
    {
      '3.8': '/installation-guide/installing-elastic-stack/kibana_ssl.html',
      '3.9': '/installation-guide/installing-elastic-stack/protect-installation/kibana_ssl.html',
    },
    {
      '3.8': '/installation-guide/installing-elastic-stack/searchguard.html',
      '3.9': '/installation-guide/installing-elastic-stack/protect-installation/searchguard.html',
    },
    {
      '3.8': '/installing-splunk/index.html',
      '3.9': '/installation-guide/installing-splunk/index.html',
    },
    {
      '3.8': '/installing-splunk/splunk-app.html',
      '3.9': '/installation-guide/installing-splunk/splunk-app.html',
    },
    {
      '3.8': '/installing-splunk/splunk-basic.html',
      '3.9': '/installation-guide/installing-splunk/splunk-basic.html',
    },
    {
      '3.8': '/installing-splunk/splunk-distributed.html',
      '3.9': '/installation-guide/installing-splunk/splunk-distributed.html',
    },
    {
      '3.8': '/installing-splunk/splunk-forwarder.html',
      '3.9': '/installation-guide/installing-splunk/splunk-forwarder.html',
    },
    {
      '3.8': '/installing-splunk/splunk-polling.html',
      '3.9': '/installation-guide/installing-splunk/splunk-polling.html',
    },
    {
      '3.8': '/installing-splunk/splunk-reverse-proxy.html',
      '3.9': '/installation-guide/installing-splunk/splunk-reverse-proxy.html',
    },
    {
      '3.8': '/installation-guide/installing-wazuh-agent/wazuh_agent_aix.html',
      '3.9': '/installation-guide/installing-wazuh-agent/aix/index.html',
    },
    {
      '3.8': '/installation-guide/installing-wazuh-agent/wazuh_agent_hpux.html',
      '3.9': '/installation-guide/installing-wazuh-agent/hpux/wazuh_agent_package_hpux.html',
    },
    {
      '3.8': '/installation-guide/installing-wazuh-agent/wazuh_agent_linux.html',
      '3.9': '/installation-guide/installing-wazuh-agent/linux/index.html',
    },
    {
      '3.8': '/installation-guide/installing-wazuh-agent/wazuh_agent_macos.html',
      '3.9': '/installation-guide/installing-wazuh-agent/macos/index.html',
    },
    {
      '3.8': '/installation-guide/installing-wazuh-agent/wazuh_agent_solaris.html',
      '3.9': '/installation-guide/installing-wazuh-agent/solaris/index.html',
    },
    {
      '3.8': '/installation-guide/installing-wazuh-agent/wazuh_agent_windows.html',
      '3.9': '/installation-guide/installing-wazuh-agent/windows/index.html',
    },
    {
      '3.8': '/installation-guide/installing-wazuh-server/index.html',
      '3.9': '/installation-guide/installing-wazuh-manager/index.html',
    },
    {
      '3.8': '/installation-guide/installing-wazuh-server/securing_api.html',
      '3.9': '/installation-guide/securing_api.html',
    },
    {
      '3.8': '/installation-guide/upgrading/index.html',
      '3.9': '/upgrade-guide/upgrading/index.html',
    },
    {
      '3.8': '/installation-guide/upgrading/different_major.html',
      '3.9': '/upgrade-guide/upgrading/different_major.html',
    },
    {
      '3.8': '/installation-guide/upgrading/latest_wazuh3_minor.html',
      '3.9': '/upgrade-guide/upgrading/latest_wazuh3_minor.html',
    },
    {
      '3.8': '/installation-guide/upgrading/legacy/index.html',
      '3.9': '/upgrade-guide/upgrading/legacy/index.html',
    },
    {
      '3.8': '/installation-guide/upgrading/legacy/upgrading-elastic-stack.html',
      '3.9': '/upgrade-guide/upgrading/legacy/upgrading-elastic-stack.html',
    },
    {
      '3.8': '/installation-guide/upgrading/legacy/upgrading-wazuh-agent.html',
      '3.9': '/upgrade-guide/upgrading/legacy/upgrading-wazuh-agent.html',
    },
    {
      '3.8': '/installation-guide/upgrading/legacy/upgrading-wazuh-server.html',
      '3.9': '/upgrade-guide/upgrading/legacy/upgrading-wazuh-manager.html',
    },
    {
      '3.8': '/installation-guide/upgrading/restore_alerts.html',
      '3.9': '/upgrade-guide/upgrading/restore_alerts.html',
    },
    {
      '3.8': '/installation-guide/upgrading/same_minor.html',
      '3.9': '/upgrade-guide/upgrading/same_minor_or_major.html',
    },
    {
      '3.8': '/user-manual/agents/remote-upgrading/create-custom-wpk.html',
      '3.9': '/user-manual/agents/remote-upgrading/create-custom-wpk/create-wpk-key.html',
    },
    {
      '3.8': '/user-manual/agents/command-line/register.html',
      '3.9': '/user-manual/registering/using-command-line.html',
    },
    {
      '3.8': '/user-manual/agents/command-line/listing.html',
      '3.9': '/user-manual/agents/listing/using-command-line.html',
    },
    {
      '3.8': '/user-manual/agents/command-line/remove.html',
      '3.9': '/user-manual/agents/remove-agents/remove.html',
    },
    {
      '3.8': '/user-manual/agents/restful-api/remove.html',
      '3.9': '/user-manual/agents/remove-agents/restful-api-remove.html',
    },
    {
      '3.8': '/user-manual/agents/restful-api/register.html',
      '3.9': '/user-manual/registering/restful-api-register.html',
    },
    {
      '3.8': '/user-manual/agents/restful-api/listing.html',
      '3.9': '/user-manual/agents/listing/listing.html',
    },
    {
      '3.8': '/user-manual/agents/wazuh-app.html',
      '3.9': '/user-manual/agents/listing/wazuh-app.html',
    },
    {
      '3.8': '/user-manual/registering/use-registration-service.html',
      '3.9': '/user-manual/registering/simple-registration-method.html',
    }
);

/* Pages added in 3.9 */

newUrls['3.9'] = [
  '/amazon/services/S3-bucket.html',
  '/compliance.html',
  '/containers.html',
  '/deploying-with-kubernetes/index.html',
  '/deploying-with-kubernetes/kubernetes-clean-up.html',
  '/deploying-with-kubernetes/kubernetes-conf.html',
  '/deploying-with-kubernetes/kubernetes-upgrade.html',
  '/deploying-with-puppet/setup-puppet/install-puppet-db.html',
  '/deployment.html',
  '/installation-guide/installing-elastic-stack/automatic_api.html',
  '/installation-guide/installing-elastic-stack/configure-elasticsearch-cluster.html',
  '/installation-guide/installing-elastic-stack/protect-installation/index.html',
  '/installation-guide/installing-elastic-stack/protect-installation/xpack.html',
  '/installation-guide/installing-elastic-stack/transform_logstash.html',
  '/installation-guide/installing-wazuh-agent/aix/index.html',
  '/installation-guide/installing-wazuh-agent/aix/wazuh_agent_package_aix.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/deployment_variables_aix.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/deployment_variables_linux.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/deployment_variables_macos.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/deployment_variables_windows.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/linux/deployment_variables_apt.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/linux/deployment_variables_dnf.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/linux/deployment_variables_yum.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/linux/deployment_variables_zypper.html',
  '/installation-guide/installing-wazuh-agent/hpux/index.html',
  '/installation-guide/installing-wazuh-agent/hpux/wazuh_agent_package_hpux.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/deployment_variables_aix.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/deployment_variables_linux.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/deployment_variables_macos.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/deployment_variables_windows.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/linux/deployment_variables_apt.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/linux/deployment_variables_dnf.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/linux/deployment_variables_yum.html',
  '/installation-guide/installing-wazuh-agent/deployment_variables/linux/deployment_variables_zypper.html',
  '/installation-guide/installing-wazuh-agent/hpux/index.html',
  '/installation-guide/installing-wazuh-agent/linux/amazon1-or-greater/index.html',
  '/installation-guide/installing-wazuh-agent/linux/amazon1-or-greater/wazuh_agent_package_amazon.html',
  '/installation-guide/installing-wazuh-agent/linux/amazon1-or-greater/wazuh_agent_sources_amazon.html',
  '/installation-guide/installing-wazuh-agent/linux/centos5/index.html',
  '/installation-guide/installing-wazuh-agent/linux/centos5/wazuh_agent_package_centos5.html',
  '/installation-guide/installing-wazuh-agent/linux/centos6-or-greater/index.html',
  '/installation-guide/installing-wazuh-agent/linux/centos6-or-greater/wazuh_agent_package_centos6_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/centos6-or-greater/wazuh_agent_sources_centos6_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/debian7-or-greater/index.html',
  '/installation-guide/installing-wazuh-agent/linux/debian7-or-greater/wazuh_agent_package_debian7_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/debian7-or-greater/wazuh_agent_sources_debian7_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/fedora22-or-greater/index.html',
  '/installation-guide/installing-wazuh-agent/linux/fedora22-or-greater/wazuh_agent_package_fedora22_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/fedora22-or-greater/wazuh_agent_sources_fedora22_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/index.html',
  '/installation-guide/installing-wazuh-agent/linux/opensuse42-leap-and-tumbleweed/index.html',
  '/installation-guide/installing-wazuh-agent/linux/opensuse42-leap-and-tumbleweed/wazuh_agent_package_opensuse42_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/opensuse42-leap-and-tumbleweed/wazuh_agent_sources_opensuse42_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/oracle5/index.html',
  '/installation-guide/installing-wazuh-agent/linux/oracle5/wazuh_agent_package_oracle5.html',
  '/installation-guide/installing-wazuh-agent/linux/oracle6-or-greater/index.html',
  '/installation-guide/installing-wazuh-agent/linux/oracle6-or-greater/wazuh_agent_package_oracle6_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/oracle6-or-greater/wazuh_agent_sources_oracle6_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/rhel5/index.html',
  '/installation-guide/installing-wazuh-agent/linux/rhel5/wazuh_agent_package_rhel5.html',
  '/installation-guide/installing-wazuh-agent/linux/rhel6-or-greater/index.html',
  '/installation-guide/installing-wazuh-agent/linux/rhel6-or-greater/wazuh_agent_package_rhel6_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/rhel6-or-greater/wazuh_agent_sources_rhel6_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/suse11/index.html',
  '/installation-guide/installing-wazuh-agent/linux/suse11/wazuh_agent_package_suse11.html',
  '/installation-guide/installing-wazuh-agent/linux/suse11/wazuh_agent_sources_suse11.html',
  '/installation-guide/installing-wazuh-agent/linux/suse12/index.html',
  '/installation-guide/installing-wazuh-agent/linux/suse12/wazuh_agent_package_suse12.html',
  '/installation-guide/installing-wazuh-agent/linux/suse12/wazuh_agent_sources_suse12.html',
  '/installation-guide/installing-wazuh-agent/linux/ubuntu12.04-or-greater/index.html',
  '/installation-guide/installing-wazuh-agent/linux/ubuntu12.04-or-greater/wazuh_agent_package_ubuntu12.04_or_greater.html',
  '/installation-guide/installing-wazuh-agent/linux/ubuntu12.04-or-greater/wazuh_agent_sources_ubuntu12.04_or_greater.html',
  '/installation-guide/installing-wazuh-agent/macos/index.html',
  '/installation-guide/installing-wazuh-agent/macos/wazuh_agent_package_macos.html',
  '/installation-guide/installing-wazuh-agent/solaris/solaris10/index.html',
  '/installation-guide/installing-wazuh-agent/solaris/solaris10/wazuh_agent_package_solaris10.html',
  '/installation-guide/installing-wazuh-agent/solaris/solaris10/wazuh_agent_sources_solaris10.html',
  '/installation-guide/installing-wazuh-agent/solaris/solaris11/index.html',
  '/installation-guide/installing-wazuh-agent/solaris/solaris11/wazuh_agent_package_solaris11.html',
  '/installation-guide/installing-wazuh-agent/solaris/solaris11/wazuh_agent_sources_solaris11.html',
  '/installation-guide/installing-wazuh-agent/windows/wazuh_agent_package_windows.html',
  '/installation-guide/installing-wazuh-agent/windows/wazuh_agent_sources_windows.html',
  '/installation-guide/installing-wazuh-manager/linux/amazon/index.html',
  '/installation-guide/installing-wazuh-manager/linux/amazon/wazuh_server_packages_amazon.html',
  '/installation-guide/installing-wazuh-manager/linux/amazon/wazuh_server_sources_amazon.html',
  '/installation-guide/installing-wazuh-manager/linux/centos/index.html',
  '/installation-guide/installing-wazuh-manager/linux/centos/wazuh_server_packages_centos.html',
  '/installation-guide/installing-wazuh-manager/linux/centos/wazuh_server_sources_centos.html',
  '/installation-guide/installing-wazuh-manager/linux/debian/index.html',
  '/installation-guide/installing-wazuh-manager/linux/debian/wazuh_server_packages_deb.html',
  '/installation-guide/installing-wazuh-manager/linux/debian/wazuh_server_sources_deb.html',
  '/installation-guide/installing-wazuh-manager/linux/fedora/index.html',
  '/installation-guide/installing-wazuh-manager/linux/fedora/wazuh_server_packages_fedora.html',
  '/installation-guide/installing-wazuh-manager/linux/fedora/wazuh_server_sources_fedora.html',
  '/installation-guide/installing-wazuh-manager/linux/opensuse/index.html',
  '/installation-guide/installing-wazuh-manager/linux/opensuse/wazuh_server_packages_opensuse.html',
  '/installation-guide/installing-wazuh-manager/linux/opensuse/wazuh_server_sources_opensuse.html',
  '/installation-guide/installing-wazuh-manager/linux/oracle/index.html',
  '/installation-guide/installing-wazuh-manager/linux/oracle/wazuh_server_packages_oracle.html',
  '/installation-guide/installing-wazuh-manager/linux/oracle/wazuh_server_sources_oracle.html',
  '/installation-guide/installing-wazuh-manager/linux/rhel/index.html',
  '/installation-guide/installing-wazuh-manager/linux/rhel/wazuh_server_packages_rhel.html',
  '/installation-guide/installing-wazuh-manager/linux/rhel/wazuh_server_sources_rhel.html',
  '/installation-guide/installing-wazuh-manager/linux/suse/index.html',
  '/installation-guide/installing-wazuh-manager/linux/suse/wazuh_server_packages_suse.html',
  '/installation-guide/installing-wazuh-manager/linux/suse/wazuh_server_sources_suse.html',
  '/installation-guide/installing-wazuh-manager/linux/ubuntu/index.html',
  '/installation-guide/installing-wazuh-manager/linux/ubuntu/wazuh_server_packages_ubuntu.html',
  '/installation-guide/installing-wazuh-manager/linux/ubuntu/wazuh_server_sources_ubuntu.html',
  '/monitoring.html',
  '/release-notes/release_3_9_0.html',
  '/release-notes/release_3_9_1.html',
  '/release-notes/release_3_9_2.html',
  '/release-notes/release_3_9_3.html',
  '/release-notes/release_3_9_4.html',
  '/release-notes/release_3_9_5.html',
  '/upgrade-guide/index.html',
  '/upgrade-guide/upgrading-elastic-stack/elastic_server_hard_upgrade.html',
  '/upgrade-guide/upgrading-elastic-stack/elastic_server_minor_upgrade.html',
  '/upgrade-guide/upgrading-elastic-stack/elastic_server_rolling_upgrade.html',
  '/upgrade-guide/upgrading-elastic-stack/index.html',
  '/user-manual/agents/remote-upgrading/create-custom-wpk/create-custom-wpk-automatically.html',
  '/user-manual/agents/listing/wazuh-app.html',
  '/user-manual/agents/listing/index.html',
  '/user-manual/capabilities/fluent-forwarder.html',
  '/user-manual/capabilities/log-data-collection/how-to-collect-wlogs.html',
  '/user-manual/capabilities/sec-config-assessment/how-it-works.html',
  '/user-manual/capabilities/sec-config-assessment/index.html',
  '/user-manual/capabilities/sec-config-assessment/security-configuration-assessment.html',
  '/user-manual/capabilities/sec-config-assessment/use-case.html',
  '/user-manual/kibana-app/reference/custom-dashboard.html',
  '/user-manual/reference/ossec-conf/fluent-forward.html',
  '/user-manual/reference/ossec-conf/sca.html',
  '/user-manual/registering/api/api-register-linux-unix.html',
  '/user-manual/registering/api/api-register-macos.html',
  '/user-manual/registering/api/api-register-windows.html',
  '/user-manual/registering/cli/using-command-line-linux.html',
  '/user-manual/registering/cli/using-command-line-macos.html',
  '/user-manual/registering/cli/using-command-line-unix.html',
  '/user-manual/registering/cli/using-command-line-windows.html',
  '/user-manual/registering/linux-unix-simple-registration.html',
  '/user-manual/registering/macos-simple-registration.html',
  '/user-manual/registering/manager-verification/agent-verification-registration.html',
  '/user-manual/registering/manager-verification/agents/linux-unix-agent-verification.html',
  '/user-manual/registering/manager-verification/agents/linux-unix-manager-verification.html',
  '/user-manual/registering/manager-verification/agents/macos-agent-verification.html',
  '/user-manual/registering/manager-verification/agents/macos-manager-verification.html',
  '/user-manual/registering/manager-verification/agents/windows-agent-verification.html',
  '/user-manual/registering/manager-verification/agents/windows-manager-verification.html',
  '/user-manual/registering/manager-verification/host-verification-registration.html',
  '/user-manual/registering/manager-verification/manager-verification-registration.html',
  '/user-manual/registering/password-authorization-registration-service.html',
  '/user-manual/registering/password/linux-unix-password-registration.html',
  '/user-manual/registering/password/macos-password-registration.html',
  '/user-manual/registering/password/windows-password-registration.html',
  '/user-manual/registering/using-command-line.html',
  '/user-manual/registering/windows-simple-registration.html',
];


/* Pages no longer available in 3.9 */

removedUrls['3.9'] = [
  '/azure/installation.html',
  '/deploying-with-ansible/roles/wazuh-logstash.html',
  '/installation-guide/installing-elastic-stack/elastic_ssl.html',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_deb.html',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_rpm.html',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_sources.html',
  '/installation-guide/installing-wazuh-server/automatic_api.html',
  '/installation-guide/installing-wazuh-server/sources_installation.html',
  '/installation-guide/installing-wazuh-server/wazuh_server_deb.html',
  '/installation-guide/installing-wazuh-server/wazuh_server_rpm.html',
  '/installation-guide/upgrading/same_major.html',
  '/user-manual/agents/command-line/index.html',
  '/user-manual/agents/restful-api/index.html',
  '/user-manual/kibana-app/configure-xpack/configure-xpack-users.html',
  '/user-manual/kibana-app/configure-xpack/defining-xpack-users.html',
  '/user-manual/kibana-app/configure-xpack/index.html',
  '/user-manual/kibana-app/configure-xpack/xpack-troubleshooting.html',
];


/* *** RELEASE 3.8 *** */

/* Redirections from 3.7 to 3.8 */

redirections.push(
    {
      '3.7': '/amazon/installation.html#cloudtrail',
      '3.8': '/amazon/services/cloudtrail.html',
    },
    {
      '3.7': '/amazon/installation.html#installing-dependencies',
      '3.8': '/amazon/configuration/dependencies.html',
    },
    {
      '3.7': '/amazon/installation.html#plugin-configuration',
      '3.8': '/amazon/configuration/credentials.html',
    },
    {
      '3.7': '/amazon/installation.html#vpc-flow',
      '3.8': '/amazon/services/vpc.html',
    },
    {
      '3.7': '/amazon/installation.html#other-aws-services-guard-duty-macie-and-iam',
      '3.8': '/amazon/services/config.html',
    },
    {
      '3.7': '/amazon/installation.html#other-aws-services-guard-duty-macie-and-iam',
      '3.8': '/amazon/services/guardduty.html',
    },
    {
      '3.7': '/amazon/installation.html#other-aws-services-guard-duty-macie-and-iam',
      '3.8': '/amazon/services/macie.html',
    },
    {
      '3.7': '/amazon/installation.html#create-an-iam-user',
      '3.8': '/amazon/configuration/credentials.html#create-an-iam-user',
    },
    {
      '3.7': '/amazon/installation.html#authenticating-options',
      '3.8': '/amazon/configuration/credentials.html#authenticating-options',
    },
    {
      '3.7': '/amazon/installation.html#considerations-for-configuration',
      '3.8': '/amazon/configuration/considerations.html#considerations-for-configuration',
    },
    {
      '3.7': '/amazon/use-cases/vpc.html',
      '3.8': '/amazon/services/vpc.html#use-cases',
    },
    {
      '3.7': '/installation-guide/optional-configurations/automatic-api.html',
      '3.8': '/installation-guide/installing-wazuh-server/automatic_api.html',
    },
    {
      '3.7': '/installation-guide/optional-configurations/elastic-tuning.html',
      '3.8': '/installation-guide/installing-elastic-stack/elastic_tuning.html',
    },
    {
      '3.7': '/installation-guide/optional-configurations/elastic_ssl.html',
      '3.8': '/installation-guide/installing-elastic-stack/elastic_ssl.html',
    },
    {
      '3.7': '/installation-guide/optional-configurations/kibana_ssl.html',
      '3.8': '/installation-guide/installing-elastic-stack/kibana_ssl.html',
    },
    {
      '3.7': '/installation-guide/optional-configurations/securing-api.html',
      '3.8': '/installation-guide/installing-wazuh-server/securing_api.html',
    }
);

/* Pages added in 3.8 */

newUrls['3.8'] = [
  '/amazon/configuration/index.html',
  '/amazon/instances.html',
  '/amazon/services/index.html',
  '/amazon/services/config.html',
  '/amazon/services/inspector.html',
  '/amazon/services/kms.html',
  '/amazon/services/trusted-advisor.html',
  '/installation-guide/installing-elastic-stack/searchguard.html',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_linux.html',
  '/release-notes/release_3_8_0.html',
  '/release-notes/release_3_8_1.html',
  '/release-notes/release_3_8_2.html',
  '/user-manual/capabilities/agent-key-polling.html',
  '/user-manual/kibana-app/reference/configure-indices.html',
  '/user-manual/reference/ossec-conf/wodle-agent-key-polling.html',
];


/* Pages no longer available in 3.8 */

removedUrls['3.8'] = [
  '/amazon/use-cases/index.html',
  '/amazon/use-cases/ec2.html',
  '/amazon/use-cases/iam.html',
  '/amazon/use-cases/s3.html',
  '/installation-guide/optional-configurations/index.html',
  '/amazon/installation.html',
];


/* *** RELEASE 3.7 *** */

/* Redirections from 3.6 to 3.7 */

redirections.push(
    {
      '3.6': '/deploying-with-ansible/consider.html',
      '3.7': '/deploying-with-ansible/installation-guide.html',
    },
    {
      '3.6': '/deploying-with-ansible/install-ansible-control.html',
      '3.7': '/deploying-with-ansible/guide/install-ansible.html',
    },
    {
      '3.6': '/installing-splunk/splunk_reverse_proxy.html',
      '3.7': '/installing-splunk/splunk-reverse-proxy.html',
    },
    {
      '3.6': '/installing-splunk/splunk_forwarder.html',
      '3.7': '/installing-splunk/splunk-forwarder.html',
    },
    {
      '3.6': '/installing-splunk/splunk_wazuh.html',
      '3.7': '/installing-splunk/splunk-app.html',
    },
    {
      '3.6': '/installing-splunk/splunk_installation.html',
      '3.7': '/installing-splunk/splunk-basic.html',
    },
    {
      '3.6': '/user-manual/capabilities/virustotal-scan/what-is-virustotal.html',
      '3.7': '/user-manual/capabilities/virustotal-scan/about.html',
    },
    {
      '3.6': '/user-manual/capabilities/virustotal-scan/terms-of-service.html',
      '3.7': '/user-manual/capabilities/virustotal-scan/about.html#terms-of-service',
    },
    {
      '3.6': '/user-manual/reference/statistics-files.html#statistics-files',
      '3.7': '/user-manual/reference/statistics-files/index.html',
    },
    {
      '3.6': '/user-manual/reference/statistics-files.html#ossec-agentd-state-file',
      '3.7': '/user-manual/reference/statistics-files/ossec-agentd-state.html',
    },
    {
      '3.6': '/user-manual/reference/statistics-files.html#ossec-remoted-state-file',
      '3.7': '/user-manual/reference/statistics-files/ossec-remoted-state.html',
    }
);

/* Pages added in 3.7 */

newUrls['3.7'] = [
  '/azure/index.html',
  '/azure/installation.html',
  '/azure/monitoring activity.html',
  '/azure/monitoring instances.html',
  '/azure/monitoring services.html',
  '/deploying-with-ansible/guide/install-elk-server.html',
  '/deploying-with-ansible/guide/install-wazuh-agent.html',
  '/deploying-with-ansible/guide/install-wazuh-server.html',
  '/development/makefile.html',
  '/docker-monitor/index.html',
  '/docker-monitor/monitoring_containers_activity.html',
  '/docker-monitor/monitoring_docker_server.html',
  '/docker/container-usage.html',
  '/installation-guide/optional-configurations/automatic-api.html',
  '/installing-splunk/splunk-distributed.html',
  '/installing-splunk/splunk-polling.html',
  '/release-notes/release_3_7_0.html',
  '/release-notes/release_3_7_1.html',
  '/release-notes/release_3_7_2.html',
  '/user-manual/api/queries.html',
  '/user-manual/kibana-app/features/query-configuration.html',
  '/user-manual/manager/manual-database-output.html',
  '/user-manual/reference/daemons/ossec-integratord.html',
  '/user-manual/reference/daemons/wazuh-db.html',
  '/user-manual/reference/statistics-files/ossec-analysisd-state.html',
  '/user-manual/reference/tools/fim_migrate.html',
  '/user-manual/ruleset/rules-classification.html',
];


/* *** RELEASE 3.6 *** */

/* Redirections from 3.5 to 3.6 */

redirections.push(
    {
      '3.5': '/installation-guide/optional-configurations/kibana_ssl.html',
      '3.6': '/installing-splunk/splunk_reverse_proxy.html',
    },
    {
      '3.5': '/installation-guide/installing-splunk/index.html',
      '3.6': '/installing-splunk/index.html',
    },
    {
      '3.5': '/installation-guide/installing-splunk/splunk_forwarder.html',
      '3.6': '/installing-splunk/splunk_forwarder.html',
    },
    {
      '3.5': '/installation-guide/installing-splunk/splunk_installation.html',
      '3.6': '/installing-splunk/splunk_installation.html',
    },
    {
      '3.5': '/installation-guide/installing-splunk/splunk_wazuh.html',
      '3.6': '/installing-splunk/splunk_wazuh.html',
    }
);

/* Pages added in 3.6 */

newUrls['3.6'] = [
  '/amazon/troubleshooting.html',
  '/amazon/use-cases/s3.html',
  '/release-notes/release_3_6_0.html',
  '/release-notes/release_3_6_1.html',
  '/user-manual/reference/ossec-conf/wodle-s3.html',
  '/user-manual/reference/statistics-files.html',
];


/* Pages no longer available in 3.6 */

removedUrls['3.6'] = [
  '/user-manual/reference/ossec-conf/wodle-cloudtrail.html',
];


/* *** RELEASE 3.5 *** */

/* Redirections from 3.4 to 3.5 */

redirections.push(
    {
      '3.4': '/migrating-from-ossec/ossec-packages-agent.html',
      '3.5': '/migrating-from-ossec/ossec-agent.html',
    },
    {
      '3.4': '/migrating-from-ossec/ossec-packages-manager.html',
      '3.5': '/migrating-from-ossec/ossec-server.html',
    }
);

/* Pages added in 3.5 */

newUrls['3.5'] = [
  '/release-notes/release_3_5_0.html',
  '/user-manual/capabilities/osquery.html',
  '/user-manual/capabilities/syscollector.html',
  '/user-manual/kibana-app/configure-xpack/configure-xpack-users.html',
  '/user-manual/kibana-app/configure-xpack/defining-xpack-users.html',
  '/user-manual/kibana-app/configure-xpack/index.html',
  '/user-manual/kibana-app/configure-xpack/xpack-troubleshooting.html',
  '/user-manual/kibana-app/connect-kibana-app.html',
  '/user-manual/kibana-app/features/app-overview.html',
  '/user-manual/kibana-app/features/dev-tools.html',
  '/user-manual/kibana-app/features/download-csv.html',
  '/user-manual/kibana-app/features/index.html',
  '/user-manual/kibana-app/features/index-pattern.html',
  '/user-manual/kibana-app/features/reporting.html',
  '/user-manual/kibana-app/features/ruleset.html',
  '/user-manual/kibana-app/features/settings.html',
  '/user-manual/kibana-app/index.html',
  '/user-manual/kibana-app/reference/config-file.html',
  '/user-manual/kibana-app/reference/elasticsearch.html',
  '/user-manual/kibana-app/reference/index.html',
  '/user-manual/kibana-app/troubleshooting.html',
  '/user-manual/reference/ossec-conf/wodle-osquery.html',
];

/* Pages no longer available in 3.5 */

removedUrls['3.5'] = [
  '/installation-guide/installing-elastic-stack/connect_wazuh_app.html',
  '/user-manual/capabilities/vuls.html',
  '/user-manual/reference/daemons/clusterd-internal.html',
];


/* *** RELEASE 3.4 *** */

/* Pages added in 3.4 */

newUrls['3.4'] = [
  '/release-notes/release_3_4_0.html',
  '/user-manual/capabilities/auditing-whodata/index.html',
  '/user-manual/capabilities/auditing-whodata/who-linux.html',
  '/user-manual/capabilities/auditing-whodata/who-windows.html',
  '/user-manual/capabilities/auditing-whodata/who-windows-policies.html',
];


/* *** RELEASE 3.3 *** */

/* Pages added in 3.3 */

newUrls['3.3'] = [
  '/release-notes/release_3_3_0.html',
  '/release-notes/release_3_3_1.html',
  '/user-manual/reference/ossec-conf/socket.html',
];


/* *** RELEASE 3.2 *** */

/* Redirections from 3.1 to 3.2 */

redirections.push({
  '3.1': '/amazon/integration.html',
  '3.2': '/amazon/installation.html',
});

/* Pages added in 3.2 */

newUrls['3.2'] = [
  'gdpr/gdpr-II.html',
  'gdpr/gdpr-III.html',
  'gdpr/gdpr-IV.html',
  'gdpr/index.html',
  'installation-guide/compatibility_matrix/index.html',
  'installation-guide/installing-splunk/index.html',
  'installation-guide/installing-splunk/splunk_forwarder.html',
  'installation-guide/installing-splunk/splunk_installation.html',
  'installation-guide/installing-splunk/splunk_wazuh.html',
  'installation-guide/upgrading/latest_wazuh3_minor.html',
  'release-notes/release_3_2_0.html',
  'release-notes/release_3_2_1.html',
  'release-notes/release_3_2_2.html',
  'release-notes/release_3_2_3.html',
  'release-notes/release_3_2_4.html',
  'user-manual/capabilities/vulnerability-detection.html',
  'user-manual/reference/ossec-conf/wodle-cloudtrail.html',
  'user-manual/reference/ossec-conf/wodle-syscollector.html',
  'user-manual/reference/ossec-conf/wodle-vuln-detector.html',
];


/* *** RELEASE 3.1 *** */

/* Pages added in 3.1 */

newUrls['3.1'] = [
  '/installation-guide/installing-wazuh-agent/wazuh_agent_aix.html',
  '/installation-guide/upgrading/restore_alerts.html',
  '/release-notes/release_3_1_0.html',
  '/user-manual/capabilities/policy-monitoring/ciscat/ciscat.html',
  '/user-manual/capabilities/vuls.html',
  '/user-manual/reference/ossec-conf/wodle-ciscat.html',
  '/user-manual/reference/ossec-conf/wodle-command.html',
  '/user-manual/reference/unattended-installation.html',
];

/* Pages no longer available in 3.1 */

removedUrls['3.1'] = [
  '/installation-guide/unattended-installation.html',
];


/* *** RELEASE 3.0 *** */

/* Redirections from 2.1 to 3.0 */

redirections.push({
  '2.1': '/user-manual/reference/tools/update-ruleset.py.html',
  '3.0': '/user-manual/reference/tools/update_ruleset.html/',
});

/* Pages added in 3.0 */

newUrls['3.0'] = [
  '/installation-guide/installing-wazuh-agent/wazuh_agent_hpux.html',
  '/installation-guide/upgrading/different_major.html',
  '/release-notes/release_3_0_0.html',
  '/user-manual/agents/agent-life-cycle.html',
  '/user-manual/agents/grouping-agents.html',
  '/user-manual/agents/remote-upgrading/create-custom-wpk.html',
  '/user-manual/agents/remote-upgrading/custom-repository.html',
  '/user-manual/agents/remote-upgrading/index.html',
  '/user-manual/agents/remote-upgrading/install-custom-wpk.html',
  '/user-manual/agents/remote-upgrading/upgrading-agent.html',
  '/user-manual/agents/remote-upgrading/wpk-list.html',
  '/user-manual/capabilities/virustotal-scan/index.html',
  '/user-manual/capabilities/virustotal-scan/integration.html',
  '/user-manual/capabilities/virustotal-scan/terms-of-service.html',
  '/user-manual/capabilities/virustotal-scan/what-is-virustotal.html',
  '/user-manual/manager/wazuh-cluster.html',
  '/user-manual/reference/daemons/clusterd.html',
  '/user-manual/reference/daemons/clusterd-internal.html',
  '/user-manual/reference/ossec-conf/cluster.html',
  '/user-manual/reference/tools/agent_groups.html',
  '/user-manual/reference/tools/agent_upgrade.html',
  '/user-manual/reference/tools/cluster_control.html',
  '/user-manual/ruleset/json-decoder.html',
];


/* *** RELEASE 2.1 *** */

/* Pages added in 2.1 */

newUrls['2.1'] = [
  '/',
  '/amazon/',
  '/amazon/integration.html',
  '/amazon/use-cases/ec2.html',
  '/amazon/use-cases/iam.html',
  '/amazon/use-cases/',
  '/amazon/use-cases/vpc.html',
  '/deploying-with-ansible/consider.html',
  '/deploying-with-ansible/',
  '/deploying-with-ansible/install-ansible-control.html',
  '/deploying-with-ansible/reference.html',
  '/deploying-with-ansible/roles/',
  '/deploying-with-ansible/roles/wazuh-agent.html',
  '/deploying-with-ansible/roles/wazuh-elasticsearch.html',
  '/deploying-with-ansible/roles/wazuh-filebeat.html',
  '/deploying-with-ansible/roles/wazuh-kibana.html',
  '/deploying-with-ansible/roles/wazuh-logstash.html',
  '/deploying-with-ansible/roles/wazuh-manager.html',
  '/deploying-with-ansible/setup-remote-systems.html',
  '/deploying-with-puppet/',
  '/deploying-with-puppet/setup-puppet/',
  '/deploying-with-puppet/setup-puppet/install-puppet-agent.html',
  '/deploying-with-puppet/setup-puppet/install-puppet-master.html',
  '/deploying-with-puppet/setup-puppet/setup-puppet-certificates.html',
  '/deploying-with-puppet/wazuh-puppet-module/',
  '/deploying-with-puppet/wazuh-puppet-module/reference-wazuh-puppet/ossec-scanpaths.html',
  '/deploying-with-puppet/wazuh-puppet-module/reference-wazuh-puppet/wazuh-agent-class.html',
  '/deploying-with-puppet/wazuh-puppet-module/reference-wazuh-puppet/wazuh-server-class.html',
  '/development/client-keys.html',
  '/development/',
  '/development/message-format.html',
  '/docker/docker-installation.html',
  '/docker/faq-wazuh-container.html',
  '/docker/',
  '/docker/wazuh-container.html',
  '/getting-started/architecture.html',
  '/getting-started/components.html',
  '/getting-started/',
  '/getting-started/use-cases.html',
  '/getting-started/use-cases.html',
  '/installation-guide/',
  '/installation-guide/installing-elastic-stack/connect_wazuh_app.html',
  '/installation-guide/installing-elastic-stack/elastic_server_deb.html',
  '/installation-guide/installing-elastic-stack/elastic_server_rpm.html',
  '/installation-guide/installing-elastic-stack/',
  '/installation-guide/installing-wazuh-agent/',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_deb.html',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_macos.html',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_rpm.html',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_solaris.html',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_sources.html',
  '/installation-guide/installing-wazuh-agent/wazuh_agent_windows.html',
  '/installation-guide/installing-wazuh-server/',
  '/installation-guide/installing-wazuh-server/sources_installation.html',
  '/installation-guide/installing-wazuh-server/wazuh_server_deb.html',
  '/installation-guide/installing-wazuh-server/wazuh_server_rpm.html',
  '/installation-guide/optional-configurations/elastic-tuning.html',
  '/installation-guide/optional-configurations/elastic_ssl.html',
  '/installation-guide/optional-configurations/',
  '/installation-guide/optional-configurations/kibana_ssl.html',
  '/installation-guide/optional-configurations/securing-api.html',
  '/installation-guide/packages-list/',
  '/installation-guide/unattended-installation.html',
  '/installation-guide/upgrading/',
  '/installation-guide/upgrading/legacy/',
  '/installation-guide/upgrading/legacy/upgrading-elastic-stack.html',
  '/installation-guide/upgrading/legacy/upgrading-wazuh-agent.html',
  '/installation-guide/upgrading/legacy/upgrading-wazuh-server.html',
  '/installation-guide/upgrading/same_major.html',
  '/installation-guide/upgrading/same_minor.html',
  '/installation-guide/virtual-machine.html',
  '/migrating-from-ossec/',
  '/migrating-from-ossec/ossec-packages-agent.html',
  '/migrating-from-ossec/ossec-packages-manager.html',
  '/not_found.html',
  '/pci-dss/active-response.html',
  '/pci-dss/elastic.html',
  '/pci-dss/file-integrity-monitoring.html',
  '/pci-dss/',
  '/pci-dss/log-analysis.html',
  '/pci-dss/policy-monitoring.html',
  '/pci-dss/rootkit-detection.html',
  '/release-notes/',
  '/release-notes/release_2_1.html',
  '/user-manual/agents/agent-connection.html',
  '/user-manual/agents/command-line/',
  '/user-manual/agents/command-line/listing.html',
  '/user-manual/agents/command-line/register.html',
  '/user-manual/agents/command-line/remove.html',
  '/user-manual/agents/',
  '/user-manual/agents/restful-api/',
  '/user-manual/agents/restful-api/listing.html',
  '/user-manual/agents/restful-api/register.html',
  '/user-manual/agents/restful-api/remove.html',
  '/user-manual/agents/wazuh-app.html',
  '/user-manual/api/configuration.html',
  '/user-manual/api/examples.html',
  '/user-manual/api/getting-started.html',
  '/user-manual/api/',
  '/user-manual/api/reference.html',
  '/user-manual/capabilities/active-response/how-it-works.html',
  '/user-manual/capabilities/active-response/',
  '/user-manual/capabilities/active-response/remediation-configuration.html',
  '/user-manual/capabilities/active-response/remediation-faq.html',
  '/user-manual/capabilities/agentless-monitoring/agentless-configuration.html',
  '/user-manual/capabilities/agentless-monitoring/agentless-faq.html',
  '/user-manual/capabilities/agentless-monitoring/how-it-works.html',
  '/user-manual/capabilities/agentless-monitoring/',
  '/user-manual/capabilities/anomalies-detection/anomaly-configuration.html',
  '/user-manual/capabilities/anomalies-detection/anomaly-faq.html',
  '/user-manual/capabilities/anomalies-detection/how-it-works.html',
  '/user-manual/capabilities/anomalies-detection/',
  '/user-manual/capabilities/antiflooding.html',
  '/user-manual/capabilities/command-monitoring/command-configuration.html',
  '/user-manual/capabilities/command-monitoring/command-faq.html',
  '/user-manual/capabilities/command-monitoring/how-it-works.html',
  '/user-manual/capabilities/command-monitoring/',
  '/user-manual/capabilities/file-integrity/fim-configuration.html',
  '/user-manual/capabilities/file-integrity/fim-faq.html',
  '/user-manual/capabilities/file-integrity/how-it-works.html',
  '/user-manual/capabilities/file-integrity/',
  '/user-manual/capabilities/',
  '/user-manual/capabilities/labels.html',
  '/user-manual/capabilities/log-data-collection/how-it-works.html',
  '/user-manual/capabilities/log-data-collection/',
  '/user-manual/capabilities/log-data-collection/log-data-configuration.html',
  '/user-manual/capabilities/log-data-collection/log-data-faq.html',
  '/user-manual/capabilities/policy-monitoring/',
  '/user-manual/capabilities/policy-monitoring/openscap/how-it-works.html',
  '/user-manual/capabilities/policy-monitoring/openscap/',
  '/user-manual/capabilities/policy-monitoring/openscap/oscap-configuration.html',
  '/user-manual/capabilities/policy-monitoring/openscap/oscap-faq.html',
  '/user-manual/capabilities/policy-monitoring/rootcheck/how-it-works.html',
  '/user-manual/capabilities/policy-monitoring/rootcheck/',
  '/user-manual/capabilities/policy-monitoring/rootcheck/rootcheck-configuration.html',
  '/user-manual/capabilities/policy-monitoring/rootcheck/rootcheck-faq.html',
  '/user-manual/capabilities/system-calls-monitoring/audit-configuration.html',
  '/user-manual/capabilities/system-calls-monitoring/how-it-works.html',
  '/user-manual/capabilities/system-calls-monitoring/',
  '/user-manual/',
  '/user-manual/manager/alert-threshold.html',
  '/user-manual/manager/automatic-reports.html',
  '/user-manual/manager/',
  '/user-manual/manager/manual-email-report/',
  '/user-manual/manager/manual-email-report/smtp_authentication.html',
  '/user-manual/manager/manual-integration.html',
  '/user-manual/manager/manual-syslog-output.html',
  '/user-manual/manager/remote-service.html',
  '/user-manual/overview.html',
  '/user-manual/reference/centralized-configuration.html',
  '/user-manual/reference/daemons/',
  '/user-manual/reference/daemons/ossec-agentd.html',
  '/user-manual/reference/daemons/ossec-agentlessd.html',
  '/user-manual/reference/daemons/ossec-analysisd.html',
  '/user-manual/reference/daemons/ossec-authd.html',
  '/user-manual/reference/daemons/ossec-csyslogd.html',
  '/user-manual/reference/daemons/ossec-dbd.html',
  '/user-manual/reference/daemons/ossec-execd.html',
  '/user-manual/reference/daemons/ossec-logcollector.html',
  '/user-manual/reference/daemons/ossec-maild.html',
  '/user-manual/reference/daemons/ossec-monitord.html',
  '/user-manual/reference/daemons/ossec-remoted.html',
  '/user-manual/reference/daemons/ossec-reportd.html',
  '/user-manual/reference/daemons/ossec-syscheckd.html',
  '/user-manual/reference/daemons/wazuh-modulesd.html',
  '/user-manual/reference/',
  '/user-manual/reference/internal-options.html',
  '/user-manual/reference/ossec-conf/active-response.html',
  '/user-manual/reference/ossec-conf/agentless.html',
  '/user-manual/reference/ossec-conf/alerts.html',
  '/user-manual/reference/ossec-conf/auth.html',
  '/user-manual/reference/ossec-conf/client.html',
  '/user-manual/reference/ossec-conf/client_buffer.html',
  '/user-manual/reference/ossec-conf/commands.html',
  '/user-manual/reference/ossec-conf/database-output.html',
  '/user-manual/reference/ossec-conf/email_alerts.html',
  '/user-manual/reference/ossec-conf/global.html',
  '/user-manual/reference/ossec-conf/',
  '/user-manual/reference/ossec-conf/integration.html',
  '/user-manual/reference/ossec-conf/labels.html',
  '/user-manual/reference/ossec-conf/localfile.html',
  '/user-manual/reference/ossec-conf/logging.html',
  '/user-manual/reference/ossec-conf/remote.html',
  '/user-manual/reference/ossec-conf/reports.html',
  '/user-manual/reference/ossec-conf/rootcheck.html',
  '/user-manual/reference/ossec-conf/ruleset.html',
  '/user-manual/reference/ossec-conf/syscheck.html',
  '/user-manual/reference/ossec-conf/syslog-output.html',
  '/user-manual/reference/ossec-conf/verifying-configuration.html',
  '/user-manual/reference/ossec-conf/wodle-openscap.html',
  '/user-manual/reference/tools/agent-auth.html',
  '/user-manual/reference/tools/agent_control.html',
  '/user-manual/reference/tools/clear_stats.html',
  '/user-manual/reference/tools/',
  '/user-manual/reference/tools/manage_agents.html',
  '/user-manual/reference/tools/ossec-control.html',
  '/user-manual/reference/tools/ossec-logtest.html',
  '/user-manual/reference/tools/ossec-makelists.html',
  '/user-manual/reference/tools/ossec-regex.html',
  '/user-manual/reference/tools/rootcheck_control.html',
  '/user-manual/reference/tools/syscheck_control.html',
  '/user-manual/reference/tools/syscheck_update.html',
  '/user-manual/reference/tools/update-ruleset.py.html',
  '/user-manual/reference/tools/util.sh.html',
  '/user-manual/reference/tools/verify-agent-conf.html',
  '/user-manual/registering/',
  '/user-manual/registering/registration-process.html',
  '/user-manual/registering/use-registration-service.html',
  '/user-manual/ruleset/cdb-list.html',
  '/user-manual/ruleset/contribute.html',
  '/user-manual/ruleset/custom.html',
  '/user-manual/ruleset/dynamic-fields.html',
  '/user-manual/ruleset/getting-started.html',
  '/user-manual/ruleset/',
  '/user-manual/ruleset/ruleset-xml-syntax/decoders.html',
  '/user-manual/ruleset/ruleset-xml-syntax/',
  '/user-manual/ruleset/ruleset-xml-syntax/regex.html',
  '/user-manual/ruleset/ruleset-xml-syntax/rules.html',
  '/user-manual/ruleset/testing.html',
  '/user-manual/ruleset/update.html',
];