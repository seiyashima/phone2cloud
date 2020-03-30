import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ascl from '@aws-cdk/aws-autoscaling';
 
export class CdkContainerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // set up below vpc, subnet, cluster
    const vpc = new ec2.Vpc(
        this,
        'myVpc',
        { maxAzs: 1 }
    );

    const asg = new ascl.AutoScalingGroup(
        this,
        'myAsg',
        {
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2,
                                              ec2.InstanceSize.MEDIUM),
            machineImage: new ecs.EcsOptimizedAmi(),
            updateType: ascl.UpdateType.REPLACING_UPDATE,
            desiredCapacity: 2,
            vpc
        }
    );  
 

  }
}
