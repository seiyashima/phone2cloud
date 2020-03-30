#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkContainerStack } from '../lib/cdk_container-stack';

const app = new cdk.App();
new CdkContainerStack(app, 'CdkContainerStack');
