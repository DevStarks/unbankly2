import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import Text from '../Components/AppText'
import ButtonInput from '../Components/ButtonInput'
import SmallButton from '../Components/SmallButton'

// Styles
import styles from './Styles/NewLoanScreenStyles'

class NewLoanScreen extends Component {
  get allRouteMappings () {
    return {
      RoleScreen: {
        stepNumber: 1,
        renderer: this.renderRoleForm,
        nextRoute: 'PartnerScreen'
      }
    }
  }

  get mappings () {
    const { navigation } = this.props
    return this.allRouteMappings[navigation.state.routeName]
  }

  navigateToNext () {
    this.props.navigation.navigate(this.mappings.nextRoute)
  }

  renderRoleForm () {
    const onSelect = () => {}
    const roleOptions = [
      { id: 'borrower', name: 'borrower' },
      { id: 'lender', name: 'lender' }
    ]

    return (
      <View style={styles.form}>
        <Text style={styles.question}>Are you the borrower or lender?</Text>

        <ButtonInput onSelect={onSelect} options={roleOptions} />
      </View>
    )
  }

  renderContent () {
    return this.mappings.renderer()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.logoThumb}
          source={Images.logoThumb}
          />

        <Text style={styles.title}>New Loan Setup: Step {`${this.mappings.stepNumber} of ${Object.keys(this.allRouteMappings).length}`}</Text>

        <Image source={Images.squirrel} resizeMode='cover' />

        {this.renderContent()}

        <View style={styles.navigation}>
          <SmallButton style={[styles.button, styles.backButton]} onPress={this.props.navigation.goBack} text='Back' />
          <SmallButton style={styles.button} onPress={this.navigateToNext} text='Next' />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { })(NewLoanScreen)
