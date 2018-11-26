import { BaseFactoryStrategy } from 'src/lib/Blockchain/FactoryStrategies/NoVersion/BaseFactoryStrategy.js';

export class W12ListerFactoryStrategy extends BaseFactoryStrategy {
    constructor(
        contractArtifacts,
        ContractWrapper,
        connector,
        W12CrowdsaleFactory,
        DetailedERC20Factory,
        ERC20Factory,
        TokenExchangerFactory,
        version
    ) {
        super(contractArtifacts, ContractWrapper, connector, version);

        this.W12CrowdsaleFactory = W12CrowdsaleFactory;
        this.ERC20Factory = ERC20Factory;
        this.DetailedERC20Factory = DetailedERC20Factory;
        this.TokenExchangerFactory = TokenExchangerFactory;
    }

    at(address) {
        const origin = super.at(address);

        origin.setFactories({
            W12CrowdsaleFactory: this.W12CrowdsaleFactory,
            ERC20Factory: this.ERC20Factory,
            TokenExchangerFactory: this.TokenExchangerFactory,
        });

        return origin;
    }
}